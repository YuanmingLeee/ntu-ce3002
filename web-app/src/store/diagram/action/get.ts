import {
  DATA_REC,
  DATA_REQ,
  DataRecFailureActionFactory,
  DataActionFactory,
  DataReqActionFactory,
  DataReqType,
} from '../type';
import { AsyncActionFactory } from '../../../constant/lib';
import { xmlHttpRequest } from '../../../utils/httpRequest';
import { api_host as apiHost, api_port as apiPort } from '../../../config';

const requestGet: DataReqActionFactory = () => ({
  type: DATA_REQ,
});

const receiveGetSuccess: DataActionFactory = json => ({
  type: DATA_REC,
  status: 'SUCCESS',
  data: json.data,
  message: '',
  statusCode: 200,
  timestamp: json.timestamp,
});

const receiveGetFailure: DataRecFailureActionFactory = json => ({
  type: DATA_REC,
  status: 'FAILURE',
  data: undefined,
  message: json.message,
  statusCode: json.statusCode,
  timestamp: json.timestamp,
});

const DataGet: AsyncActionFactory<DataReqType> = () => dispatch => {
  return xmlHttpRequest(dispatch, 'GET', {
    url: `${apiHost}:${apiPort}/data/`,
    request: requestGet,
    receiveSuccess: receiveGetSuccess,
    receiveFailure: receiveGetFailure,
  }) as XMLHttpRequest;
};

export default DataGet;
