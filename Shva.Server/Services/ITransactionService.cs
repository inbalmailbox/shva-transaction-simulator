using Shva.Server.DTOs;

namespace Shva.Server.Services;

public interface ITransactionService
{
    Task<SimulateTransactionResponse> SimulateAsync(SimulateTransactionRequest request);
    Task<List<ApprovedTransactionDto>> GetApprovedTransactionsAsync();
}