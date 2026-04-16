namespace Shva.Server.DTOs;

public class ApprovedTransactionDto
{
    public int Id { get; set; }

    public string Region { get; set; } = string.Empty;

    public DateTime LocalTime { get; set; }

    public string TimeZoneId { get; set; } = string.Empty;
}