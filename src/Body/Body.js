import React, { useEffect, useState} from "react";
import "./Body.css";

function Body() {
  const [ticketsList, setTicketsList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/tickets/getTickets")
      .then((response) => response.json())
       .then((data) => setTicketsList(data));
  }, []);

  return (
    <div className="Body_Big_Container">
      {ticketsList.map((ticket) => (
      <div key={ticket.id} className="Body_Big_Container_box">{ticket.tema}</div>
      ))}
    </div>
  );
}

export default Body;
