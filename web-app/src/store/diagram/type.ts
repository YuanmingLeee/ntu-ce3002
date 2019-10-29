import { Action } from 'redux';
import {
  ActionReceive,
  ActionReceiveFactory,
  ActionRequestFactory,
  State,
} from '../../constant/lib';

export const DATA_REQ = 'DATA_REQ';
export const DATA_REC = 'DATA_REC';

type DataReqAction = Action<typeof DATA_REQ>;
type DataRecSuccessAction = ActionReceive<typeof DATA_REC, DataRecData>;
type DataRecFailureAction = ActionReceive<typeof DATA_REC>;

/**
 * NER received data type after json decoder
 */
type DataRecData = { x: number; y: number }[];

/**
 * NER received json type from server api1
 */
type DataRecDataRaw = DataRecData;

/**
 * NER request action factory
 */
export type DataReqActionFactory = ActionRequestFactory<DataReqAction>;

/**
 * NER receive success action factory
 */
export type DataActionFactory = ActionReceiveFactory<
  DataRecSuccessAction,
  DataRecDataRaw
>;

/**
 * NER receive failure action factory
 */
export type DataRecFailureActionFactory = ActionReceiveFactory<
  DataRecFailureAction
>;

/**
 * NER action type for reducer
 */
export type DataActionType =
  | DataReqAction
  | DataRecSuccessAction
  | DataRecFailureAction;

/**
 * NER request type for frontend
 */
export interface DataReqType {
  text: string;
}

/**
 * Microservice diagram state for reducer
 */
export interface DataState {
  data: State<DataRecData>;
  warning: boolean;
}
