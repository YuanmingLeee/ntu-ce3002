import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import _ from 'lodash';
import { AppState } from '../../../store';
import DataGet from '../../../store/diagram/action/get';
import { DataActionType } from '../../../store/diagram/type';
import LineGraph from '../component/LineGraph';

const mapStateToProps = (state: AppState) => ({
  data: state.diagram.data.data,
  warning: state.diagram.warning,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, {}, DataActionType>,
) => ({
  getData: _.flow([DataGet, dispatch]),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LineGraph);
