import React, { useState, useContext } from "react";
import ToDoItem from "./ToDoItem";
import ToDoData from "../../data/ToDoData.json";

export const ToDoAppContext = React.createContext();

export const ToDoAppProvider = ({ children }) => {
  const [ticketsList, setTicketsList] = useState(
    JSON.parse(localStorage.getItem("ticketsData")) || ToDoData.Tickets
  );
  const [ticket, setTicket] = useState({
    title: "",
    description: "",
    status: "to_do"
  });

  const addTicket = () => {
    const id = new Date().getTime().toString();
    const newTicket = {
      id,
      ...ticket
    };
    setTicketsList(prevState => [newTicket, ...prevState]);
    setTicketToDefault();
  };

  const createTicketsList = filter => {
    const ticketList = ticketsList.filter(item => item.status === filter);
    if (ticketList.length === 0) {
      return <p> Add more ticket to display them here </p>;
    } else {
      return ticketList.map(item => <ToDoItem key={item.id} {...item} />);
    }
  };

  const deleteToDo = index => {
    setTicketsList(ticketsList.filter(item => item.id !== index));
  };

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setTicket({ ...ticket, [name]: value });
  };

  const setTicketToDefault = () => {
    setTicket({ title: "", description: "", status: "to_do" });
  };

  const handleTicketEdit = (id, e) => {
    const name = e.target.name;
    const value = e.target.value;

    setTicketsList(
      ticketsList.map(ticket => {
        if (ticket.id === id) {
          return { ...ticket, [name]: value };
        }
        return ticket;
      })
    );
  };

  return (
    <ToDoAppContext.Provider
      value={{
        ticketsList,
        createTicketsList,
        addTicket,
        deleteToDo,
        handleChange,
        setTicketToDefault,
        handleTicketEdit,
        ticket
      }}
    >
      {children}
    </ToDoAppContext.Provider>
  );
};

export const useToDoAppContext = () => {
  return useContext(ToDoAppContext);
};
