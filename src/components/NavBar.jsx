import React, { useState } from "react";
import logo from "../assests/logo.png";
import { Box, Modal } from "@mui/material";
import CreateJob from "./CreateJobOpening";

function NavBar({ onJobCreated }) {
    const [cta, setCta] = useState("Create Jobs");
    const [open, setOpen] = useState(false);

    const navbarStyle = {
        background: 'rgba(86, 86, 86, 0.1)',
        padding: '10px 20px', 
        borderRadius: '30px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        margin: '25px auto', 
        maxWidth: '1200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      };
      

      const ulStyle = {
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 0,
        paddingLeft: 0,
      };
      

    const navLinkStyle = {
        textDecoration: 'none',
        color: 'black',
        fontSize: '14px',
        fontWeight: '500',
    };

    const buttonStyle = {
        background: 'linear-gradient(to right, #6a11cb, #2575fc)',
        border: 'none',
        color: 'white',
        padding: '8px 20px',
        borderRadius: '20px',
        fontWeight: 'bold',
        cursor: 'pointer',
        width: '130px',
    };

    return (
        <>
            <nav style={navbarStyle}>
                <div className="container-fluid">
                    <ul style={ulStyle}>
                        <li>
                            <a href="/">
                                <img
                                    src={logo}
                                    alt="Site logo"
                                    width="50"
                                    height="50"
                                    style={{ borderRadius: '50%' }}
                                />
                            </a>
                        </li>

                        <li><a style={navLinkStyle} href="/">Home</a></li>
                        <li><a style={navLinkStyle} href="/jobs">Find Jobs</a></li>
                        <li><a style={navLinkStyle} href="/talents">Find Talents</a></li>
                        <li><a style={navLinkStyle} href="/about">About Us</a></li>
                        <li><a style={navLinkStyle} href="/testimonials">Testimonial</a></li>

                        <li>
                            <button
                                style={buttonStyle}
                                onClick={() => setOpen(true)}
                                onMouseEnter={() => setCta("Login")}
                                onMouseLeave={() => setCta("Create Jobs")}
                            >
                                {cta}
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            <Modal open={open} onClose={() => setOpen(false)}>
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 800,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <CreateJob onJobCreated={() => {
                        setOpen(false);
                        if (onJobCreated) {
                            onJobCreated();
                        }
                    }} />
                </Box>
            </Modal>
        </>
    );
}

export default NavBar;
