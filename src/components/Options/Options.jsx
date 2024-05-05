import React from 'react';

export const Options = ({
  updateFeedback,
  resetFeedback,
  totalFeedbackCount,
}) => {
  return (
    <div className="buttonsFeedbackContainer">
      <button
        className="buttonFeedback"
        onClick={() => updateFeedback('good')}
      >
        Good
      </button>
      <button
        className="buttonFeedback"
        onClick={() => updateFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        className="buttonFeedback"
        onClick={() => updateFeedback('bad')}
      >
        Bad
      </button>
      {!!totalFeedbackCount && (
        <button className="buttonFeedback" onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;