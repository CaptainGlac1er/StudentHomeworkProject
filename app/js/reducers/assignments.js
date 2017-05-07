import {
  CREATE_ASSIGNMENT,
  UPDATE_ASSIGNMENT,
  DESTROY_ASSIGNMENT,
} from 'actions/assignments';
import moment from 'moment';

const defaultState = [
  {
    id: 1,
    title: '444 Presentation',
    description: 'Create final presentation for 444',
    dateDue: moment().toISOString(),
    completed: false,
  },
  {
    id: 2,
    title: 'Study for final 444',
    description: 'Review course material for 444',
    dateDue: moment().add(5, 'day').toISOString(),
    completed: false,
  },
  {
    id: 3,
    title: '444 User testing',
    description: 'Gather user feed back on 444 project',
    dateDue: moment().subtract(4, 'day').toISOString(),
    completed: true,
  },
];

const getId = items => items.reduce((prev, { id }) => {
  return prev < id ? id : prev;
}, 0);

export default function assignments(state = defaultState, action) {
  switch (action.type) {
    case CREATE_ASSIGNMENT:
      return [
        ...state,
        {
          ...action.payload,
          id: getId(state) + 1,
        },
      ];
    case UPDATE_ASSIGNMENT:
      return state.map((a) => {
        if (a.id !== action.payload.id) return a;
        return {
          ...a,
          ...action.payload.assignment,
        };
      });
    case DESTROY_ASSIGNMENT:
      return state.filter(a => a.id !== action.payload);
    default:
      return state;
  }
}
