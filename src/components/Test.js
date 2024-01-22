import React, { Component } from 'react'

class Test extends Component {

constructor(props){
    super(props);
    //console.log(this.props);
    this.state = {
        a:10
    }
    console.log("Constructor");
}

componentDidMount()  {
  console.log("componentDidMount");
  //Api calls

  this.setState({
    a:20
  })
}

shouldComponentUpdate(){
    console.log("shouldComponentUpdate")
    return false;
}

componentDidUpdate = (prevProps, prevState) => {
    console.log("componentDidUpdate");
}



  render() {
    console.log("Render");

    return (
      <div>
        
      </div>
    )
  }
}

export default Test;