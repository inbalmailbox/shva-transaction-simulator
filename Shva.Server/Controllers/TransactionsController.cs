using Microsoft.AspNetCore.Mvc;
using Shva.Server.DTOs;
using Shva.Server.Services;

namespace Shva.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TransactionsController : ControllerBase
{
    private readonly ITransactionService _transactionService;

    public TransactionsController(ITransactionService transactionService)
    {
        _transactionService = transactionService;
    }

    [HttpPost("simulate")]
    public async Task<ActionResult<SimulateTransactionResponse>> Simulate(
        [FromBody] SimulateTransactionRequest request)
    {
        try
        {
            var result = await _transactionService.SimulateAsync(request);
            return Ok(result);
        }
        catch (ArgumentException ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }

    [HttpGet("approved")]
    public async Task<ActionResult<List<ApprovedTransactionDto>>> GetApproved()
    {
        var result = await _transactionService.GetApprovedTransactionsAsync();
        return Ok(result);
    }
}