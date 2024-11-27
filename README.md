
# User Management Dashboard

## Overview
The **User Management Dashboard** is a React-based application that allows CRUD operations (Create, Read, Update, Delete) on user data. The app features:
- **Dark theme** with Material-UI for a modern UI experience.
- **Reusable components** for enhanced modularity and code reusability.
- **API service abstraction** for seamless data integration.
- **Snackbar notifications** for real-time feedback to users.

---

## Setup Instructions

### Prerequisites
- **Node.js** and **npm/yarn** installed on your system.
- A code editor, such as **VSCode**.

### Steps to Set Up
1. Clone the repository:
   ```bash
   git clone https://github.com/KIRUBAHARAN8878M/user_portal.git
   cd user_portal
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## Run Instructions

### To Add a User:
1. Click the **Add User** button.
2. Fill in the username, name, and email fields.
3. Click **Add User** to save the details.

### To Edit a User:
1. Click the **Edit** icon next to the user in the table.
2. Modify the details in the form.
3. Click **Save Changes** to update the information.

### To Delete a User:
1. Click the **Delete** icon next to the user in the table.
2. Confirm the deletion.

---

## Reflection on Development Challenges

### Challenges Faced
1. **Managing State Across Components**:
   - The need to manage form states, table updates, and notifications required careful organization.
   - **Solution**: Centralized state for users and modular components helped.

2. **Ensuring Code Reusability**:
   - Avoiding repeated logic in components like form fields or API calls.
   - **Solution**: Abstracted API logic into reusable service functions and form logic into a reusable dialog.

3. **Handling Validation and Errors**:
   - Ensuring that all forms were validated properly and providing user-friendly error messages.
   - **Solution**: Used `Yup` for validation and Snackbar for error notifications.

4. **Scrollbar Customization**:
   - Styling the scrollbar to match the dark theme without affecting usability.
   - **Solution**: Applied custom CSS for the table container scrollbar.

---

### Improvements for Future Development
1. **Enhanced User Authentication**:
   - Implement user authentication to restrict access to CRUD operations.

2. **Pagination and Search**:
   - Add server-side pagination and search functionality to handle large datasets.

3. **Testing**:
   - Implement unit and integration tests for all components and API services.

4. **Responsive Design Enhancements**:
   - While the current layout adapts to smaller screens, further optimizations can be made for mobile users.

5. **Code Coverage**:
   - Include tools like `jest` or `react-testing-library` to ensure high code coverage.

---

## Project Structure
```plaintext
src/
  components/
    ActionButton.jsx        # Reusable button component
    UserTable.jsx           # Component for displaying the user list
    UserFormDialog.jsx      # Form dialog for adding/editing users
  services/
    api.js                  # API service abstraction for CRUD operations
  styles/
    App.css                 # Custom styles for the app
  App.jsx                   # Main application file
  index.js                  # Entry point
```

---

## Dependencies
- **React**: Core library for building the app.
- **Material-UI**: UI components and theming.
- **Formik**: Form handling and validation.
- **Yup**: Schema-based form validation.
- **Axios**: For API requests.

---

## Author
Developed by - KIRUBAHARAN M .

For any questions or issues, feel free to contact me at - kirubaharan8878m@gmail.com.
