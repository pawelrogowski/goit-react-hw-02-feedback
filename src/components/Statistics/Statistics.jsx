import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './statistics.module.css';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div>
        <p className={styles.stat}>Good: {good}</p>
        <p className={styles.stat}>Neutral: {neutral}</p>
        <p className={styles.stat}>Bad: {bad}</p>
        <p className={styles.stat}>Total: {total}</p>
        <p className={styles.stat}>Positive feedback: {positivePercentage}%</p>
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
