import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    padding: 0.5rem 1rem;
    background-color: white;
    color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: black;
        color: white;
    }
`;

interface ContactButtonProps {
    onClick: () => void; 
}

const ContactButton: React.FC<ContactButtonProps> = ({ onClick }) => {
    return <Button onClick={onClick}>Contact Me</Button>;
};

export default ContactButton; 