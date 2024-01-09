import React,{Component} from "react";

const UserContext = React.createContext();
//Provider, Consumer

const reducer = (state,action) => {
    switch(action.type) {
        case "DELETE_USER":
            return{
                ...state,
                users:state.users.filter(user=>action.payload !== user.id)
            }
        default:
            return state
    }
}

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
        ],
        dispatch : action => {
            this.setState(state => reducer(state,action))
        }
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