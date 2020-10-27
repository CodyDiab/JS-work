import React,{Component} from "react";
import ReactDOM,{render} from 'react-dom'

let jobData = {
  total: 50,
  respond: 20,
  noResponse: 10,
  goal: 100


}
// class JobCounter extends Component {
//   getPercent = decimal => {
//     return decimal * 100 + '%'
//   }
//   calcGoalProgress = (total, goal) => {
//     return this.getPercent(total/goal)
//   }
//   render() {
//     return(
//       <section>
//         Jobs<div>
//           <p> Total: {this.props.total}
//           </p>
//         </div>
//         <div>
//           <p>
//             Responded: { this.props.respond}
//           </p>
//         </div>
//         <div>
//            No Response: {this.props.none}
//         </div>
//         <div>
//           <p> Goal: {this.calcGoalProgress(this.props.total, this.props.goal)}</p>
//         </div>
//       </section>
//     )
//   }
// }
var style = {
  backgroundColor: 'orange',
  color: 'white',
  fontFamily:'arial'
}
const getPercent = decimal => {
  return decimal * 100 + '%'
}
const calcGoalProgress = (total, goal) => {
  return getPercent(total/goal)
}
const JobCounter = (props) => {
  
  return(
    <section style={style}>
        Jobs<div>
          <p> Total: {props.total}
          </p>
        </div>
        <div>
          <p>
            Responded: { props.respond}
          </p>
        </div>
        <div>
           No Response: {props.none}
        </div>
        <div>
          <p> Goal: {calcGoalProgress(props.total, props.goal)}</p>
        </div>
      </section>
  )
}

render(
 <JobCounter 
  total={jobData.total}
 respond={jobData.respond}
 none={jobData.noResponse}
 goal={jobData.goal}/>,

  document.getElementById('root')
)