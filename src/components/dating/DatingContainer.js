import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../../style/DatingContainer.css'
import { connect } from 'react-redux';
import MasterContainer from './masterFlow/MasterContainer'
import DetailContainer from './detailFlow/DetailContainer'

class DatingContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        { this.props.token ?
          <Grid container>
            <DetailContainer />
            <MasterContainer />
          </Grid>
          :
          this.props.history.push("/")
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {token: auth.token}
}

export default connect(mapStateToProps)(DatingContainer);
