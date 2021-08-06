import React from 'react';
import Header from '../components/Header/Header';

const MainLayout = ({children}) => {
    return (
        <>
            <Header/>
            <div >{children}</div>
        </>
    );
};

export default MainLayout;