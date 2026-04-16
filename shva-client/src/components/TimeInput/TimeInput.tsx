import './TimeInput.css';

interface TimeInputProps {
  value: string;
  onChange: (value: string) => void;
}

function keepDigitsOnly(value: string) {
  return value.replace(/\D/g, '').slice(0, 2);
}

function clampTimePart(value: string, max: number) {
  if (value === '') return '';
  const numeric = Number(value);
  if (Number.isNaN(numeric)) return '';
  return String(Math.min(numeric, max));
}

function formatOnBlur(value: string, max: number) {
  if (value === '') return '00';
  const numeric = Number(value);
  if (Number.isNaN(numeric)) return '00';
  return String(Math.min(numeric, max)).padStart(2, '0');
}

function TimeInput({ value, onChange }: TimeInputProps) {
  const [hour = '00', minute = '00'] = value.split(':');

  function handleHourChange(input: string) {
    const clean = keepDigitsOnly(input);
    const clamped = clampTimePart(clean, 23);
    onChange(`${clamped}:${minute}`);
  }

  function handleMinuteChange(input: string) {
    const clean = keepDigitsOnly(input);
    const clamped = clampTimePart(clean, 59);
    onChange(`${hour}:${clamped}`);
  }

  function handleHourBlur() {
    onChange(`${formatOnBlur(hour, 23)}:${formatOnBlur(minute, 59)}`);
  }

  function handleMinuteBlur() {
    onChange(`${formatOnBlur(hour, 23)}:${formatOnBlur(minute, 59)}`);
  }

  function resetTime() {
    onChange('00:00');
  }

  return (
    <div className="time-input">
     

      <div className="time-input__card">
        <div className="time-input__top-label">Enter time</div>

        <div className="time-input__display">
          <input
            className="time-input__box is-hour"
            type="text"
            inputMode="numeric"
            maxLength={2}
            value={hour}
            onChange={(event) => handleHourChange(event.target.value)}
            onBlur={handleHourBlur}
            aria-label="Hour"
          />

          <div className="time-input__separator">:</div>

          <input
            className="time-input__box is-minute"
            type="text"
            inputMode="numeric"
            maxLength={2}
            value={minute}
            onChange={(event) => handleMinuteChange(event.target.value)}
            onBlur={handleMinuteBlur}
            aria-label="Minute"
          />
        </div>

        <div className="time-input__captions">
          <span>Hour</span>
          <span>Minute</span>
        </div>

        <div className="time-input__footer">
          <div className="time-input__clock">🕒</div>

          <div className="time-input__actions">
            <button
              type="button"
              className="time-input__text-button"
              onClick={resetTime}
            >
              Cancel
            </button>

            <button
              type="button"
              className="time-input__text-button is-primary"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeInput;