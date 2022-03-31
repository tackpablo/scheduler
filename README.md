# Interview Scheduler

The Interview Scheduler is a React Application that allows anyone to book/edit/cancel/delete interviews. It was made using React, Axios, Node.js, Storybook, Cypress, Jest, and postgreSQL. External API used in the project can be found here: [scheduler-api](https://github.com/tackpablo/scheduler-api).

# How to use Interview Scheduler and Features

- Minimalistic design
- Choose available time slots to book interviews
  - Provide your name and choose an interviewer
- Edit and delete inteview slots as required
- All actions have a confirmation to prevent accidental creation/editing/deleting of interviews
- Number of available interview spots per day easily accessible
- Interview slots available Monday to Friday

# Live Demo

Please visit my app [here](tackpablo-scheduler.netlify.app).

# Final Product

### Desktop View

!["Desktop View"](https://github.com/tackpablo/scheduler/blob/master/public/images/README%20Images/Desktop%20View.png)

### Mobile View

!["Mobile View"](https://github.com/tackpablo/scheduler/blob/master/public/images/README%20Images/Mobile%20View.png)

# Features

### Adding New Interviews

!["Adding New Interviews"](https://github.com/tackpablo/scheduler/blob/master/public/images/README%20Images/New%20Interview.gif)

### Editing Interviews

!["Editing Interviews"](https://github.com/tackpablo/scheduler/blob/master/public/images/README%20Images/Editing%20Interview.gif)

### Deleting Interviews

!["Deleting Interviews"](https://github.com/tackpablo/scheduler/blob/master/public/images/README%20Images/Deleting%20Interview.gif)

### Cancelling of Actions

!["Cancelling of Actions"](https://github.com/tackpablo/scheduler/blob/master/public/images/README%20Images/Cancelling.gif)

### Switching Between Days

!["Switching Between Days"](https://github.com/tackpablo/scheduler/blob/master/public/images/README%20Images/Switch%20Days.gif)

### Websocket Connection

!["Websocket Connection"](https://github.com/tackpablo/scheduler/blob/master/public/images/README%20Images/Websocket.gif)

# Errors

### New Interview Error

!["New Interview Error"](https://github.com/tackpablo/scheduler/blob/master/public/images/README%20Images/New%20Interview%20Error.gif)

### Deleting Error

!["Deleting Error"](https://github.com/tackpablo/scheduler/blob/master/public/images/README%20Images/Deleting%20Error.gif)

# Getting Started

1. Clone this repo in addition to the [scheduler-api](https://github.com/tackpablo/scheduler-api) repository
2. Install dependencies with `npm install` on both client and server.
3. Run both client and server:
   - Running Webpack Development Server: `npm start`
   - Running Webpack Development Client: `npm start`
4. Running Jest Test Framework `npm test`
5. Running Storybook Visual Testbed: `npm run storybook`
6. Running Cypress E2E Testbed: `npm run cypress`

# Dependencies

- axios
- classnames
- normalize.css
- react
- react-dom
- react-scripts

# Dev

- babel-loader
- @testing-library/jest-dom
- @testing-library/react
- Cypress
- Cypress
- Storybook
- Node-sass
- Prop-types
- react-test-renderer
