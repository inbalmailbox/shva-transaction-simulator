import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import ApprovedTransactionsSection from '../components/ApprovedTransactionsSection/ApprovedTransactionsSection';
import type {
  ApprovedTransaction,
  SimulateTransactionResponse,
} from '../types/transaction';
import { getApprovedTransactions, simulateTransaction } from '../services/transactionsApi';
import './HomePage.css';

function HomePage() {
  const [approvedTransactions, setApprovedTransactions] = useState<ApprovedTransaction[]>([]);
  const [simulationResult, setSimulationResult] = useState<SimulateTransactionResponse | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function loadApprovedTransactions() {
    try {
      const data = await getApprovedTransactions();
      setApprovedTransactions(data);
    } catch {
      setError('Failed to load approved transactions.');
    }
  }

  useEffect(() => {
    loadApprovedTransactions();
  }, []);

  async function handleSimulate(region: string, time: string) {
    try {
      setError('');
      setIsSubmitting(true);

      const now = new Date();
      const [hours, minutes] = time.split(':');

      now.setHours(Number(hours), Number(minutes), 0, 0);

      const result = await simulateTransaction({
        region,
        submittedAtUtc: now.toISOString(),
      });

      setSimulationResult(result);
      await loadApprovedTransactions();
    } catch {
      setError('Something went wrong while simulating the transaction.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="page">
      <Header />

      <main className="page__main">
        <HeroSection
          onSimulate={handleSimulate}
          simulationResult={simulationResult}
          isSubmitting={isSubmitting}
        />

        {error && <p className="page__error">{error}</p>}

        <ApprovedTransactionsSection transactions={approvedTransactions} />
      </main>
    </div>
  );
}

export default HomePage;