using Microsoft.EntityFrameworkCore;
using Shva.Server.Data;
using Shva.Server.DTOs;
using Shva.Server.Entities;
using Shva.Server.Enums;
using Shva.Server.Helpers;

namespace Shva.Server.Services;

public class TransactionService : ITransactionService
{
    private static readonly TimeSpan StartHour = new(8, 0, 0);
    private static readonly TimeSpan EndHour = new(18, 0, 0);

    private readonly AppDbContext _dbContext;

    public TransactionService(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<SimulateTransactionResponse> SimulateAsync(SimulateTransactionRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Region))
        {
            throw new ArgumentException("Region is required.");
        }

        var timeZoneId = RegionTimeZoneMapper.GetTimeZoneId(request.Region);
        var timeZone = TimeZoneInfo.FindSystemTimeZoneById(timeZoneId);

        var submittedAtUtc = DateTime.SpecifyKind(request.SubmittedAtUtc, DateTimeKind.Utc);
        var localTime = TimeZoneInfo.ConvertTimeFromUtc(submittedAtUtc, timeZone);

        var status = IsWithinBankingHours(localTime.TimeOfDay)
            ? TransactionStatus.Approved
            : TransactionStatus.Rejected;

        var entity = new TransactionSimulation
        {
            Region = request.Region,
            TimeZoneId = timeZoneId,
            SubmittedAtUtc = submittedAtUtc,
            LocalTime = localTime,
            Status = status,
            CreatedAtUtc = DateTime.UtcNow
        };

        _dbContext.TransactionSimulations.Add(entity);
        await _dbContext.SaveChangesAsync();

        return new SimulateTransactionResponse
        {
            Id = entity.Id,
            Region = entity.Region,
            TimeZoneId = entity.TimeZoneId,
            SubmittedAtUtc = entity.SubmittedAtUtc,
            LocalTime = entity.LocalTime,
            Status = entity.Status.ToString()
        };
    }

    public async Task<List<ApprovedTransactionDto>> GetApprovedTransactionsAsync()
    {
        return await _dbContext.TransactionSimulations
            .Where(x => x.Status == TransactionStatus.Approved)
            .OrderByDescending(x => x.CreatedAtUtc)
            .Select(x => new ApprovedTransactionDto
            {
                Id = x.Id,
                Region = x.Region,
                LocalTime = x.LocalTime,
                TimeZoneId = x.TimeZoneId
            })
            .ToListAsync();
    }

    private static bool IsWithinBankingHours(TimeSpan localTimeOfDay)
    {
        return localTimeOfDay >= StartHour && localTimeOfDay <= EndHour;
    }
}