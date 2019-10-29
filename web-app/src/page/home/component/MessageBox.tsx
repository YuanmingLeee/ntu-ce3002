import React from 'react';
import { makeStyles, Slide, Snackbar } from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';

type MessageBoxProps = {
  open: boolean;
};

const TransitionComponent = (props: TransitionProps) => (
  <Slide {...props} direction='up' />
);

const MessageBox = ({ open }: MessageBoxProps) => {
  return (
    <Snackbar
      open={open}
      TransitionComponent={TransitionComponent}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={<span id='message-id'>Abnormal Pressure</span>}
    />
  );
};

export default MessageBox;
