import React, { useEffect } from 'react';
import { Box, Container, Grid, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import HeaderPlaceHolder from '../../common/HeaderPlaceHolader';
import { setTitleEffectFactory } from '../../utils/utils';
import LineGraph from './container/LineGraph';
import MessageBox from './container/MessageBox';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: 48,
  },
  button: {
    margin: theme.spacing(1, 0),
  },
}));

const HomeApp: React.FC = () => {
  useEffect(setTitleEffectFactory('PPG Realtime Diagram'), []);
  const classes = useStyles();
  return (
    <>
      <HeaderPlaceHolder />
      <Box display='flex'>
        <Container className={classes.container} maxWidth='lg'>
          <Grid justify='center' container>
            <Grid item>
              <Typography variant='h3' gutterBottom>
                PPG Diagram
              </Typography>
            </Grid>
          </Grid>
          <LineGraph />
          <MessageBox />
        </Container>
      </Box>
    </>
  );
};

export default HomeApp;
