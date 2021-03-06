import React, { useState, useContext } from "react";
import ToDoItem from "./ToDoItem";
import ToDoData from "../../data/ToDoData.json";
import { useGlobalContext } from "../GlobalContext";
import { useToasts } from "react-toast-notifications";

export const ToDoAppContext = React.createContext();

export const ToDoAppProvider = ({ children }) => {
  const { openModal } = useGlobalContext();
  const [ticketsList, setTicketsList] = useState(
    JSON.parse(localStorage.getItem("ticketsData")) || []
  );
  const [ticket, setTicket] = useState({
    id: new Date().getTime().toString(),
    title: "",
    description: "",
    status: "to_do",
  });
  const { addToast } = useToasts();
  const [isTicketEdited, setIsTicketEdited] = useState(false);

  const addTicket = () => {
    const ticketID = new Date().getTime().toString();
    const newTicket = {
      id: ticketID,
      ...ticket,
    };
    setTicketsList((prevState) => [newTicket, ...prevState]);
    setTicketToDefault();

    addToast("Ticket created successfully", {
      appearance: "success",
    });
  };

  const createTicketsList = (filter) => {
    const ticketList = ticketsList.filter((item) => item.status === filter);
    if (ticketList.length === 0) {
      return (
        <p className="empty-column-text">
          No tickets to display
          <button onClick={openModal} data-cy="empty-column-btn">
            Add a Ticket
          </button>
        </p>
      );
    } else {
      return ticketList.map((item) => <ToDoItem key={item.id} {...item} />);
    }
  };

  const deleteToDo = (index) => {
    setTicketsList(ticketsList.filter((item) => item.id !== index));

    addToast("Ticket deleted successfully", {
      appearance: "success",
    });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTicket({ ...ticket, [name]: value });
  };

  const setTicketToDefault = () => {
    setTicket({ title: "", description: "", status: "to_do" });
  };

  const setTicketToSpecificOne = (id) => {
    const chosenTicket = ticketsList.find((ticket) => {
      return ticket.id === id;
    });
    setTicket(chosenTicket);
  };

  const openEditModal = (id) => {
    setTicketToSpecificOne(id);
    setIsTicketEdited(true);
    openModal();
  };

  const editTicket = () => {
    setTicketsList(
      ticketsList.map((item) => {
        if (item.id === ticket.id) {
          return { ...ticket };
        }
        return item;
      })
    );
    setIsTicketEdited(false);
    setTicketToDefault();

    addToast("Ticket updated successfully", {
      appearance: "success",
    });
  };

  const handleTicketEdit = (id, e) => {
    const name = e.target.name;
    const value = e.target.value;

    setTicketsList(
      ticketsList.map((ticket) => {
        if (ticket.id === id) {
          return { ...ticket, [name]: value };
        }
        return ticket;
      })
    );

    addToast(`Ticket's ${name} was successfully edited`, {
      appearance: "success",
    });
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
        setTicketToSpecificOne,
        openEditModal,
        isTicketEdited,
        ticket,
        editTicket,
        setIsTicketEdited,
      }}
    >
      {children}
    </ToDoAppContext.Provider>
  );
};

export const useToDoAppContext = () => {
  return useContext(ToDoAppContext);
};
