import './TimeInput.css';

interface TimeInputProps {
  value: string;
  onChange: (value: string) => void;
}

function TimeInput({ value, onChange }: TimeInputProps) {
  return (
    <div className="time-input">
      <label className="time-input__label" htmlFor="time">
        Enter time
      </label>

      <div className="time-input__card">
        <input
          id="time"
          className="time-input__control"
          type="time"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
    </div>
  );
}

export default TimeInput;