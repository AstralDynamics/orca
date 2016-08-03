import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  tray: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%'
  }
});

export default function Tray({ children }) {
  return (
    <div className={css(styles.tray)}>
      {children}
    </div>
  );
}

