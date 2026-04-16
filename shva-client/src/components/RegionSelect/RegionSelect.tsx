import { useEffect, useRef, useState } from 'react';
import './RegionSelect.css';

interface RegionSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const regions = ['France', 'Israel', 'Cyprus', 'Italy'];

function RegionSelect({ value, onChange }: RegionSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="region-select" ref={wrapperRef}>
      <label className="region-select__label">Label</label>

      <button
        type="button"
        className="region-select__trigger"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{value}</span>
        <span className="region-select__icon">{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <div className="region-select__menu">
          {regions.map((region) => (
            <button
              key={region}
              type="button"
              className={`region-select__option ${value === region ? 'is-selected' : ''}`}
              onClick={() => {
                onChange(region);
                setIsOpen(false);
              }}
            >
              {region}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default RegionSelect;