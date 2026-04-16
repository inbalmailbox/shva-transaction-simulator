import type {
  ApprovedTransaction,
  SimulateTransactionRequest,
  SimulateTransactionResponse,
} from '../types/transaction';

const BASE_URL = 'https://localhost:7122/api/Transactions';

export async function simulateTransaction(
  payload: SimulateTransactionRequest
): Promise<SimulateTransactionResponse> {
  const response = await fetch(`${BASE_URL}/simulate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Failed to simulate transaction');
  }

  return response.json();
}

export async function getApprovedTransactions(): Promise<ApprovedTransaction[]> {
  const response = await fetch(`${BASE_URL}/approved`);

  if (!response.ok) {
    throw new Error('Failed to fetch approved transactions');
  }

  return response.json();
}