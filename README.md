# Loan Application Form

This project is a **Loan Application Form** built using **React**, **React JSON Schema Form (RJSF)**, and **Material-UI (MUI)**. It allows users to apply for a loan by filling out structured forms with validation and conditional logic.

---

## Features

1. **Multi-Step Form**: The form is divided into two steps:
   - **Business Details**: Collects business information, including GSTIN and directors' details.
   - **Loan Details**: Collects loan-related information, including credit score, required loan amount, and conditional fields for guarantors and bank statements.
2. **Validation**:
   - GSTIN and PAN numbers are validated using regex patterns.
   - Conditional logic ensures that if the credit score is below 700, the user must provide at least 2 guarantors and upload bank statements.
3. **Styling**: The form is styled using **Material-UI (MUI)** for a modern and responsive user interface.
4. **Dynamic Forms**: The form structure is defined using **JSON schemas**, making it easy to modify and extend.

---

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React JSON Schema Form (RJSF)**: A library for rendering forms based on JSON schemas.
- **AJV8 Validator**: A JSON schema validator used by RJSF for data validation.
- **Material-UI (MUI)**: A React UI framework for styling and components.
- **React Router**: For multi-screen form navigation (optional, not used in this project).

---

## How It Works

### 1. JSON Schemas
The form structure and validation rules are defined using JSON schemas. There are two schemas:
1. **Business Details Schema**:
   - Defines fields for business name, GSTIN, and directors.
   - Enforces regex validation for GSTIN and PAN numbers.
2. **Loan Details Schema**:
   - Defines fields for credit score, required loan amount, guarantors, and bank statements.
   - Includes conditional logic to show/hide fields based on the credit score.

### 2. RJSF Forms
- **RJSF** renders the forms based on the JSON schemas.
- The `Form` component from RJSF is used to render the forms and handle validation using the **AJV8 validator**.

### 3. Material-UI (MUI)
- MUI components are used to style the forms and create a responsive layout.
- The `Paper`, `Typography`, `Box`, and `Button` components from MUI are used to create a clean and modern UI.

### 4. Multi-Step Form
- The form is divided into two steps using a **stepper** component from MUI.
- The `Stepper` component guides users through the form steps and handles navigation between steps.

### 5. Conditional Logic
- The JSON schema includes conditional logic using the `dependencies` keyword.
- If the credit score is below 700, the user is required to provide at least 2 guarantors and upload bank statements.

---

## Project Structure
src/
├── components/
│ ├── BusinessDetailsForm.jsx
│ ├── LoanDetailsForm.jsx
│ └── Stepper.jsx
├── schemas/
│ ├── businessDetailsSchema.js
│ └── loanDetailsSchema.js
├── App.jsx
├── index.js
└── styles.css


---

## Installation

### 1. Clone the Repository
```bash
git clone  https://github.com/Harsh-rgb394/JSONTask.git
cd loan-application-form

### 2.Install Dependencies
npm install


### 3. the Project
bash
Copy

npm start


Code Explanation
1. JSON Schemas

    businessDetailsSchema.js:

        Defines fields for business name, GSTIN, and directors.

        Enforces regex validation for GSTIN and PAN numbers.

    loanDetailsSchema.js:

        Defines fields for credit score, required loan amount, guarantors, and bank statements.

        Includes conditional logic for guarantors and bank statements.

2. Components

    BusinessDetailsForm.jsx:

        Renders the Business Details form using RJSF and MUI.

    LoanDetailsForm.jsx:

        Renders the Loan Details form using RJSF and MUI.

    Stepper.jsx:

        Handles multi-step form navigation using MUI's Stepper component.

3. App Component

    App.jsx:

        The main component that renders the Stepper and wraps the app in a ThemeProvider for consistent styling.

4. Styling

    styles.css:

        Contains global styles for the form.

    MUI Components:

        Used for styling and layout (e.g., Paper, Typography, Box, Button).


##################
How Libraries Work Together
1. RJSF + AJV8

    RJSF renders the forms based on the JSON schemas.

    AJV8 validates the form data against the schema rules (e.g., required fields, regex patterns).

2. MUI

    Provides pre-built components for styling and layout.

    Ensures the form is responsive and visually appealing.

3. React

    Handles the component structure and state management.

    Coordinates between RJSF, MUI, and the JSON schemas.
Future Improvements

    Backend Integration: Connect the form to a backend (e.g., Node.js + MongoDB) to store loan applications.

    File Upload: Enhance the file upload functionality for bank statements.

    Form Persistence: Save form data locally (e.g., using localStorage) so users can resume their application later.

Contributing

Contributions are welcome! Please open an issue or submit a pull request.
License

This project is licensed under the MIT License. See the LICENSE file for details.
