import { NO_PROGRESS, PARTIAL_PROGRESS, COMPLETED } from '../constants/competencies';

const init = [
  {
    title: 'Generic Competency 5',
    year: 1,
    outcomes: [
      {
        title: 'A practice learning outcome',
        levels: [
          { title: 'Feedback', stage: PARTIAL_PROGRESS, review: false },
          { title: 'Observation', stage: COMPLETED, review: true },
          { title: 'Documentation', stage: NO_PROGRESS, review: false }
        ]
      },
      {
        title: 'A practice learning outcome',
        levels: [
          { title: 'Feedback', stage: PARTIAL_PROGRESS, review: true },
          { title: 'Observation', stage: COMPLETED, review: false }
        ]
      }
    ]
  },
  {
    title: 'Generic Competency 3',
    year: 2,
    outcomes: [
      {
        title: 'A practice learning outcome',
        levels: [
          { title: 'Feedback', stage: COMPLETED, review: false },
          { title: 'Observation', stage: COMPLETED, review: true },
          { title: 'Documentation', stage: COMPLETED, review: false }
        ]
      },
      {
        title: 'A practice learning outcome',
        levels: [
          { title: 'Feedback', stage: PARTIAL_PROGRESS, review: true },
          { title: 'Observation', stage: COMPLETED, review: false }
        ]
      }
    ]
  }
];

export default function(competencies=init, action) {
  switch(action) {
    default:
      return competencies;
  }
}
