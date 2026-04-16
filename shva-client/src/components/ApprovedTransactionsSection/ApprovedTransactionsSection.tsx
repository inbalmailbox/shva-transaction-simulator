import TransactionCard from '../TransactionCard/TransactionCard';
import type { ApprovedTransaction } from '../../types/transaction';
import './ApprovedTransactionsSection.css';

interface ApprovedTransactionsSectionProps {
  transactions: ApprovedTransaction[];
}

function ApprovedTransactionsSection({
  transactions,
}: ApprovedTransactionsSectionProps) {
  return (
    <section className="approved-transactions">
      <h2 className="approved-transactions__title">Approved Transactions</h2>

      {transactions.length === 0 ? (
        <div className="approved-transactions__empty">
          No approved transactions yet.
        </div>
      ) : (
        <div className="approved-transactions__content">
          <button type="button" className="approved-transactions__nav">
            ←
          </button>

          <div className="approved-transactions__list">
            {transactions.map((transaction) => (
              <TransactionCard
                key={transaction.id}
                time={new Date(transaction.localTime).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
                region={transaction.region}
              />
            ))}
          </div>

          <button type="button" className="approved-transactions__nav">
            →
          </button>
        </div>
      )}
    </section>
  );
}

export default ApprovedTransactionsSection;