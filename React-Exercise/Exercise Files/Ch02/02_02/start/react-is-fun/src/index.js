import React from "react";
import ReactDOM from 'react-dom'

var style = {
  backgroundColor: 'orange',
  color: 'white',
  fontFamily:'arial'
}
class Message extends React.Component {
   render() {
     return(
       <div style={style}>
         <h1>Hello Everyone</h1>
       </div>
     )
   }
}

ReactDOM.render(
 <Message/>,

  document.getElementById('root')
)