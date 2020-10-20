import Axios from 'axios';
import React from 'react';

class Parmacy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getList = async () => {
    var url = 'https://congenial-spoon.web.app/pharmacy';
    // var url = 'http://localhost:5000/pharmacy';
    const list = await Axios.get(url, {
      params: {
        WGS84_LAT: this.props.latlng[0],
        WGS84_LON: this.props.latlng[1]
      }
    });
    console.log(list);
    console.log(list.status);
    if (list.status === 200) {
      var item = list.data.response.body.items.item;
      console.log(item);
      this.setState({list: item[0].dutyName});
    } else {
      this.setState({list: ""});
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.latlng !== this.props.latlng) {
      console.log("update");
      this.getList();
    }
  }
  componentDidMount = () => {
  }
  render() {
    return (<div>{this.state.list ? this.state.list : "Loading"}</div>);
  }
}

export default Parmacy;
