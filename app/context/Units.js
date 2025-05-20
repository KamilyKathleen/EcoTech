import { createContext, useContext } from 'react';

const whatsappContacts = [
    { ponto: "Reciclagem Santa Maria", contato: '5531998951863', formatado: '+55 (31) 99895-1863' },
    { ponto: "Reciclagem Santa Maria Fixo", contato: '553137735521', formatado: '+55 (31) 3773-5521' },
    { ponto: "Reciclagem Norte Sul", contato: '5531984089912', formatado: '+55 (31) 98408-9912' },
    { ponto: "Entrega Voluntária de Resíduos Sólidos (PEVs)", contato: '', formatado: '' },
];

const UnitsContext = createContext(whatsappContacts);

export const useUnits = () => useContext(UnitsContext);

export const UnitsProvider = ({ children }) => {
    return (
        <UnitsContext.Provider value={whatsappContacts}>
            {children}
        </UnitsContext.Provider>
    );
};
