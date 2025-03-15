import { ReactNode } from 'react';
import Header from '@layout/components/Header';
import Footer from '@layout/components/Footer';

function DefaultLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default DefaultLayout;
