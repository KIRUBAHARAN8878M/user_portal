import React from "react";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from "@mui/material";
import { Formik, Form } from "formik";
import ActionButton from "./ActionButton";
import * as Yup from "yup";

const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    name: Yup.string().required("Name is required"),
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
});

const UserFormDialog = ({ open, onClose, isEdit, initialData, onSave }) => {
    const initialValues = initialData || { username: "", name: "", email: "" };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{isEdit ? "Edit User" : "Add User"}</DialogTitle>
            <DialogContent>
            {/* Formik integration for handling form state, validation, and submission */}
                <Formik
                    initialValues={initialValues} // Prepopulate form for editing
                    validationSchema={validationSchema} // Schema to validate input fields
                    onSubmit={onSave} // Callback to handle form submission
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                    }) => (
                        <Form>
                            <TextField
                                margin="dense"
                                label="Username"
                                name="username"
                                fullWidth
                                value={values.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.username && Boolean(errors.username)}
                                helperText={touched.username && errors.username}
                            />
                            <TextField
                                margin="dense"
                                label="Name"
                                name="name"
                                fullWidth
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.name && Boolean(errors.name)}
                                helperText={touched.name && errors.name}
                            />
                            <TextField
                                margin="dense"
                                label="Email"
                                name="email"
                                fullWidth
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.email && Boolean(errors.email)}
                                helperText={touched.email && errors.email}
                            />
                            <DialogActions>
                                <ActionButton text="Cancel" variant="outlined" onClick={onClose} />
                                <ActionButton
                                    type="submit"
                                    text={isEdit ? "Save Changes" : "Add User"}
                                    variant="contained"
                                    onClick={handleSubmit}
                                />
                            </DialogActions>
                        </Form>
                    )}
                </Formik>
            </DialogContent>
        </Dialog>
    );
};

export default UserFormDialog;
