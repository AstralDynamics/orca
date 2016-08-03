import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { white, primary } from '../constants/styles';

const styles = StyleSheet.create({
  card: {
    textAlign: 'center',
    background: white,
    padding: '.5em',
    fontSize: '1.4em',
    lineHeight: '3em',
    overflow: 'visible',
    position: 'relative',
    cursor: 'pointer',
    ':hover': {
      color: primary
    }
  },
  halfRounded: {
    borderTopLeftRadius: '100px',
    borderBottomLeftRadius: '100px'
  },
  fullRounded: {
    borderRadius: '100px'
  },
  transparent: {
    opacity: 0.5
  }
});

export default function Card(props) {
  const {
    children, halfRounded, fullRounded, inactive, onClick
  } = props;

  return (
    <div
      onClick={onClick}
      className={css(
        styles.card,
        halfRounded && styles.halfRounded,
        fullRounded && styles.fullRounded,
        inactive && styles.transparent
      )}>
      {children}
    </div>
  );
}
