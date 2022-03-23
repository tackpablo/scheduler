export function getAppointmentsForDay(state, day) {
  const appointmentsArr = [];

  state.days.filter((dayItem) => {
    if (dayItem.name === day) {
      dayItem.appointments.filter((appointment) => {
        appointmentsArr.push(state.appointments[appointment]);
      });
    }
  });
  return appointmentsArr;
}
