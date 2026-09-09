import { createContext, useContext, useState } from "react";
import { tickets as initialTickets } from "../data/tickets";

const TicketContext = createContext();

export function TicketProvider({ children }) {

  const [tickets, setTickets] = useState(() => {
    const savedTickets = localStorage.getItem("supportTickets");

    return savedTickets
      ? JSON.parse(savedTickets)
      : initialTickets;
  });

  const updateTicketStatus = (id, newStatus) => {

    setTickets((prevTickets) => {

      const updatedTickets = prevTickets.map((ticket) =>
        ticket.id === id
          ? {
              ...ticket,
              status: newStatus,
            }
          : ticket
      );

      localStorage.setItem(
        "supportTickets",
        JSON.stringify(updatedTickets)
      );

      return updatedTickets;
    });
  };

  return (
    <TicketContext.Provider
      value={{
        tickets,
        updateTicketStatus,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
}

export function useTickets() {
  return useContext(TicketContext);
}