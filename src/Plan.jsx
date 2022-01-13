import React from 'react';
import './Plan.css';

function Plan(props) {
  const arr = props.p;
  return (
    <>
      <div className="float-container">
        <div className="float-child">
          <li className="shadow p-2 my-2 col-sm-9">{props.value.id ? props.value.id : props.id + 1}</li>
        </div>
        <div className="float-child-2">
          <li className="shadow p-2 my-2 col-sm-9">Title: {props.value.title}</li>
          <li className="shadow p-2 my-2 col-sm-9">Description: {props.value.description}</li>
          <li className="shadow p-2 my-2 col-sm-9">Completed: {props.value.completed ? 'True' : 'False'}</li>
        </div>
        <div className="float-child-3">
          <button className="btn btn-danger my-2 col-sm-2 offset-1 w-40" onClick={() => { props.sendData(props.id); }}>X</button>
        </div>
      </div>
      

      {/* {
   arr.map((value, i) => {
    return (<React.Fragment key={i}>
     <li className="shadow p-2 my-2 col-sm-9">{value}</li>
     <button className="btn btn-danger my-2 col-sm-2 offset-1" onClick={() => { props.sendData(i) }}>X</button>
    </React.Fragment>)
   })
  } */}

    </>
  );
}

export default Plan;
