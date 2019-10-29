import React, { useEffect } from 'react';
import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { ResponsiveLine } from '@nivo/line';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: '100%',
    maxHeight: 400,
  },
}));

type LineGraphProps = {
  data: { x: number; y: number }[];
  warning: boolean;
  getData: () => void;
};

const LineGraph = ({ data, warning, getData }: LineGraphProps) => {
  const classes = useStyles();
  useEffect(() => {
    const interval = window.setInterval(getData, 200);
    return () => window.clearInterval(interval);
  }, [getData]);
  return (
    <div className={classes.root}>
      <ResponsiveLine
        data={[{ id: '', data }]}
        margin={{ top: 48, right: 10, bottom: 10, left: 10 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', stacked: false, min: 'auto', max: 'auto' }}
        curve='natural'
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        enableGridX={false}
        colors={{ scheme: warning ? 'spectral' : 'accent' }}
        lineWidth={1}
        pointSize={1}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={1}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel='y'
        pointLabelYOffset={-12}
        enableArea
        animate={false}
      />
    </div>
  );
};

export default LineGraph;
