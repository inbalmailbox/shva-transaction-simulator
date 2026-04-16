import { useState } from 'react';
import RegionSelect from '../RegionSelect/RegionSelect';
import TimeInput from '../TimeInput/TimeInput';
import type { SimulateTransactionResponse } from '../../types/transaction';
import './FormPanel.css';

interface FormPanelProps {
  onSimulate: (region: string, time: string) => void;
  simulationResult: SimulateTransactionResponse | null;
  isSubmitting: boolean;
}

function FormPanel({
  onSimulate,
  simulationResult,
  isSubmitting,
}: FormPanelProps) {
  const [region, setRegion] = useState('France');
  const [time, setTime] = useState('14:24');

  function handleSubmit() {
    onSimulate(region, time);
  }

  return (
    <div className="form-panel">
      <RegionSelect value={region} onChange={setRegion} />
      <TimeInput value={time} onChange={setTime} />

      <button
        type="button"
        className="form-panel__button"
        onClick={handleSubmit}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Checking...' : 'Simulate'}
      </button>

      {simulationResult && (
        <div
          className={`form-panel__result ${
            simulationResult.status === 'Approved' ? 'is-approved' : 'is-rejected'
          }`}
        >
          <strong>Status:</strong> {simulationResult.status}
          <br />
          <strong>Local Time:</strong>{' '}
          {new Date(simulationResult.localTime).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
          <br />
          <strong>Region:</strong> {simulationResult.region}
        </div>
      )}
    </div>
  );
}

export default FormPanel;