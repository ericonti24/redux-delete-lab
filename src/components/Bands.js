// import React from 'react'
// import Band from './Band'

// const Bands = props => {
  
//   return (
//       props.bands.map(band => <Band band={band} key={band.id} deleteBand={props.deleteBand}/>)
//   );
// };
 
// export default Bands;


import React, { Component } from 'react'
import Band from './Band'

class Bands extends Component {
  render() {
    return (
      <div>
        {this.props.bands.map(band => <Band key={band.id} band={band} deleteBand={this.props.deleteBand}/>)}
      </div>
    )
  }
}

export default Bands;