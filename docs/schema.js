export const competency = {
  _id: '#name',
  outcomes: [
    {
      title: 'A practice learning outcome',
      year: 1,
      stages: ['Feedback', 'Observation', 'Documentation']
    }
  ]
};

export const student = {
  _id: '@name',
  name: 'Name',
  year: 1,
  competencies: {
    '#name': {
      stages: [0, 0, 0],
      notes: []
    }
  }
};

export const staff = {
  _id: '@name',
  name: 'Name',
  roles: ['tutor', 'mentor']
};

