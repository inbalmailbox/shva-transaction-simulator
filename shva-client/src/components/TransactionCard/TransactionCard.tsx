import './TransactionCard.css';

interface TransactionCardProps {
  time: string;
  region: string;
}

function TransactionCard({ time, region }: TransactionCardProps) {
  return (
    <article className="transaction-card">
      <h3 className="transaction-card__time">Time: {time}</h3>
      <p className="transaction-card__region">Time Zone: {region}</p>
    </article>
  );
}

export default TransactionCard;