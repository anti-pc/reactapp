import React,{Component} from "react";

const UserContext = React.createContext();
//Provider, Consumer

export class UserProvider extends Component {
    state = {
        users: [
          {
            id:1,
            name:"Başak",
            salary:"5000",
            department:"Satış"
          },
          {
            id:2,
            name:"Oktay",
            salary:"4000",
            department:"Bilişim"
          },
          {
            id:3,
            name:"Bilgi",
            salary:"6000",
            department:"Üretim"
          },
        ]
      }

  render() {
    return (
        <UserContext.Provider value = {this.state}>
            {this.props.children}
        </UserContext.Provider>

    )
  }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;