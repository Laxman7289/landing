// function myFunction(){
//     const checkbox = document.getElementById("checkbox1");
//     const checkvalue = !checkbox.checked
//     checkbox.checked = checkvalue

//     const sidebar = document.getElementById("sidebar")
//     if(checkvalue){
//         sidebar.classList.add('open')
//     }
//     else{
//         sidebar.classList.remove('open')
//     }
// }


import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import './App.css'; // Import your component-specific styles

const firstscript = () => {
  const checkboxRef = useRef(null);

  const myFunction = () => {
    const checkbox = checkboxRef.current;
    const checkValue = !checkbox.checked;
    checkbox.checked = checkValue;

    const sidebar = document.getElementById("sidebar");

    if (checkValue) {
      sidebar.classList.add('open');
    } else {
      sidebar.classList.remove('open');
    }
  };

  return (
    <div>
      <input
        ref={checkboxRef}
        title="Lallu"
        id="checkbox1"
        type="checkbox"
      />
      <button onClick={myFunction}>Toggle Sidebar</button>
    </div>
  );
};

export default firstscript;
