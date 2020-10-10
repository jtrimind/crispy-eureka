import React from 'react';

class Parmacy extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div>{this.props.latlng[0]} {this.props.latlng[1]}</div>);
    }
}

export default Parmacy;
