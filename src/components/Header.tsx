import { useState } from "react";
import styled from "styled-components";
import ContactButton from "./ContactButton";
import Modal from "./Modal";

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column; /* Stack items vertically */
    align-items: flex-start; /* Align items to the start */
    height: auto;
    padding: 15px;
    background-color: black;
    color: white;

    @media (min-width: 768px) {
        flex-direction: row; /* Row layout for desktop */
        justify-content: space-between; 
    }

    @media (max-width: 768px) {
        flex-direction: row; /* Row layout for mobile */
        align-items: center; /* Center items on mobile */
    }
`;

const HeaderLogo = styled.h1`
    font-size: 3rem;
    margin-left: 1vw;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

interface HeaderLinksProps {
    isOpen: boolean;
}

const HeaderLinks = styled.div<HeaderLinksProps>`
    display: flex;
    align-items: center; 
    padding: 15px;

    @media (max-width: 768px) {
        display: ${({ isOpen }) => (isOpen ? "flex" : "none")}; /* Show links when menu is open */
        flex-direction: column; /* Stack links vertically */
        width: 100%; /* Full width for mobile */
        margin: 0; /* Remove margin */
    }

    @media (min-width: 768px) {
        display: flex; /* Always show links on desktop */
        flex-direction: row; /* Row layout for desktop */
    }
`;

const Link = styled.a`
    color: white;
    margin-right: 1rem;
    text-decoration: none;
    position: relative;

    &:hover {
        text-decoration: none;
    }

    &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -2px;
        height: 2px;
        background-color: white;
        transform: scaleX(0);
        transition: transform 0.3s ease;
    }

    &:hover::after {
        transform: scaleX(1);
    }

    @media (max-width: 768px) {
        margin: 0.5rem 0; 
    }
`;

const HamburgerMenu = styled.div`
    display: none; 

    @media (max-width: 768px) {
        display: block;
        cursor: pointer;
        margin-left: auto; /* Pushes the hamburger menu to the far right */
        margin-right: 1rem; /* Adds 1rem space from the right */
    }
`;

const MenuIcon = styled.div`
    width: 30px;
    height: 3px;
    background-color: white;
    margin: 5px 0;
`;

export default function Header() {
    const [isOpen, setIsOpen] = useState(false); 
    const [showLogo, setShowLogo] = useState(true);

    const handleContactClick = () => {
        setIsOpen(true);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen); 
        setShowLogo(!showLogo);
    };

    return (
        <HeaderContainer>
            {showLogo && <HeaderLogo>Pedro Oliveira</HeaderLogo>}
            <HeaderLinks isOpen={isOpen}>
                <Link href="about">About Me</Link>
                <Link href="projects">Projects</Link>
                <ContactButton onClick={handleContactClick} />
            </HeaderLinks>
            <HamburgerMenu onClick={toggleMenu}>
                <MenuIcon />
                <MenuIcon />
                <MenuIcon />
            </HamburgerMenu>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </HeaderContainer>
    );
}
