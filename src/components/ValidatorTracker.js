import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import './ValidatorTracker.css';

const ValidatorTracker = () => {
  const { validatorId: paramValidatorId } = useParams();
  const [validatorId, setValidatorId] = useState(paramValidatorId || '');
  const [validatorData, setValidatorData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchValidatorData = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    setValidatorData(null);

    try {
      const response = await fetch(`https://beaconcha.in/api/v1/validator/${id}`);
      const data = await response.json();
      if (response.ok) {
        setValidatorData(data.data);
      } else {
        setError(data.message || 'Enter a valid numeric ID or Public key');
      }
    } catch (err) {
      setError('Enter a valid numeric ID or Public key');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (paramValidatorId) {
      fetchValidatorData(paramValidatorId);
    }
  }, [paramValidatorId, fetchValidatorData]);

  const handleFetchData = () => {
    if (!validatorId.trim()) {
      setError('Validator ID is required');
      return;
    }
    if (isNaN(validatorId)) {
      setError('Validator ID must be a number or Public key');
      return;
    }

    fetchValidatorData(validatorId);
  };

  const handleReset = () => {
    setValidatorId('');
    setValidatorData(null);
    setError(null);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleFetchData();
    }
  };

  const readableKeys = {
    activationeligibilityepoch: 'Activation Eligibility Epoch',
    activationepoch: 'Activation Epoch',
    balance: 'Balance',
    effectivebalance: 'Effective Balance',
    exitepoch: 'Exit Epoch',
    pubkey: 'Public Key',
    status: 'Status',
    validatorindex: 'Validator Index',
    withdrawalcredentials: 'Withdrawal Credentials',
  };

  const renderTable = (data) => (
    <table>
      <tbody>
        {Object.entries(data)
          .filter(([key]) => key !== 'name' && key !== 'slashed')
          .map(([key, value]) => (
            <tr key={key}>
              <th>{readableKeys[key] || key}</th>
              <td>{value}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );

  return (
    <div className="validator-tracker">
      <h2>Ethereum Validator Tracker</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter Validator ID or a Public key"
          value={validatorId}
          onChange={(e) => setValidatorId(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleFetchData} disabled={loading}>
          {loading ? 'Loading...' : 'Fetch Data'}
        </button>
        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
      </div>
      {error && <div className="error">{error}</div>}
      {validatorData && (
        <div className="validator-data">
          <h3>Validator Data</h3>
          <div className="table-container">{renderTable(validatorData)}</div>
        </div>
      )}
    </div>
  );
};

export default ValidatorTracker;
