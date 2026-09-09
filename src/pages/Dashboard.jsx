import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Ticket } from "lucide-react";

import { useTickets } from "../context/TicketContext";
import StatsCard from "../components/StatsCard";
import StatusBadge from "../components/StatusBadge";
import PriorityBadge from "../components/PriorityBadge";

function Dashboard() {
  const { tickets, updateTicketStatus } = useTickets();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

  // Stats
  const totalTickets = tickets.length;

  const openTickets = tickets.filter(
    (ticket) => ticket.status === "Open"
  ).length;

  const inProgressTickets = tickets.filter(
    (ticket) => ticket.status === "In Progress"
  ).length;

  const resolvedTickets = tickets.filter(
    (ticket) => ticket.status === "Resolved"
  ).length;

  // Search + Filters
  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch =
      ticket.customer.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      ticket.subject
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ||
      ticket.status === statusFilter;

    const matchesPriority =
      priorityFilter === "All" ||
      ticket.priority === priorityFilter;

    return (
      matchesSearch &&
      matchesStatus &&
      matchesPriority
    );
  });

  // Change status
  const changeStatus = (id, newStatus) => {
    updateTicketStatus(id, newStatus);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">

      {/* ================= SIDEBAR ================= */}
      <aside className="hidden md:flex w-64 bg-slate-900 text-white flex-col min-h-screen">

        {/* Logo */}
        <div className="px-6 py-6">
          <h1 className="text-xl font-bold">
            SupportDesk
          </h1>

          <p className="text-xs text-slate-400 mt-1">
            Customer Support
          </p>
        </div>

        {/* Navigation */}
        <nav className="px-4 space-y-2">

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-800 text-white text-sm">
            <Ticket size={18} />
            Tickets
          </button>

        </nav>

        {/* Bottom */}
        <div className="mt-auto px-6 py-5 border-t border-slate-800">

          <p className="text-sm font-medium">
            Support Team
          </p>

          <p className="text-xs text-slate-400 mt-1">
            Manage customer requests
          </p>

        </div>

      </aside>

      {/* ================= MAIN ================= */}
      <main className="flex-1">

        {/* ================= HEADER ================= */}
        <header className="bg-white border-b border-slate-200">

          <div className="px-6 lg:px-8 py-5 flex items-center justify-between">

            <div>
              <h1 className="text-xl font-bold text-slate-800">
                Support Dashboard
              </h1>

              <p className="text-sm text-slate-500 mt-1">
                Manage and track customer support tickets
              </p>
            </div>

            {/* Admin */}
            <div className="hidden sm:flex items-center gap-3">

              <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-sm font-semibold text-slate-700">
                DS
              </div>

              <div>
                <p className="text-sm font-medium text-slate-800">
                  Support Admin
                </p>

                <p className="text-xs text-slate-500">
                  Administrator
                </p>
              </div>

            </div>

          </div>

        </header>

        {/* ================= CONTENT ================= */}
        <div className="px-6 lg:px-8 py-8">

          {/* ================= STATS ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            <StatsCard
              title="Total Tickets"
              value={totalTickets}
              type="total"
            />

            <StatsCard
              title="Open"
              value={openTickets}
              type="open"
            />

            <StatsCard
              title="In Progress"
              value={inProgressTickets}
              type="progress"
            />

            <StatsCard
              title="Resolved"
              value={resolvedTickets}
              type="resolved"
            />

          </div>

          {/* ================= TICKETS ================= */}
          <div className="bg-white rounded-xl border border-slate-200 mt-8">

            {/* Tickets Heading */}
            <div className="px-5 pt-5">

              <h2 className="text-lg font-semibold text-slate-800">
                Support Tickets
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                View and manage customer requests
              </p>

            </div>

            {/* ================= SEARCH + FILTERS ================= */}
            <div className="p-5 border-b border-slate-200 mt-3">

              <div className="flex flex-col md:flex-row gap-4">

                {/* Search */}
                <div className="relative flex-1">

                  <Search
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="text"
                    placeholder="Search by customer or subject..."
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                    className="w-full border border-slate-300 rounded-lg pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500"
                  />

                </div>

                {/* Status Filter */}
                <select
                  value={statusFilter}
                  onChange={(e) =>
                    setStatusFilter(e.target.value)
                  }
                  className="border border-slate-300 rounded-lg px-4 py-2.5 outline-none"
                >
                  <option value="All">
                    All Status
                  </option>

                  <option value="Open">
                    Open
                  </option>

                  <option value="In Progress">
                    In Progress
                  </option>

                  <option value="Resolved">
                    Resolved
                  </option>
                </select>

                {/* Priority Filter */}
                <select
                  value={priorityFilter}
                  onChange={(e) =>
                    setPriorityFilter(e.target.value)
                  }
                  className="border border-slate-300 rounded-lg px-4 py-2.5 outline-none"
                >
                  <option value="All">
                    All Priority
                  </option>

                  <option value="Low">
                    Low
                  </option>

                  <option value="Medium">
                    Medium
                  </option>

                  <option value="High">
                    High
                  </option>
                </select>

              </div>

            </div>

            {/* ================= TABLE ================= */}
            <div className="overflow-x-auto">

              <table className="w-full text-left">

                <thead className="bg-slate-50">

                  <tr>

                    <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                      Customer
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                      Subject
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                      Priority
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                      Status
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                      Created
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                      Action
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {filteredTickets.map((ticket) => (

                    <tr
                      key={ticket.id}
                      className="border-t border-slate-100 hover:bg-slate-50 transition-colors"
                    >

                      {/* Customer */}
                      <td className="px-6 py-4">

                        <Link
                          to={`/tickets/${ticket.id}`}
                          className="font-medium text-slate-800 hover:text-blue-600"
                        >
                          {ticket.customer.name}
                        </Link>

                        <p className="text-xs text-slate-500">
                          {ticket.customer.email}
                        </p>

                      </td>

                      {/* Subject */}
                      <td className="px-6 py-4">

                        <Link
                          to={`/tickets/${ticket.id}`}
                          className="text-sm font-medium text-slate-800 hover:text-blue-600"
                        >
                          {ticket.subject}
                        </Link>

                      </td>

                      {/* Priority */}
                      <td className="px-6 py-4">

                        <PriorityBadge
                          priority={ticket.priority}
                        />

                      </td>

                      {/* Status */}
                      <td className="px-6 py-4">

                        <StatusBadge
                          status={ticket.status}
                        />

                      </td>

                      {/* Created Date */}
                      <td className="px-6 py-4">

                        <div>

                          <p className="text-sm text-slate-600">
                            {ticket.createdAt}
                          </p>

                          <p className="text-xs text-slate-400 mt-1">
                            {ticket.createdTime}
                          </p>

                        </div>

                      </td>

                      {/* Change Status */}
                      <td className="px-6 py-4">

                        <select
                          value={ticket.status}
                          onChange={(e) =>
                            changeStatus(
                              ticket.id,
                              e.target.value
                            )
                          }
                          className="border border-slate-300 rounded-md px-2 py-1 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                        >

                          <option value="Open">
                            Open
                          </option>

                          <option value="In Progress">
                            In Progress
                          </option>

                          <option value="Resolved">
                            Resolved
                          </option>

                        </select>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

              {/* Empty State */}
              {filteredTickets.length === 0 && (

                <div className="text-center py-12">

                  <p className="text-slate-500">
                    No tickets found.
                  </p>

                  <p className="text-sm text-slate-400 mt-1">
                    Try changing your search or filters.
                  </p>

                </div>

              )}

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;