namespace Shva.Server.DTOs;

public class SimulateTransactionResponse
{
    public int Id { get; set; }

    public string Region { get; set; } = string.Empty;

    public string TimeZoneId { get; set; } = string.Empty;

    public DateTime SubmittedAtUtc { get; set; }

    public DateTime LocalTime { get; set; }

    public string Status { get; set; } = string.Empty;
}