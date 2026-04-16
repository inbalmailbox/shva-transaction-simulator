using Shva.Server.Enums;

namespace Shva.Server.Entities;

public class TransactionSimulation
{
    public int Id { get; set; }
    public string Region { get; set; } = string.Empty;
    public DateTime SubmittedAtUtc { get; set; }
    public DateTime LocalTime { get; set; }
    public string TimeZoneId { get; set; } = string.Empty;
    public TransactionStatus Status { get; set; }
    public DateTime CreatedAtUtc { get; set; }
}