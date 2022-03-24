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

export function getInterviewersForDay(state, day) {
  const interviewersArr = [];

  if (state.days.length === 0) {
    return [];
  }

  state.days.filter((dayItem) => {
    if (dayItem.name === day) {
      dayItem.interviewers.filter((interviewer) => {
        if (interviewer.id === state.interviewers.id) {
          interviewersArr.push(state.interviewers[interviewer]);
        }
      });
    }
  });
  return interviewersArr;
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
