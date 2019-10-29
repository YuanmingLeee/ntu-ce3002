import { DATA_REC, DATA_REQ, DataActionType, DataState } from './type';
import asyncReducer from '../../utils/reducer';

export const initState: DataState = {
  data: {
    state: 'INIT',
    timestamp: Date.now(),
    message: '',
    statusCode: 0,
    data: [],
  },
  warning: false,
};

function computeWarning(state: DataState) {
  const readingData = state.data.data;
  const len = readingData.length;
  const recent = readingData.slice(len - 50, len).map(sample => sample.y);
  return Math.max(...recent) - Math.min(...recent) < 10;
}

export default function reducer(
  state = initState,
  action: DataActionType,
): DataState {
  switch (action.type) {
    case 'DATA_REQ':
    case 'DATA_REC':
      return {
        ...state,
        data: asyncReducer(
          state.data,
          action,
          {
            request: DATA_REQ,
            receive: DATA_REC,
          },
          x => x,
        ),
        warning: computeWarning(state),
      };
    default:
      return { ...state };
  }
}
