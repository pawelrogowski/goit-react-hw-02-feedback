import React, { Component } from 'react';
import styles from './section.module.css';
class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className={styles['mb']}>
        <h2 className={styles['title-mb']}>{title}</h2>
        {children}
      </div>
    );
  }
}

export default Section;
