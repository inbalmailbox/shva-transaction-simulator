namespace Shva.Server.Helpers;

public static class RegionTimeZoneMapper
{
    public static string GetTimeZoneId(string region)
    {
        return region.Trim().ToLowerInvariant() switch
        {
            "israel" => "Israel Standard Time",
            "france" => "Romance Standard Time",
            "italy" => "W. Europe Standard Time",
            "cyprus" => "E. Europe Standard Time",
            "usa" => "Eastern Standard Time",
            _ => throw new ArgumentException($"Unsupported region: {region}")
        };
    }
}