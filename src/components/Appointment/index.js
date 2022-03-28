import React, { Fragment } from "react";

import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import useVisualMode from "hooks/useVisualMode";

export default function Appointment(props) {
  const { id, time, interviewers, bookInterview, cancelInterview } = props;

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    transition(SAVING);
    bookInterview(id, interview).then(() => {
      transition(SHOW);
    });
  }

  function confirmDelete() {
    transition(CONFIRM);
  }

  function deleteInterview(id) {
    transition(DELETING);
    cancelInterview(id).then(() => {
      transition(EMPTY);
    });
  }

  return (
    <Fragment>
      <Header time={time} />
      <article className="appointment">
        {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
        {mode === SHOW && (
          <Show
            id={id}
            student={props.interview.student}
            interviewer={props.interview.interviewer}
            onDelete={() => confirmDelete()}
          />
        )}
        {mode === CONFIRM && (
          <Confirm
            onCancel={() => back()}
            message="Are you sure you want to delete this interview session?"
            onConfirm={() => deleteInterview(id)}
          />
        )}
        {mode === SAVING && <Status message="Saving" />}
        {mode === DELETING && <Status message="Deleting" />}
        {mode === CREATE && (
          <Form
            interviewers={interviewers}
            onCancel={() => back()}
            onSave={save}
          />
        )}
      </article>
    </Fragment>
  );
}
