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
                ? styles['feedback-options__button--green']
                : option === 'neutral'
                ? styles['feedback-options__button--grey']
                : styles['feedback-options__button--red']
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
