import React from 'react';

export const Feedback = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) => {
  return (
    <ul className="feedbackContainer">
      <li className="feedbackItem">Good: {good}</li>
      <li className="feedbackItem">Neutral: {neutral}</li>
      <li className="feedbackItem">Bad: {bad}</li>
      <li className="feedbackItem">Total: {total}</li>
      <li className="feedbackItem">
        Positive: {positiveFeedbackPercentage}%
      </li>
    </ul>
  );
};

export default Feedback;