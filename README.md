# Bodhami Login Form

This project implements a login form based on the Bodhami design with parent-child communication for error handling.

## Features

- **Responsive Login Form**: Matches the provided design with gradient background
- **Parent-Child Communication**: Error messages are handled through Angular's output events
- **Form Validation**: Email validation, password length checks, and required field validation
- **Modern Angular**: Uses Angular 20 with standalone components and signals
- **Responsive Design**: Works on desktop and mobile devices

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`.

## Image Assets

Replace the following placeholder image paths in `src/assets/` with your actual images:

- `logo.png` - Header logo (40px height recommended)
- `form-logo.png` - Logo inside the login form (60px height recommended)  
- `background-logo.png` - Large background logo on the right side (400px height recommended)

## Login Credentials

For testing purposes, use:
- **Email**: test@bodhami.com
- **Password**: password123

## Error Handling

The application demonstrates parent-child communication where:
1. Child component (LoginComponent) emits login attempts
2. Parent component (App) receives the event and validates credentials
3. Parent displays error messages through a modal overlay
4. Error messages include validation for empty fields, invalid email format, and incorrect credentials

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
