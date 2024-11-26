import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Stack,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "../styles/App.css";

const UserTable = ({ users, onEdit, onDelete }) => {
    return (
        // TableContainer with sticky header and scrollable body for better UX
        <TableContainer
            component={Paper}
            className="table-container"
            sx={{
                maxHeight: "500px",
                overflowY: "auto", // Enables scrolling for table content
                backgroundColor: "background.paper",
            }}
        >
            {/* Table with sticky header and scrollable body for better user experience */}
            <Table stickyHeader>
                <TableHead>
                    <TableRow sx={{ backgroundColor: "#333" }}>
                        <TableCell sx={{ fontWeight: "bold" }}>ID</TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>Username</TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                                <Stack direction="row" spacing={2}>
                                    <EditIcon
                                        onClick={() => onEdit(user)}
                                        sx={{
                                            color: "primary.main",
                                            fontSize: 25,
                                            cursor: "pointer",
                                        }}
                                    />
                                    <DeleteForeverIcon
                                        onClick={() => onDelete(user.id)}
                                        sx={{
                                            color: "secondary.main",
                                            fontSize: 25,
                                            cursor: "pointer",
                                        }}
                                    />
                                </Stack>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UserTable;
