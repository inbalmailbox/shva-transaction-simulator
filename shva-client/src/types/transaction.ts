export interface SimulateTransactionRequest {
  region: string;
  submittedAtUtc: string;
}

export interface SimulateTransactionResponse {
  id: number;
  region: string;
  timeZoneId: string;
  submittedAtUtc: string;
  localTime: string;
  status: 'Approved' | 'Rejected';
}

export interface ApprovedTransaction {
  id: number;
  region: string;
  localTime: string;
  timeZoneId: string;
}