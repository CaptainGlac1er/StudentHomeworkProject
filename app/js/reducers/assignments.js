import {
  CREATE_ASSIGNMENT,
  UPDATE_ASSIGNMENT,
  DESTROY_ASSIGNMENT,
} from 'actions/assignments';
import moment from 'moment';

const defaultState = [
  {
    id: 1,
    title: '444 Demo',
    description: 'Create a web app for this class',
    dateDue: moment().toISOString(),
    completed: false,
  },
  {
    id: 2,
    title: '440 Project',
    description: 'Create the design document',
    dateDue: moment().toISOString(),
    completed: false,
  },
];

const getId = items => items.reduce((prev, curr) => {
  return prev < curr ? curr : prev;
}, 0);

export default function assignments(state = defaultState, action) {
  switch (action.type) {
    case CREATE_ASSIGNMENT:
      return [
        ...state,
        {
          ...action.payload,
          id: getId(state),
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
