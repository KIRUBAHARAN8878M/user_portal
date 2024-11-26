import { useState, useEffect } from "react";
import { Box, Grid, Typography, Snackbar, Alert } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import UserTable from "./components/UserTable";
import UserFormDialog from "./components/UserFormDialog";
import ActionButton from "./components/ActionButton";
import { fetchUsers, addUser, updateUser, deleteUser } from "./services/api";

// Configure a dark theme using Material-UI's createTheme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#fff",
    },
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
});

function App() {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  // State to manage notifications
  const [notification, setNotification] = useState({
    open: false, // Visibility of the notification
    message: "", // Notification text
    severity: "success", // Notification type: success, error, info, or warning
  });

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const userList = await fetchUsers();
        setUsers(userList);
      } catch (error) {
        showNotification("Failed to fetch users. Please try again.", "error");
      }
    };
    loadUsers();
  }, []);

  // Show notification with a custom message and severity
  const showNotification = (message, severity = "success") => {
    setNotification({ open: true, message, severity });
  };

  // Opens the user form dialog in either add or edit mode
  const handleOpenDialog = (user = null) => {
    setIsEdit(Boolean(user));
    setCurrentUser(user);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setIsEdit(false);
    setCurrentUser(null);
  };

  const handleSaveUser = async (values) => {
    try {
      if (isEdit) {
        const updatedUser = await updateUser(currentUser.id, values);
        setUsers((prev) =>
          prev.map((user) => (user.id === currentUser.id ? updatedUser : user))
        );
        showNotification("User updated successfully!", "success");
      } else {
        const newUser = await addUser(values);
        setUsers((prev) => [...prev, newUser]);
        showNotification("User added successfully!", "success");
      }
      handleCloseDialog();
    } catch (error) {
      showNotification("Failed to save user. Please try again.", "error");
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers((prev) => prev.filter((user) => user.id !== id));
      showNotification("User deleted successfully!", "success");
    } catch (error) {
      showNotification("Failed to delete user. Please try again.", "error");
    }
  };

  return (
    // Wrap the app with ThemeProvider to apply the theme globally
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Typography variant="h5" gutterBottom>
          User Management Dashboard
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <ActionButton
              text="Add User"
              color="primary"
              onClick={() => handleOpenDialog()}
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12}>
            <UserTable
              users={users}
              onEdit={handleOpenDialog}
              onDelete={handleDeleteUser}
            />
          </Grid>
        </Grid>
        <UserFormDialog
          open={open}
          onClose={handleCloseDialog}
          isEdit={isEdit}
          initialData={currentUser}
          onSave={handleSaveUser}
        />
        <Snackbar
          open={notification.open}
          autoHideDuration={3000}
          onClose={() => setNotification({ ...notification, open: false })}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            severity={notification.severity}
            onClose={() => setNotification({ ...notification, open: false })}
          >
            {notification.message}
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
}

export default App;
