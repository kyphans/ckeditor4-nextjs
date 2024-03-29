type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  {
    id: "a3b8d425",
    amount: 200,
    status: "success",
    email: "success@example.com",
  },
  {
    id: "f4c2f549",
    amount: 300,
    status: "failed",
    email: "failed@example.com",
  },
  {
    id: "10d7d778",
    amount: 150,
    status: "pending",
    email: "pending@example.com",
  },
  {
    id: "10d7d779",
    amount: 150,
    status: "pending",
    email: "",
  },
  {
    id: "10d7d780",
    amount: 250,
    status: "success",
    email: "dummy@example.com",
  },
  {
    id: "10d7d781",
    amount: 175,
    status: "processing",
    email: "test@example.com",
  },
  {
    id: "10d7d782",
    amount: 300,
    status: "pending",
    email: "dummy1@example.com",
  },
  {
    id: "10d7d783",
    amount: 200,
    status: "success",
    email: "dummy2@example.com",
  },
  {
    id: "10d7d784",
    amount: 150,
    status: "processing",
    email: "dummy3@example.com",
  },
  {
    id: "10d7d785",
    amount: 175,
    status: "failed",
    email: "dummy4@example.com",
  },
  {
    id: "10d7d786",
    amount: 250,
    status: "pending",
    email: "dummy5@example.com",
  },
  {
    id: "10d7d787",
    amount: 300,
    status: "success",
    email: "dummy6@example.com",
  }
]