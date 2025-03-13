import { ReactNode } from 'react';
import Header from '@layout/components/Header';

function DefaultLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}

export default DefaultLayout;
