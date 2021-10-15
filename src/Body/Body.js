import React, { useEffect, useState } from "react";
import "./Body.css";

function Body() {
  const [ticketsList, setTicketsList] = useState([]);
  const [tema, setTema] = useState({});
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(tema);
    fetch("http://localhost:3000/tickets/updateTicket", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      method: "PATCH",
      body: JSON.stringify(tema),
    });
  };
  useEffect(() => {
    fetch("http://localhost:3000/tickets/getTickets")
      .then((response) => response.json())
      .then((data) => setTicketsList(data));
  }, []);
  console.log(ticketsList);
  return (
    <div className="Body_Big_Container">
      {ticketsList.map((ticket) => (
        <div key={ticket.id} className="Body_Big_Container_box">Tema:
           {ticket.tema}
          <form onSubmit={handleFormSubmit}>
            {" "}
            <input
              type="text"
              onChange={(event) =>
                setTema({ tema: event.target.value, _id: ticket._id })
              }
            />
            <button type="submit">update</button>
          </form>
          <div>Estado del caso: {ticket.statusCaso}
          <form onSubmit={handleFormSubmit}>
            {" "}
            <input
              type="text"
              onChange={(event) =>
                setTema({ statusCaso: event.target.value, _id: ticket._id })
              }
            />
            <button type="submit">update</button>
          </form></div>
          <div> Fecha y hora:{ticket.fechaYHora}
          <form onSubmit={handleFormSubmit}>
            {" "}
            <input
              type="text"
              onChange={(event) =>
                setTema({ fechaYHora: event.target.value, _id: ticket._id })
              }
            />
            <button type="submit">update</button>
          </form></div>
          <div> {ticket.fechaYHora}
          <form onSubmit={handleFormSubmit}>
            {" "}
            <input
              type="text"
              onChange={(event) =>
                setTema({ fechaYHora: event.target.value, _id: ticket._id })
              }
            />
            <button type="submit">update</button>
          </form></div>
        </div>
        
      ))}
    </div>
  );
}

export default Body;
