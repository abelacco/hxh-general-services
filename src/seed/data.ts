interface SeedDoctor {
    name: string,
    phone: string,
    speciality: string,
    fee: number,
}
interface SeedPatient {
  name: string;
  phone: string;
  dni: string;
}
interface SeedData {
    doctor: SeedDoctor[];
    patient: SeedPatient[];
}

export const initialData: SeedData = {

    doctor: [
        {
            name: 'Dr. John Doe',
            phone: '123-456-7890',
            speciality: 'Cardiologist',
            fee: 150,
        },
        {
            name: 'Dr. Jane Smith',
            phone: '987-654-3210',
            speciality: 'Dermatologist',
            fee: 120,
        },
        {
            name: 'Dr. Alan Turing',
            phone: '111-222-3333',
            speciality: 'Neurologist',
            fee: 180,
        },
        {
            name: 'Dr. Ada Lovelace',
            phone: '444-555-6666',
            speciality: 'Pediatrician',
            fee: 140,
        },
        {
            name: 'Dr. Grace Hopper',
            phone: '777-888-9999',
            speciality: 'Radiologist',
            fee: 170,
        },
        {
            name: 'Dr. Richard Feynman',
            phone: '222-333-4444',
            speciality: 'Physicist',
            fee: 165,
        },
        {
            name: 'Dr. Katherine Johnson',
            phone: '555-666-7777',
            speciality: 'Gynecologist',
            fee: 155,
        },
        {
            name: 'Dr. Carl Sagan',
            phone: '888-999-0000',
            speciality: 'Astronomer',
            fee: 190,
        },
        {
            name: 'Dr. Mary Jackson',
            phone: '999-000-1111',
            speciality: 'Endocrinologist',
            fee: 150,
        },
        {
            name: 'Dr. James Clerk Maxwell',
            phone: '000-111-2222',
            speciality: 'Electromagnetism',
            fee: 160,
        },
    ],
    patient: [
  {
    name: "Paciente 1",
    phone: "125-456-7890",
    dni: "A12345678"
  },
  {
    name: "Paciente 2",
    phone: "988-654-3210",
    dni: "B87654321"
  },
  {
    name: "Paciente 3",
    phone: "535-555-5555",
    dni: "C99999999"
  },
  {
    name: "Paciente 4",
    phone: "171-222-3333",
    dni: "D11112222"
  },
  {
    name: "Paciente 5",
    phone: "999-888-7747",
    dni: "E99988877"
  },
  {
    name: "Paciente 6",
    phone: "333-333-4333",
    dni: "F33333333"
  },
  {
    name: "Paciente 7",
    phone: "777-777-7777",
    dni: "G77777777"
  },
  {
    name: "Paciente 8",
    phone: "444-444-4444",
    dni: "H44444444"
  },
  {
    name: "Paciente 9",
    phone: "666-666-6666",
    dni: "I66666666"
  },
  {
    name: "Paciente 10",
    phone: "222-222-2222",
    dni: "J22222222"
  }
    ],
}