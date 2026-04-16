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
      <div className="form-panel__controls">
        <RegionSelect value={region} onChange={setRegion} />
        <TimeInput value={time} onChange={setTime} />
      </div>

      <button
        type="button"
        className="form-panel__button"
        onClick={handleSubmit}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Checking...' : 'Simulate Transaction'}
      </button>

      {simulationResult && (
        <div
          className={`form-panel__result ${
            simulationResult.status === 'Approved'
              ? 'is-approved'
              : 'is-rejected'
          }`}
        >
          <div className="form-panel__result-row">
            <span className="form-panel__result-label">Status</span>
            <span className="form-panel__result-value">
              {simulationResult.status}
            </span>
          </div>

          <div className="form-panel__result-row">
            <span className="form-panel__result-label">Region</span>
            <span className="form-panel__result-value">
              {simulationResult.region}
            </span>
          </div>

          <div className="form-panel__result-row">
            <span className="form-panel__result-label">Local Time</span>
            <span className="form-panel__result-value">
              {new Date(simulationResult.localTime).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </span>
          </div>

          <div className="form-panel__result-row">
            <span className="form-panel__result-label">Time Zone</span>
            <span className="form-panel__result-value">
              {simulationResult.timeZoneId}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default FormPanel;