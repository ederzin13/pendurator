export interface ClientMock {
  id: string;
  name: string;
  phoneNumber: string;
  value: number;
}

export const clientsMock: ClientMock[] = [
  {
    id: "1",
    name: "Ana Oliveira",
    phoneNumber: "(11) 98765-4321",
    value: 350.0,
  },
  {
    id: "2",
    name: "Bruno Santos",
    phoneNumber: "(21) 91234-5678",
    value: 1200.5,
  },
  {
    id: "3",
    name: "Carla Ferreira",
    phoneNumber: "(31) 99876-5432",
    value: 75.0,
  },
  {
    id: "4",
    name: "Diego Almeida",
    phoneNumber: "(41) 97654-3210",
    value: 2500.0,
  },
  {
    id: "5",
    name: "Eduardo Costa",
    phoneNumber: "(51) 93456-7890",
    value: 640.75,
  },
];

export const clientesMock = clientsMock;
