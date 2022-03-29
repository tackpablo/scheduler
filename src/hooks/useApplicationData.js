import { useState, useEffect } from "react";
import axios from "axios";

function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    setState({
      ...state,
      appointments,
    });

    // console.log("STATE.DAYS: ", state.days);
    // console.log("DAY: ", state.day);
    // console.log("STATE: ", state);

    function updateSpots(state, appointments) {
      // make copy of days array
      const days = state.days.map((day) => {
        return { ...day };
      });

      // console.log("DAYS: ", days);

      function findDay(day) {
        const daysOfWeek = {
          Monday: 0,
          Tuesday: 1,
          Wednesday: 2,
          Thursday: 3,
          Friday: 4,
        };
        return daysOfWeek[day];
      }
      // find the day's index in days array
      const dayIndex = findDay(state.day);
      // console.log("STATE.DAY: ", state.day);
      // console.log("DAYINDEX: ", dayIndex);

      // check for old state
      const prevState = state.appointments[id].interview;
      // console.log("prevSTATE: ", prevState);
      // check for new state
      const newState = appointments[id].interview;
      // console.log("newSTATE: ", newState);

      // create - no old state + new state
      if (!prevState && newState) {
        days[dayIndex].spots--;
      }
      // delete - old state + no new state
      if (prevState && !newState) {
        days[dayIndex].spots++;
      }

      // return days array
      return days;
    }

    return axios.put(`/api/appointments/${id}`, { interview }).then((res) => {
      const days = updateSpots(state, appointments);
      setState({ ...state, appointments, days });
    });
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    setState({
      ...state,
      appointments,
    });

    function updateSpots(state, appointments) {
      // make copy of days array
      const days = state.days.map((day) => {
        return { ...day };
      });

      // console.log("DAYS: ", days);

      function findDay(day) {
        const daysOfWeek = {
          Monday: 0,
          Tuesday: 1,
          Wednesday: 2,
          Thursday: 3,
          Friday: 4,
        };
        return daysOfWeek[day];
      }
      // find the day's index in days array
      const dayIndex = findDay(state.day);
      // console.log("STATE.DAY: ", state.day);
      // console.log("DAYINDEX: ", dayIndex);

      // check for old state
      const prevState = state.appointments[id].interview;
      // console.log("prevSTATE: ", prevState);
      // check for new state
      const newState = appointments[id].interview;
      // console.log("newSTATE: ", newState);

      // create - no old state + new state
      if (!prevState && newState) {
        days[dayIndex].spots--;
      }
      // delete - old state + no new state
      if (prevState && !newState) {
        days[dayIndex].spots++;
      }

      // return days array
      return days;
    }

    return axios.delete(`/api/appointments/${id}`).then((res) => {
      const days = updateSpots(state, appointments);
      setState({ ...state, appointments, days });
    });
  }

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  return { setDay, bookInterview, cancelInterview, state };
}

export default useApplicationData;
