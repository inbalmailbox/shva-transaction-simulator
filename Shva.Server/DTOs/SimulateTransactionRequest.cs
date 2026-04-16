namespace Shva.Server.DTOs;

public class SimulateTransactionRequest
{
    public string Region { get; set; } = string.Empty;

    public DateTime SubmittedAtUtc { get; set; }
}