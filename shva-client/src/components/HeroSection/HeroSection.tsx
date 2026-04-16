import FormPanel from '../FormPanel/FormPanel';
import HeroContent from '../HeroContent/HeroContent';
import type { SimulateTransactionResponse } from '../../types/transaction';
import './HeroSection.css';

interface HeroSectionProps {
  onSimulate: (region: string, time: string) => void;
  simulationResult: SimulateTransactionResponse | null;
  isSubmitting: boolean;
}

function HeroSection({
  onSimulate,
  simulationResult,
  isSubmitting,
}: HeroSectionProps) {
  return (
    <section className="hero-section">
      <div className="hero-section__grid">
        <FormPanel
          onSimulate={onSimulate}
          simulationResult={simulationResult}
          isSubmitting={isSubmitting}
        />
        <HeroContent />
      </div>
    </section>
  );
}

export default HeroSection;