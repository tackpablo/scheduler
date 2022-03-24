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

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }

  return {
    ...interview,
    interviewer: state.interviewers[interview.interviewer],
  };
}
