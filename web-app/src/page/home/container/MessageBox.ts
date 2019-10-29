import { connect } from 'react-redux';
import { AppState } from '../../../store';
import MessageBox from '../component/MessageBox';

const mapStateToProps = (state: AppState) => ({
  open: state.diagram.warning,
});

export default connect(mapStateToProps)(MessageBox);
