import {
  CREATE_ASSIGNMENT,
  UPDATE_ASSIGNMENT,
  DESTROY_ASSIGNMENT,
} from 'actions/assignments';

export default function assignments(state = [], action) {
  switch (action.type) {
    case CREATE_ASSIGNMENT:
      return [
        ...state,
        action.payload,
      ];
    case UPDATE_ASSIGNMENT:
      return state.map((a) => {
        if (a.id !== action.payload.id) return a;
        return action.payload.assignment;
      });
    case DESTROY_ASSIGNMENT:
      return state.filter(a => a.id !== action.payload);
    default:
      return state;
  }
}
