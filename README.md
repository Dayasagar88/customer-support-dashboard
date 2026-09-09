# Customer Support Dashboard

A responsive Customer Support Dashboard built with **React.js** and **Tailwind CSS** for managing and tracking customer support tickets.

The dashboard allows support teams to view tickets, search and filter tickets, update ticket statuses, and view detailed customer conversations.

---

## 🚀 Features

### Dashboard

* View total number of tickets
* View Open tickets
* View In Progress tickets
* View Resolved tickets
* Search tickets by customer name or subject
* Filter tickets by status
* Filter tickets by priority
* Change ticket status
* Open individual tickets to view complete details
* Responsive dashboard layout

### Ticket Details

* Customer information
* Customer email and phone number
* Issue description
* Ticket status
* Ticket priority
* Ticket creation date and time
* Previous customer/support conversation
* Reply message UI
* Back navigation to dashboard

### Data Persistence

* Ticket status changes are stored in browser `localStorage`
* Changes remain available after refreshing the page

---

## 🛠️ Tech Stack

* **React.js** — UI development
* **JavaScript (ES6+)** — Application logic
* **Tailwind CSS** — Styling and responsive design
* **React Router DOM** — Client-side routing
* **Lucide React** — Icons
* **Context API** — Global ticket state management
* **LocalStorage** — Client-side data persistence
* **Vite** — Development and build tooling

---

## 📁 Project Structure

```text
customer-support-dashboard/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── PriorityBadge.jsx
│   │   ├── StatsCard.jsx
│   │   └── StatusBadge.jsx
│   │
│   ├── context/
│   │   └── TicketContext.jsx
│   │
│   ├── data/
│   │   └── tickets.js
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   └── TicketDetails.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate into the project:

```bash
cd customer-support-dashboard
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The application will start on the local development server.

Open the URL shown in your terminal, usually:

```text
http://localhost:5173
```

---

## 📦 Available Scripts

### Start development server

```bash
npm run dev
```

Runs the application in development mode with Vite.

### Create production build

```bash
npm run build
```

Creates an optimized production build.

### Preview production build

```bash
npm run preview
```

Runs the production build locally for testing.

---

## 🧭 Application Routes

| Route          | Description                |
| -------------- | -------------------------- |
| `/`            | Customer Support Dashboard |
| `/tickets/:id` | Individual Ticket Details  |

Example:

```text
/tickets/1
```

opens the details page for ticket ID `1`.

---

## 🔄 How It Works

### Ticket State Management

Ticket data is managed centrally using React Context API.

```text
TicketContext
      │
      ├── Dashboard
      │
      └── Ticket Details
```

Both pages access the same ticket state, so status updates are reflected throughout the application.

### Status Update Flow

```text
User changes ticket status
          ↓
updateTicketStatus()
          ↓
React Context state updates
          ↓
localStorage updated
          ↓
Dashboard statistics update
          ↓
Ticket status updates in UI
```

---

## 💾 LocalStorage

The application stores ticket data in the browser's local storage using:

```text
supportTickets
```

This allows ticket status changes to persist even after refreshing the page.

To reset the application to the initial dummy data, open the browser console and run:

```javascript
localStorage.removeItem("supportTickets");
```

Then refresh the page.

---

## 🔍 Search & Filtering

The dashboard supports:

### Search

Search by:

* Customer name
* Ticket subject

### Status Filter

Available options:

* All Status
* Open
* In Progress
* Resolved

### Priority Filter

Available options:

* All Priority
* Low
* Medium
* High

Filters can be combined with search to narrow down the ticket list.

---

## 📊 Ticket Statuses

The application supports three ticket statuses:

| Status      | Description                       |
| ----------- | --------------------------------- |
| Open        | Ticket requires attention         |
| In Progress | Ticket is currently being handled |
| Resolved    | Customer issue has been resolved  |

---

## 🎯 Priority Levels

| Priority | Description               |
| -------- | ------------------------- |
| Low      | Minor issue               |
| Medium   | Normal support issue      |
| High     | Important or urgent issue |

---

## 📱 Responsive Design

The dashboard is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile devices

Tailwind CSS responsive utilities are used to adapt the layout across different screen sizes.

---

## 🧪 Sample Ticket Data

The project currently uses local dummy data for demonstration purposes.

Example:

```javascript
{
  id: 1,
  customer: {
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    phone: "+91 9876543210"
  },
  subject: "Unable to login to my account",
  priority: "High",
  status: "Open",
  createdAt: "2026-09-08",
  createdTime: "10:30 AM"
}
```

---

## 🔮 Future Improvements

The following features could be added in a production version:

* Backend API integration
* User authentication
* Real-time ticket updates
* Create new tickets
* Delete tickets
* Add and persist new conversation messages
* Pagination
* Sort tickets by date and priority
* Ticket assignment to support agents
* Toast notifications
* Loading and error states
* Database integration
* Role-based access control

---

## 👨‍💻 Author

**Daya Sagar**

Frontend Developer

Built as a frontend technical task demonstrating React.js, Tailwind CSS, state management, routing, filtering, and responsive UI development.
