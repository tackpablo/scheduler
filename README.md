# Interview Scheduler

Smartodo is a full stack todo list application that is able to categorize added tasks. It was made using EJS, sass, JS, jQuery/AJAX, Axios, Node.js and postgreSQL. External APIs used were: Advanced Movie Search API, HAPI Books API and the Edamam Food and Grocery Database API. Midterm project for Lighthouse Labs Web Development Bootcamp

# How to use Interview Scheduler and Features

- Minimalistic design
- MPA utilizing AJAX requests to prevent page refreshes when possible
- Navigation bar to navigate between landing page, login/register page, and task list page.
- Functional login and registration
- Error handling for empty inputs as well
- Responsive design that supports different screen sizes
- Protected against simple XSS injection for safe use
- Ability to add tasks, which gets sorted via sorting algorithm to correct category (4 total categories)
- Task categories are editable
- Tasks can be deleted
- Main task list page has dynamic message based on time and displays user first name

# Final Product

### Desktop View

!["Desktop View"]()

### Mobile View

!["Mobile View"]()

# Features

### Adding New Interviews

!["Adding New Interviews"]()

### Editing Interviews

!["Editing Interviews"]()

### Deleting Interviews

!["Deleting Interviews"]()

### Cancelling

!["Cancelling"]()

### Switching Between Days

!["Switching Between Days"]()

### Websocket Connection

!["Websocket Connection"]()

# Errors

### New Interview Error

!["New Interview Error"]()

### Deleting Error

!["Deleting Error"]()

# Getting Started

1. Clone this repo in addition to the scheduler-api(https://github.com/tackpablo/scheduler-api) repository
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
