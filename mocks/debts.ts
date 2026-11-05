export interface DebtMock {
  id: string;
  clientName: string;
  value: number;
  createdAt: string;
  notes: string;
  isPaid: boolean;
}

export const debtsMock: DebtMock[] = [
  {
    id: "1",
    clientName: "Ana Oliveira",
    value: 150.0,
    createdAt: "2026-03-10",
    notes: "Compra de materiais escolares",
    isPaid: false,
  },
  {
    id: "2",
    clientName: "Bruno Santos",
    value: 85.5,
    createdAt: "2026-04-02",
    notes: "Fiado da semana",
    isPaid: false,
  },
  {
    id: "3",
    clientName: "Carla Ferreira",
    value: 300.0,
    createdAt: "2026-04-15",
    notes: "Pagamento de serviços prestados",
    isPaid: true,
  },
  {
    id: "4",
    clientName: "Diego Almeida",
    value: 520.0,
    createdAt: "2026-04-20",
    notes: "Segunda parcela pendente",
    isPaid: false,
  },
  {
    id: "5",
    clientName: "Eduardo Costa",
    value: 45.0,
    createdAt: "2026-04-28",
    notes: "Lanche e refrigerante",
    isPaid: true,
  },
];

export const dividasMock = debtsMock;
