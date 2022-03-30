import { useEffect, useReducer } from "react";
import axios from "axios";

import reducer, {
  SET_DAY,
  SET_APPLICATION_DATA,
  SET_INTERVIEW,
} from "reducers/application";

// const SET_DAY = "SET_DAY";
// const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
// const SET_INTERVIEW = "SET_INTERVIEW";

// function reducer(state, action) {
//   const { day, days, appointments, interviewers, id, interview } = action;

//   switch (action.type) {
//     case SET_DAY:
//       // const { day } = action;
//       return { ...state, day };
//     case SET_APPLICATION_DATA:
//       // const { days, appointments, interviewers } = action;
//       return { ...state, days, appointments, interviewers };
//     case SET_INTERVIEW: {
//       // console.log("ACTION: ", action);
//       const appointment = {
//         ...state.appointments[id],
//         interview: interview ? { ...interview } : null,
//       };

//       const appointments = {
//         ...state.appointments,
//         [id]: appointment,
//       };

//       function updateSpots(state, appointments) {
//         // make copy of days array
//         const days = state.days.map((day) => {
//           return { ...day };
//         });

//         // console.log("DAYS: ", days);

//         function findDay(day) {
//           const daysOfWeek = {
//             Monday: 0,
//             Tuesday: 1,
//             Wednesday: 2,
//             Thursday: 3,
//             Friday: 4,
//           };
//           return daysOfWeek[day];
//         }
//         // find the day's index in days array
//         const dayIndex = findDay(state.day);
//         // console.log("STATE.DAY: ", state.day);
//         // console.log("DAYINDEX: ", dayIndex);

//         // check for old state
//         const prevState = state.appointments[id].interview;
//         // console.log("prevSTATE: ", prevState);
//         // check for new state
//         const newState = appointments[id].interview;
//         // console.log("newSTATE: ", newState);

//         // create - no old state + new state
//         if (!prevState && newState) {
//           days[dayIndex].spots--;
//         }
//         // delete - old state + no new state
//         if (prevState && !newState) {
//           days[dayIndex].spots++;
//         }

//         // return days array
//         return days;
//       }

//       const days = updateSpots(state, appointments, id);

//       return { ...state, appointments, days };
//     }
//     default:
//       throw new Error(
//         `Tried to reduce with unsupported action type: ${action.type}`
//       );
//   }
// }

export function useApplicationData() {
  // const [state, setState] = useState({
  //   day: "Monday",
  //   days: [],
  //   appointments: {},
  //   interviewers: {},
  // });

  const [state, dispatch] = useReducer(reducer, {
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  // const setDay = (day) => setState({ ...state, day });
  const setDay = (day) => dispatch({ type: SET_DAY, day });

  function bookInterview(id, interview) {
    // const appointment = {
    //   ...state.appointments[id],
    //   interview: { ...interview },
    // };

    // const appointments = {
    //   ...state.appointments,
    //   [id]: appointment,
    // };

    // setState({
    //   ...state,
    //   appointments,
    // });

    // console.log("STATE.DAYS: ", state.days);
    // console.log("DAY: ", state.day);
    // console.log("STATE: ", state);

    // function updateSpots(state, appointments) {
    //   // make copy of days array
    //   const days = state.days.map((day) => {
    //     return { ...day };
    //   });

    //   // console.log("DAYS: ", days);

    //   function findDay(day) {
    //     const daysOfWeek = {
    //       Monday: 0,
    //       Tuesday: 1,
    //       Wednesday: 2,
    //       Thursday: 3,
    //       Friday: 4,
    //     };
    //     return daysOfWeek[day];
    //   }
    //   // find the day's index in days array
    //   const dayIndex = findDay(state.day);
    //   // console.log("STATE.DAY: ", state.day);
    //   // console.log("DAYINDEX: ", dayIndex);

    //   // check for old state
    //   const prevState = state.appointments[id].interview;
    //   // console.log("prevSTATE: ", prevState);
    //   // check for new state
    //   const newState = appointments[id].interview;
    //   // console.log("newSTATE: ", newState);

    //   // create - no old state + new state
    //   if (!prevState && newState) {
    //     days[dayIndex].spots--;
    //   }
    //   // delete - old state + no new state
    //   if (prevState && !newState) {
    //     days[dayIndex].spots++;
    //   }

    //   // return days array
    //   return days;
    // }

    return axios.put(`/api/appointments/${id}`, { interview }).then((res) => {
      // const days = updateSpots(state, appointments);
      // setState({ ...state, appointments, days });
      dispatch({ type: SET_INTERVIEW, id, interview });
    });
  }

  function cancelInterview(id) {
    // const appointment = {
    //   ...state.appointments[id],
    //   interview: null,
    // };

    // const appointments = {
    //   ...state.appointments,
    //   [id]: appointment,
    // };

    // setState({
    //   ...state,
    //   appointments,
    // });

    // function updateSpots(state, appointments) {
    //   // make copy of days array
    //   const days = state.days.map((day) => {
    //     return { ...day };
    //   });

    //   // console.log("DAYS: ", days);

    //   function findDay(day) {
    //     const daysOfWeek = {
    //       Monday: 0,
    //       Tuesday: 1,
    //       Wednesday: 2,
    //       Thursday: 3,
    //       Friday: 4,
    //     };
    //     return daysOfWeek[day];
    //   }
    //   // find the day's index in days array
    //   const dayIndex = findDay(state.day);
    //   // console.log("STATE.DAY: ", state.day);
    //   // console.log("DAYINDEX: ", dayIndex);

    //   // check for old state
    //   const prevState = state.appointments[id].interview;
    //   // console.log("prevSTATE: ", prevState);
    //   // check for new state
    //   const newState = appointments[id].interview;
    //   // console.log("newSTATE: ", newState);

    //   // create - no old state + new state
    //   if (!prevState && newState) {
    //     days[dayIndex].spots--;
    //   }
    //   // delete - old state + no new state
    //   if (prevState && !newState) {
    //     days[dayIndex].spots++;
    //   }

    //   // return days array
    //   return days;
    // }

    return axios.delete(`/api/appointments/${id}`).then((res) => {
      // const days = updateSpots(state, appointments);
      // setState({ ...state, appointments, days });
      dispatch({ type: SET_INTERVIEW, id, interview: null });
    });
  }

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      // setState((prev) => ({
      //   ...prev,
      //   days: all[0].data,
      //   appointments: all[1].data,
      //   interviewers: all[2].data,
      // }));
      dispatch({
        type: SET_APPLICATION_DATA,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      });
    });
  }, []);

  useEffect(() => {
    const webSocket = new WebSocket(process.env.REACT_APP_WEBSOCKET_URL);

    webSocket.onopen = function (event) {
      webSocket.onmessage = function (event) {
        // console.log("Message Received: ", event.data);

        const data = JSON.parse(event.data);
        // console.log("DATA: ", data);

        if (data.type === "SET_INTERVIEW") {
          dispatch({
            type: SET_INTERVIEW,
            interview: data.interview,
            id: data.id,
          });
        }
      };
    };
    return () => {
      webSocket.close();
    };
  }, []);

  return { setDay, bookInterview, cancelInterview, state };
}

export default useApplicationData;
