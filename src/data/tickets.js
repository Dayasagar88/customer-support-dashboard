export const tickets = [
  {
    id: 1,
    customer: {
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      phone: "+91 9876543210",
    },
    subject: "Unable to login to my account",
    description:
      "I am unable to login to my account even after resetting my password.",
    priority: "High",
    status: "Open",
    createdAt: "2026-09-08",
    createdTime: "10:30 AM",
    messages: [
      {
        sender: "Rahul Sharma",
        message: "I am unable to login to my account.",
        time: "10:30 AM",
      },
      {
        sender: "Support",
        message: "Hi Rahul, we are looking into the issue.",
        time: "10:45 AM",
      },
    ],
  },

  {
    id: 2,
    customer: {
      name: "Priya Singh",
      email: "priya@gmail.com",
      phone: "+91 9876501234",
    },
    subject: "Payment failed",
    description:
      "My payment failed but the amount was deducted from my bank account.",
    priority: "High",
    status: "In Progress",
    createdAt: "2026-09-07",
    createdTime: "02:15 PM",
    messages: [
      {
        sender: "Priya Singh",
        message: "Payment failed but money was deducted.",
        time: "02:15 PM",
      },
      {
        sender: "Support",
        message: "We have forwarded this to our payment team.",
        time: "02:40 PM",
      },
    ],
  },

  {
    id: 3,
    customer: {
      name: "Amit Kumar",
      email: "amit@gmail.com",
      phone: "+91 9812345678",
    },
    subject: "Refund not received",
    description: "I requested a refund three days ago but haven't received it.",
    priority: "Medium",
    status: "Resolved",
    createdAt: "2026-09-05",
    createdTime: "11:00 AM",
    messages: [
      {
        sender: "Amit Kumar",
        message: "I haven't received my refund yet.",
        time: "11:00 AM",
      },
      {
        sender: "Support",
        message: "Your refund has been successfully processed.",
        time: "11:30 AM",
      },
    ],
  },

  {
    id: 4,
    customer: {
      name: "Neha Verma",
      email: "neha@gmail.com",
      phone: "+91 9898989898",
    },
    subject: "Account verification issue",
    description: "My account verification is stuck for more than 24 hours.",
    priority: "Low",
    status: "Open",
    createdAt: "2026-09-06",
    createdTime: "04:20 PM",
    messages: [],
  },

  {
    id: 5,
    customer: {
      name: "Rohit Mehta",
      email: "rohit@gmail.com",
      phone: "+91 9123456789",
    },
    subject: "Unable to update profile",
    description: "The profile update button is not working.",
    priority: "Medium",
    status: "In Progress",
    createdAt: "2026-09-04",
    createdTime: "09:45 AM",
    messages: [],
  },
];