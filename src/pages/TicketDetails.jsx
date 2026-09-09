import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Mail, Phone, User } from "lucide-react";
import { useTickets } from "../context/TicketContext";
import StatusBadge from "../components/StatusBadge";
import PriorityBadge from "../components/PriorityBadge";

function TicketDetails() {
  const { id } = useParams();
  const { tickets, updateTicketStatus } = useTickets();

  const ticket = tickets.find(
    (ticket) => ticket.id === Number(id)
  );

  if (!ticket) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Ticket not found</h1>

          <Link
            to="/"
            className="text-blue-600 mt-3 inline-block"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <header className="bg-white border-b">
        <div className="px-6 py-5">

          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600"
          >
            <ArrowLeft size={18} />
            Back to Dashboard
          </Link>

        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">

        {/* Ticket Header */}
        <div className="bg-white border rounded-xl p-6">

          <div className="flex flex-col md:flex-row justify-between gap-5">

            <div>
              <p className="text-sm text-slate-500">
                Ticket #{ticket.id}
              </p>

              <h1 className="text-2xl font-bold text-slate-800 mt-1">
                {ticket.subject}
              </h1>

              <p className="text-sm text-slate-500 mt-2">
                Created on {ticket.createdAt} at{" "}
                {ticket.createdTime}
              </p>
            </div>

            <div className="flex items-center gap-3">

              <select
                value={ticket.status}
                onChange={(e) =>
                  updateTicketStatus(
                    ticket.id,
                    e.target.value
                  )
                }
                className="border rounded-lg px-3 py-2 text-sm"
              >
                <option>Open</option>
                <option>In Progress</option>
                <option>Resolved</option>
              </select>

              <PriorityBadge
                priority={ticket.priority}
              />

            </div>

          </div>
        </div>

        {/* Customer + Issue */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

          {/* Customer */}
          <div className="bg-white border rounded-xl p-6">

            <h2 className="font-semibold text-lg mb-5">
              Customer Information
            </h2>

            <div className="flex items-center gap-3 mb-5">

              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <User className="text-blue-600" />
              </div>

              <div>
                <p className="font-semibold">
                  {ticket.customer.name}
                </p>

                <p className="text-sm text-slate-500">
                  Customer
                </p>
              </div>

            </div>

            <div className="space-y-4 text-sm text-slate-600">

              <div className="flex gap-3 items-center">
                <Mail size={17} />
                {ticket.customer.email}
              </div>

              <div className="flex gap-3 items-center">
                <Phone size={17} />
                {ticket.customer.phone}
              </div>

            </div>
          </div>

          {/* Issue */}
          <div className="lg:col-span-2 bg-white border rounded-xl p-6">

            <h2 className="font-semibold text-lg mb-5">
              Issue Details
            </h2>

            <p className="text-slate-600 leading-7">
              {ticket.description}
            </p>

            <div className="flex gap-3 mt-6 items-center">

              <StatusBadge status={ticket.status} />

              <PriorityBadge
                priority={ticket.priority}
              />

            </div>

          </div>

        </div>

        {/* Conversation */}
        <div className="bg-white border rounded-xl p-6 mt-6">

          <h2 className="font-semibold text-lg mb-6">
            Conversation
          </h2>

          <div className="space-y-4">

            {ticket.messages.length > 0 ? (
              ticket.messages.map((message, index) => {

                const customerMessage =
                  message.sender === ticket.customer.name;

                return (
                  <div
                    key={index}
                    className={`flex ${
                      customerMessage
                        ? "justify-start"
                        : "justify-end"
                    }`}
                  >

                    <div
                      className={`max-w-lg p-4 rounded-xl ${
                        customerMessage
                          ? "bg-slate-100"
                          : "bg-blue-600 text-white"
                      }`}
                    >

                      <div className="flex justify-between gap-8 mb-2">

                        <span className="font-semibold text-sm">
                          {message.sender}
                        </span>

                        <span className="text-xs opacity-70">
                          {message.time}
                        </span>

                      </div>

                      <p className="text-sm leading-6">
                        {message.message}
                      </p>

                    </div>

                  </div>
                );
              })
            ) : (
              <p className="text-sm text-slate-500">
                No conversation available.
              </p>
            )}

          </div>

          {/* Reply */}
          <div className="mt-6 border-t pt-5">

            <textarea
              placeholder="Write a reply..."
              className="w-full border rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
            />

            <button className="mt-3 bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700">
              Send Reply
            </button>

          </div>

        </div>

      </main>
    </div>
  );
}

export default TicketDetails;