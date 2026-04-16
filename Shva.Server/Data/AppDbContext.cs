using System.Collections.Generic;
using System.Reflection.Emit;
using Microsoft.EntityFrameworkCore;
using Shva.Server.Entities;

namespace Shva.Server.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<TransactionSimulation> TransactionSimulations => Set<TransactionSimulation>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<TransactionSimulation>(entity =>
        {
            entity.HasKey(x => x.Id);

            entity.Property(x => x.Region)
                .IsRequired()
                .HasMaxLength(100);

            entity.Property(x => x.TimeZoneId)
                .IsRequired()
                .HasMaxLength(100);

            entity.Property(x => x.Status)
                .IsRequired()
                .HasMaxLength(20);
        });
    }
}