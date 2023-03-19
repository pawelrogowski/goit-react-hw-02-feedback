import React, { Component } from 'react';
import styles from './section.module.css';
class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className={styles['section']}>
        <h2 className={styles['section__title']}>{title}</h2>
        {children}
      </div>
    );
  }
}

export default Section;
