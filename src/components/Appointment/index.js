import React, { Fragment } from "react";

import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";

export default function Appointment(props) {
  const { time, interview, student, interviewer } = props;
  return (
    <Fragment>
      <Header time={time} />
      <article className="appointment">
        {interview ? (
          <Show
            student={interview.student}
            interviewer={interview.interviewer}
          />
        ) : (
          <Empty />
        )}
      </article>
    </Fragment>
  );
}
