import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../../style/DatingContainer.css'
import MasterContainer from './masterFlow/MasterContainer'
import DetailContainer from './detailFlow/DetailContainer'

class DatingContainer extends React.Component {
  render() {
    return (
      <Grid container>
        <DetailContainer />
        <MasterContainer />
      </Grid>
    )
  }
}

export default DatingContainer;
