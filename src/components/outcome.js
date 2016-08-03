import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import { lightestGrey, lightPrimary, primary } from '../constants/styles';
import { PARTIAL_PROGRESS, COMPLETED } from '../constants/competencies';

const styles = StyleSheet.create({
  bar: {
    background: lightestGrey,
    height: '.5em',
    display: 'flex',
    alignItems: 'top',
    marginTop: '2em',
    marginBottom: '5em'
  },
  column: {
    flex: 1,
    textAlign: 'center',
    position: 'relative',
    top: '-.75em'
  },
  point: {
    display: 'inline-block',
    height: '2em',
    width: '2em',
    borderRadius: '50%',
    background: lightestGrey,
    padding: '.5em',
    boxSizing: 'border-box',
    cursor: 'pointer',
    ':hover': {
      background: lightPrimary
    }
  },
  first: {
    textAlign: 'left'
  },
  last: {
    textAlign: 'right'
  },
  shaded: {
    background: lightPrimary
  },
  filled: {
    background: primary
  },
  partial: {
    background: primary,
    height: '100%',
    borderRadius: '50%'
  },
  partialReview: {
    borderColor: lightPrimary
  },
  outcome: {
    marginBottom: '4em'
  },
  title: {
    fontSize: '14pt'
  }
});

export function Point({ title, stage, review }) {
  const isPartial = stage === PARTIAL_PROGRESS;
  const isComplete = stage === COMPLETED;

  return (
    <div>
      <div className={css(
        styles.point,
        review && styles.shaded,
        isComplete && styles.filled,
        review && isPartial && styles.partialReview
      )}>
        {isPartial ?
          <div className={css(styles.partial)}></div>
          : null}
      </div>
      <div>
        {title}
      </div>
    </div>
  );
}

export default class Outcome extends Component {
  componentDidMount() {
    this.state = this.props.levels;
  }
  render() {
    const { title, levels } = this.props;
    return (
      <div className={css(styles.outcome)}>
        <span className={css(styles.title)}>{title}</span>
        <div>
          <div className={css(styles.bar)}>
            {levels.map((level, index) => {
              const isFirst = index === 0;
              const isLast = index === (levels.length - 1);

              return (
                <div
                  key={index}
                  className={css(
                    styles.column,
                    isFirst && styles.first,
                    isLast && styles.last
                  )}>
                  <Point {...level} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

