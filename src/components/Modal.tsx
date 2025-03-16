import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8); /* Darker overlay for a more modern look */
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContainer = styled.div`
    background:rgb(255, 255, 255); /* Dark background for the modal */
    padding: 30px;
    border-radius: 10px;
    width: 500px;
    position: relative;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); /* Add shadow for depth */
`;

const CloseButton = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    background: transparent;
    border: none;
    color: black; /* White color for the close button */
    font-size: 1.5rem; /* Larger font size */
    cursor: pointer;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    margin: 15px 0; /* Increased margin for spacing */
    color: black; /* White text color */
`;

const Logo = styled.img`
    width: 40px; /* Larger logo size */
    height: 40px;
    margin-right: 15px; /* Increased margin */
`;

interface RowData {
    logo: string;
    title: string;
    link: string;
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const rows: RowData[] = [
    { logo: '../public/linkedin.png', title: 'LinkedIn', link: 'https://www.linkedin.com/in/pedro-henrique-de-oliveira-b4b984239' },
    { logo: '../public/social.png', title: 'GitHub', link: 'https://github.com/Phomhado' },
    { logo: '../public/phone-call.png', title: 'Phone', link: '+55 41 99969-5984' },
    { logo: '../public/email.png', title: 'E-mail', link: 'pedro.he.oli10@gmail.com' },
];

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <ModalOverlay>
            <ModalContainer>
                <CloseButton onClick={onClose}>X</CloseButton>
                {rows.map((row, index) => (
                    <Row key={index}>
                        <Logo src={row.logo} alt={row.title} />
                        <div>
                            <h4>{row.title}</h4>
                            <a href={row.link} style={{ color: 'black', textDecoration: 'underline' }}>{row.link}</a>
                        </div>
                    </Row>
                ))}
            </ModalContainer>
        </ModalOverlay>
    );
};

export default Modal;
