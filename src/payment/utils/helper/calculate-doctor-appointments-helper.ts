import { Appointment } from 'src/appointment/entities/appointment.entity';
import { IAppointmentResult } from 'src/payment/interfaces';
import { CalculateDate } from './';

export function CalculateDoctorsAppointments(
  appointments: Appointment[],
): IAppointmentResult[] {
  let result: IAppointmentResult[] = [];

  appointments.reduce((acc, el) => {
    if (!acc[el.providerId]) {
      const generateDates = CalculateDate(el.createdAt);
      acc[el.providerId] = {
        doctorId: el.providerId,
        appointmentQ: 1,
        transactionBeforeFee: el.fee,
        startDate: generateDates.startDate,
        endDate: generateDates.endDate,
        paymentDate: generateDates.paymentDate,
      };
    } else {
      acc[el.providerId].appointmentQ += 1;
      acc[el.providerId].transactionBeforeFee += el.fee;
    }
    return acc;
  }, result);
  const resultArray = Object.values(result);

  return resultArray;
}
