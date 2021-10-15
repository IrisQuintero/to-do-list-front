

import React, { useEffect, useState } from "react";
import "./Body.css";

function Body() {
  const [ticketsList, setTicketsList] = useState([]);

  

  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    fetch("http://localhost:3000/tickets/updateTicket", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      method: "PATCH",
      body: JSON.stringify(),
  



    });
  };
  useEffect(() => {
    fetch("http://localhost:3000/tickets/getTickets")
      .then((response) => response.json())
      .then((data) => setTicketsList(data));
  }, []);
  console.log(ticketsList);
  const updateTicket = (ticket) =>{
    console.log(ticket)
    const newTicketsList = ticketsList.map(t=>{
      if(t._id === ticket._id){
        t = ticket
      }
      console.log(newTicketsList)
    })
  }
  return (
    <div className="Body_Big_Container">
      {ticketsList.map((ticket) => (
        <div key={ticket._id} className="Body_Big_Container_box">
          <form onSubmit={handleFormSubmit}>
            {" "}
            <label htmlFor = "tema">Tema</label><br/>
            <input 
            onChange={(event) =>
              updateTicket({ ...ticket, tema: event.target.value})
            }
              type="text"
              id = "tema"
              placeholder = {ticket.tema}
            /><br/>
             <label htmlFor = "solicitante">Nombre de solicitante</label><br/>
            <input 
              type="text"
              id = "solicitante"
              placeholder = {ticket.detalleCaso?.nombreSolicitante}
              
            /><br/>
             <label htmlFor = "descripcion">Descripción del caso</label><br/>
            <input 
              type="text"
              id = "descripcion"
              placeholder = {ticket.detalleCaso?.descripcion}
             
            /><br/>
            <button type="submit">update</button>
          </form>
          
        </div>
        
    
      ))}
  
    </div>
  );
}

export default Body;
