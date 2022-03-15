import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import logo from "../image/logo.png";
import "./Example.css";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import New from "./New";
import Axios from "../Axios/Axios";
import Result from "./Result";

function Example() {
    const [newBooks, setNewBooks] = useState([]);
    const [res, setRes] = useState(null);

    useEffect(() => {
        getNewBooks();
    }, []);

    const search = (e) => {
        if (e.target.value) {
            Axios.post("search", {
                value: e.target.value,
            })
                .then((res) => {
                    console.log(res.data);
                    setRes(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            setRes(null);
        }
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

    window.onscroll = () => {
        var topButton = document.getElementById("top-button");
        var header = document.getElementById("header");

        if (window.pageYOffset === 0) {
            topButton.style.display = "none";
            header.style.backgroundColor = "#fdffed";
            header.style.boxShadow = "none";
        } else {
            topButton.style.display = "block";
            header.style.backgroundColor = "#fff";
            header.style.boxShadow = "#aaa 0px 0px 20px 0px";
        }
    };

    return (
        <div>
            <header className="header home scroll" id="header">
                <div className="navhome container">
                    <div className="row">
                        <div className="col-lg-3 col-12 d-flex justify-content-center ">
                            <div className="logo ">
                                <img
                                    src={logo}
                                    alt="logo"
                                    style={{ cursor: "pointer" }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-9 col-12 ">
                            <div className="search-box">
                                <div className="form-group has-search">
                                    <button
                                        type="submit"
                                        className="form-control-feedback search-btn"
                                    >
                                        <i className="bi bi-search"></i>
                                    </button>
                                    <input
                                        type="text"
                                        className="form-control search-input"
                                        placeholder="Search"
                                        onChange={(e) => search(e)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container">
                <div className="row frist-row">
                    {res ? (
                        res.length > 0 ? (
                            res.map((book, key) => {
                                return <Result key={key} book={book} />;
                            })
                        ) : (
                            <h1 className="mt-5">Result Not Found. Try Again!</h1>
                        )
                    ) : (
                        newBooks.map((book, key) => {
                            return <New key={key} book={book} />;
                        })
                    )}
                    {/* {newBooks.map((book, key) => {
                        return <New key={key} book={book} />;
                    })} */}
                </div>
            </div>

            <div id="top-button">
                <IconButton
                    aria-label="top"
                    onClick={() => window.scrollTo(0, 0)}
                >
                    <ArrowDropUpRoundedIcon />
                </IconButton>
            </div>
            <div className="mt-5"></div>
        </div>
    );
}

export default Example;

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
