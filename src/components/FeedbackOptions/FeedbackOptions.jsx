import React, { Component } from 'react';
import styles from './feedbackOptions.module.css';
class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div className={styles['feedback-options']}>
        {Object.keys(options).map(option => (
          <button
            className={
              option === 'good'
                ? styles['button-green']
                : option === 'neutral'
                ? styles['button-grey']
                : styles['button-red']
            }
            key={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;
