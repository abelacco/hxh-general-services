interface SeedDoctor {
  name: string;
  phone: string;
  speciality: string;
  fee: number;
  imageUrl: string;
}

interface SeedPatient {
  name: string;
  phone: string;
}

interface SeedAppointment {
  date: string;
  fee: number;
  status: string;
  code: string;
  voucher: string;
}

interface SeedStore {
  documentId: string;
  fullname: string;
  phone: string;
  imageUrl: string;
  codeQr: string;
  lat: string;
  long: string;
  affiliater: string;
  isActive: boolean;
}

interface SeedData {
  store: SeedStore[];
  doctor: SeedDoctor[];
  patient: SeedPatient[];
  appointment: SeedAppointment[];
}

export const initialData: SeedData = {
  store: [
    {
      documentId: '45787777',
      fullname: 'La bodega1',
      phone: '987-654-1234',
      imageUrl: 'www.someimage.com',
      codeQr: 'a7sd7asd8as',
      lat: '2323',
      long: '787878',
      affiliater: '111111111',
      isActive: true,
    },
    {
      documentId: '45787756',
      fullname: 'La bodega2',
      phone: '987-654-8723',
      imageUrl: 'www.someimage.com',
      codeQr: 'a7sd7asd8as',
      lat: '2323',
      long: '787878',
      affiliater: '111111111',
      isActive: true,
    },
    {
      documentId: '87453345',
      fullname: 'La bodega3',
      phone: '987-623-5434',
      imageUrl: 'www.someimage.com',
      codeQr: 'a7sd7asd8as',
      lat: '2323',
      long: '787878',
      affiliater: '22456785',
      isActive: true,
    },
  ],
  doctor: [
    {
      name: 'Dr. Abel Acuña',
      phone: '51947308823',
      speciality: 'Nutrición',
      fee: 150,
      imageUrl: 'https://res.cloudinary.com/dbq85fwfz/image/upload/v1696427010/doctorPresentacion2_b9o0vw.jpg'
    },
    {
      name: 'Dr. Manuel Talledo',
      phone: '51980298900',
      speciality: 'Nutrición',
      fee: 120,
      imageUrl: 'https://res.cloudinary.com/dbq85fwfz/image/upload/v1696427010/doctorPresentacion2_b9o0vw.jpg'
    },
    {
      name: 'Dr. Sergio Talledo',
      phone: '51980827944',
      speciality: 'Nutrición',
      fee: 180,
      imageUrl: 'https://res.cloudinary.com/dbq85fwfz/image/upload/v1696427010/doctorPresentacion2_b9o0vw.jpg'
    },
    {
      name: 'Dr. Ada Lovelace',
      phone: '444-555-6666',
      speciality: 'Pediatrician',
      fee: 140,
      imageUrl: 'https://res.cloudinary.com/dbq85fwfz/image/upload/v1696427010/doctorPresentacion2_b9o0vw.jpg'
    },
    {
      name: 'Dr. Grace Hopper',
      phone: '777-888-9999',
      speciality: 'Radiologist',
      fee: 170,
      imageUrl: 'https://res.cloudinary.com/dbq85fwfz/image/upload/v1696427010/doctorPresentacion2_b9o0vw.jpg'
    },
    {
      name: 'Dr. Richard Feynman',
      phone: '222-333-4444',
      speciality: 'Physicist',
      fee: 165,
      imageUrl: 'https://res.cloudinary.com/dbq85fwfz/image/upload/v1696427010/doctorPresentacion2_b9o0vw.jpg'
    },
    {
      name: 'Dr. Katherine Johnson',
      phone: '555-666-7777',
      speciality: 'Gynecologist',
      fee: 155,
      imageUrl: 'https://res.cloudinary.com/dbq85fwfz/image/upload/v1696427010/doctorPresentacion2_b9o0vw.jpg'
    },
    {
      name: 'Dr. Carl Sagan',
      phone: '888-999-0000',
      speciality: 'Astronomer',
      fee: 190,
      imageUrl: 'https://res.cloudinary.com/dbq85fwfz/image/upload/v1696427010/doctorPresentacion2_b9o0vw.jpg'
    },
    {
      name: 'Dr. Mary Jackson',
      phone: '999-000-1111',
      speciality: 'Endocrinologist',
      fee: 150,
      imageUrl: 'https://res.cloudinary.com/dbq85fwfz/image/upload/v1696427010/doctorPresentacion2_b9o0vw.jpg'
    },
    {
      name: 'Dr. James Clerk Maxwell',
      phone: '000-111-2222',
      speciality: 'Electromagnetism',
      fee: 160,
      imageUrl: 'https://res.cloudinary.com/dbq85fwfz/image/upload/v1696427010/doctorPresentacion2_b9o0vw.jpg'
    },
  ],
  patient: [
    {
      name: 'Paciente 1',
      phone: '125-456-7890',
    },
    {
      name: 'Paciente 2',
      phone: '988-654-3210',
    },
    {
      name: 'Paciente 3',
      phone: '535-555-5555',
    },
    {
      name: 'Paciente 4',
      phone: '171-222-3333',
    },
    {
      name: 'Paciente 5',
      phone: '999-888-7747',
    },
    {
      name: 'Paciente 6',
      phone: '333-333-4333',
    },
    {
      name: 'Paciente 7',
      phone: '777-777-7777',
    },
    {
      name: 'Paciente 8',
      phone: '444-444-4444',
    },
    {
      name: 'Paciente 9',
      phone: '666-666-6666',
    },
    {
      name: 'Paciente 10',
      phone: '222-222-2222',
    },
  ],
  appointment: [
    {
      date: '2023-10-12',
      fee: 50,
      status: '0',
      code: 'R1XDF',
      voucher:
        'https://res.cloudinary.com/dbq85fwfz/image/upload/v1697751230/Imagen_de_WhatsApp_2023-10-16_a_las_21.03.28_10028c3a_bpdii7.jpg',
    },
    {
      date: '2023-10-15',
      fee: 75,
      status: '0',
      code: 'R1LGO',
      voucher:
        'https://res.cloudinary.com/dbq85fwfz/image/upload/v1697751230/Imagen_de_WhatsApp_2023-10-16_a_las_21.03.28_10028c3a_bpdii7.jpg',
    },
    {
      date: '2023-10-18',
      fee: 60,
      status: '2',
      code: 'R1TY',
      voucher:
        'https://res.cloudinary.com/dbq85fwfz/image/upload/v1697751230/Imagen_de_WhatsApp_2023-10-16_a_las_21.03.28_10028c3a_bpdii7.jpg',
    },
    {
      date: '2023-10-20',
      fee: 80,
      status: '0',
      code: 'R1LO',
      voucher:
        'https://res.cloudinary.com/dbq85fwfz/image/upload/v1697751230/Imagen_de_WhatsApp_2023-10-16_a_las_21.03.28_10028c3a_bpdii7.jpg',
    },
    {
      date: '2023-10-25',
      fee: 55,
      status: '0',
      code: 'RQA1',
      voucher:
        'https://res.cloudinary.com/dbq85fwfz/image/upload/v1697751230/Imagen_de_WhatsApp_2023-10-16_a_las_21.03.28_10028c3a_bpdii7.jpg',
    },
    {
      date: '2023-10-28',
      fee: 70,
      status: '0',
      code: 'ROG1',
      voucher:
        'https://res.cloudinary.com/dbq85fwfz/image/upload/v1697751230/Imagen_de_WhatsApp_2023-10-16_a_las_21.03.28_10028c3a_bpdii7.jpg',
    },
    {
      date: '2023-11-02',
      fee: 65,
      status: '0',
      code: 'RLP1',
      voucher:
        'https://res.cloudinary.com/dbq85fwfz/image/upload/v1697751230/Imagen_de_WhatsApp_2023-10-16_a_las_21.03.28_10028c3a_bpdii7.jpg',
    },
    {
      date: '2023-11-05',
      fee: 90,
      status: '0',
      code: 'Q3R1',
      voucher:
        'https://res.cloudinary.com/dbq85fwfz/image/upload/v1697751230/Imagen_de_WhatsApp_2023-10-16_a_las_21.03.28_10028c3a_bpdii7.jpg',
    },
    {
      date: '2023-11-08',
      fee: 75,
      status: '2',
      code: 'P3R1',
      voucher:
        'https://res.cloudinary.com/dbq85fwfz/image/upload/v1697751230/Imagen_de_WhatsApp_2023-10-16_a_las_21.03.28_10028c3a_bpdii7.jpg',
    },
    {
      date: '2023-11-12',
      fee: 50,
      status: '3',
      code: 'L5R1',
      voucher:
        'https://res.cloudinary.com/dbq85fwfz/image/upload/v1697751230/Imagen_de_WhatsApp_2023-10-16_a_las_21.03.28_10028c3a_bpdii7.jpg',
    },
  ],
};
