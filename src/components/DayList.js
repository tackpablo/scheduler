import React from "react";

import DayListItem from "./DayListItem";

const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 0,
  },
];

export default function DayList(props) {
  const dayList = days.map((item) => {
    return (
      <DayListItem
        key={item.id}
        spots={item.spots}
        name={item.name}
        selected={item.name === props.day}
        setDay={props.setDay}
      />
    );
  });

  return <ul>{dayList}</ul>;
}
