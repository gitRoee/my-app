import { JSX, createContext, useContext, useState } from 'react';

type props = {
    children: React.JSX.Element;
}

type context = {
    setModal: (modal: React.JSX.Element) => void;
    closeModal: () => void;
}

export const PortalContext = createContext<context>({
    setModal: function (modal: JSX.Element): void { },
    closeModal: function (): void { }
});

const Portal = ({ children }: props) => {
    const [currModal, setCurrModal] = useState<React.JSX.Element | undefined>(undefined);

    const setModal = (modal: React.JSX.Element) => {
        setCurrModal(modal);
    }

    const closeModal = () => {
        setCurrModal(undefined);
    }

    return (
        <PortalContext.Provider value={{
            setModal,
            closeModal
        }}>
            {children}
            {currModal}
        </PortalContext.Provider>
    );
};

export default Portal;

export const usePortalContext = () => useContext(PortalContext);