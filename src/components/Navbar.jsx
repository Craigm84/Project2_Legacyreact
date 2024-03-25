import { useLocation } from "react-router-dom";
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './theme.js';
import { useState, useEffect } from "react";

const StyledApp = styled.div`
color: ${(props) => props.theme.fontColor}`;

function Navbar() {

    const location = useLocation();

    const [theme, setTheme] = useState(() =>
        window.localStorage.getItem('theme') || 'light');

    useEffect(() => {
        window.localStorage.setItem('theme', theme);
    }, [theme]);

    const themeToggler = () => {
        theme === 'light' ? setTheme("dark") : setTheme("light");
    };

    if (location.pathname === "/LoginPage") {
        return null;
    }
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <StyledApp>
                <div>                    
                    <div className="" id="navbarSupportedContent">
                        <br />
                        <button style={{ fontSize: "40px", fontWeight: "" }} className="btn btn-secondary" onClick={() => themeToggler()}>🌓</button>
                    </div>
                </div>
            </StyledApp>
        </ThemeProvider>
    );
}

export default Navbar;