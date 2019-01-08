import React from "react";
import { Box, Grid } from "grommet";

const Content = props => (
  <Grid>
    <Box align="start" />
    <Box {...props} />
  </Grid>
);

Content.defaultProps = {
  align: "center",
  pad: "large"
};

export default Content;
