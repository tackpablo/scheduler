export function getAppointmentsForDay(state, day) {
  // state.days.forEach((dayItem) => {
  //   if (dayItem.name === day) {
  //     dayItem.appointments.forEach((appointment) => {
  //       appointmentsArr.push(state.appointments[appointment]);
  //     });
  //   }
  // });
  // return appointmentsArr;

  // create shallow copy of days filtered by specified day
  const filteredDays = state.days.filter((stateDay) => stateDay.name === day);

  // if there are no filtered days return empty array
  if (filteredDays.length === 0) return [];

  // else take the only day and map over appointments and find them by id
  const appointmentsArr = filteredDays[0].appointments.map((id) => {
    return state.appointments[id];
  });
  return appointmentsArr;
}

export function getInterviewersForDay(state, day) {
  // if (state.days.length === 0) {
  //   return [];
  // }

  // state.days.forEach((dayItem) => {
  //   if (dayItem.name === day) {
  //     dayItem.interviewers.forEach((interviewer) => {
  //       if (interviewer.id === state.interviewers.id) {
  //         interviewersArr.push(state.interviewers[interviewer]);
  //       }
  //     });
  //   }
  // });
  // return interviewersArr;

  // create shallow copy of days filtered by specified day
  const filteredDays = state.days.filter((stateDay) => stateDay.name === day);

  // if there are no filtered days return empty array
  if (filteredDays.length === 0) return [];

  // else take the only day and map over interviewers and find them by id
  const interviewersArr = filteredDays[0].interviewers.map((id) => {
    return state.interviewers[id];
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
