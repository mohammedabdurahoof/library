import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import ReactDOM from "react-dom";
import { Chip, TextField } from "@mui/material";
import Axios from "../Axios/Axios";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
    const [open, setOpen] = React.useState(false);
    const [barcode, setBarcode] = React.useState("");
    const [newBooks, setNewBooks] = React.useState([]);

    React.useEffect(() => {
        getNewBooks();
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        location.reload();
    };

    const handleClick = () => {
        console.info("You clicked the Chip.");
    };

    const handleDelete = (id) => {
        console.info("You clicked the delete icon.");
        Axios.post("delete-new-book", {
            id,
        })
            .then((res) => {
                console.log(res.data);
                getNewBooks();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const search = (e) => {
        e.preventDefault();
        Axios.post("add-new-book", {
            barcode,
        })
            .then((res) => {
                console.log(res.data);
                getNewBooks();
                setBarcode("");
                document.getElementById("filled-basic").value = "";
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getNewBooks = () => {
        Axios.get("get-new-book")
            .then((res) => {
                // console.log(res.data);
                setNewBooks(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add New Books
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle
                    id="customized-dialog-title"
                    onClose={handleClose}
                >
                    Add New Books
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <form onSubmit={(e) => search(e)}>
                        <TextField
                            id="filled-basic"
                            label="Filled"
                            variant="filled"
                            onChange={(e) => setBarcode(e.target.value)}
                        />
                    </form>
                    {newBooks.map((book, key) => {
                        return (
                            <div className="mt-2" key={key}>
                                <Chip
                                    label={book.barcode}
                                    onClick={handleClick}
                                    onDelete={() => handleDelete(book.id)}
                                    color="primary"
                                />
                            </div>
                        );
                    })}
                </DialogContent>
            </BootstrapDialog>
        </div>
    );
}

if (document.getElementById("model")) {
    ReactDOM.render(<CustomizedDialogs />, document.getElementById("model"));
}
