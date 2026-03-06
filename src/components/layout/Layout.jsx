import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            <Header />
            <main className="flex-grow pt-36 md:pt-0">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
