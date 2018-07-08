import React from 'react';



const CommandCard = ({ command, menu, menuChange }) => {
    let keys = Object.keys(command)

    const InitMenu = (keys) => {
        return (
            <button key={keys} className="commandMenuBTN btn btn-outline-light" onClick={menuChange} value={keys}>{keys}</button>
        )
    }

    const whichMenu = (command) => {
        return (
           <li key={command}>{command}</li>
        )
    }

    const isMenuNeeded = () => {
        if(keys.length > 1) {
            return(
                keys.map(InitMenu))
            }
        }

  return (
    <div className="container py-4">
        <div className="px-5 py-4 bg-dark introBox">

            <h4 className="text-center text-warning">Useful Commands</h4>
            <div className="text-center">
                {isMenuNeeded()}
            </div>
            <ul className="text-white">
                {command[menu].map(whichMenu)}
            </ul>
        </div>
    </div>
  );
}

export default CommandCard;
