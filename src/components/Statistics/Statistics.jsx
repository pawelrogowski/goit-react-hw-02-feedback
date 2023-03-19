import React, { Component } from 'react';
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

export default Statistics;
