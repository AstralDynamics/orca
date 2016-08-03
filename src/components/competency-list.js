import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Card from './card';
import Outcome from './outcome';
import RadialProgress from './radial-progress';
import { primary, lightPrimary } from '../constants/styles';

const styles = StyleSheet.create({
  container: {
    marginBottom: '.5em'
  },
  list: {
    listStyleType: 'none',
    padding: '.5em',
    margin: 0
  },
  fixLeft: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%'
  },
  innerCircle: {
    background: lightPrimary,
    margin: '7.5%',
    width: '85%',
    height: '85%',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: '50%',
    boxSizing: 'border-box'
  },
  iconContainer: {
    fontSize: 30,
    position: 'relative',
    top: 5,
    color: primary
  },
  expand: {
    background: '#f9f9f9',
    padding: '.5em',
    boxShadow: '0 -45px #f9f9f9'
  }
});

export function filterCompleted(competency) {
  return competency.outcomes.filter(outcome =>
    outcome.levels.every(level =>
      level.stage >= 2
    )
  );
}

export function isActive(competency) {
  return competency.outcomes.some(outcome =>
    outcome.levels.some(level =>
      level.stage > 0 && level.review
    )
  );
}

export class Competency extends Component {
  constructor() {
    super();
    this.state = { expanded: false };
  }
  toggleExpanded() {
    this.setState({ expanded: !this.state.expanded });
  }
  getIcon(active, completed) {
    if(completed) return '&#10003;';
    if(active) return '\u2713';
    return '';
  }
  renderCard() {
    const { title, outcomes } = this.props;
    const active = isActive(this.props);
    const completed = filterCompleted(this.props);
    const allCompleted = completed.length === outcomes.length;

    return (
      <Card
        inactive={allCompleted}
        halfRounded={active}
        onClick={e => this.toggleExpanded()}>

        {active && !allCompleted ?
          <div className={css(styles.fixLeft)}>
            <RadialProgress
              number={completed.length}
              limit={outcomes.length} />

            <div className={css(styles.innerCircle)}>
              <span className={css(styles.iconContainer)}>
                {this.getIcon(active, allCompleted)}
              </span>
            </div>

          </div>
          : null}

        {title}
      </Card>
    );
  }
  renderOutcomes() {
    return (
      <div className={css(styles.expand)}>
        <ul className={css(styles.list)}>
          {this.props.outcomes.map((outcome, index) =>
            <li key={index}>
              <Outcome {...outcome} />
            </li>
          )}
        </ul>
      </div>
    );
  }
  render() {
    return (
      <div className={css(styles.container)}>
        {this.renderCard()}
        {this.state.expanded ? this.renderOutcomes() : null}
      </div>
    );
  }
}

export default function CompetencyList({ competencies }) {
  return (
    <ul className={css(styles.list)}>
      {competencies.map((competency, index) =>
        <li key={index}>
          <Competency {...competency} />
        </li>
      )}
    </ul>
  );
}

