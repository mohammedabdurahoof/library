import { IconButton } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import logo from "../image/logo.png";
import "./Example.css";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import New from "./New";

function Example() {
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
                                        class="form-control search-input"
                                        placeholder="Search"
                                        // onClick={() => {
                                        //     history.push("/search");
                                        // }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container">
                <div className="row frist-row">
                    <New />
                    <New />
                    <New />
                    <New />
                    <New />
                    <New />
                    <New />
                    <New />
                    <New />
                    <New />
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
        </div>
    );
}

export default Example;

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
