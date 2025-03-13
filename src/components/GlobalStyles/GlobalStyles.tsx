import { ReactNode } from 'react';

import './GlobalStyles.scss';

// export interface GlobalStyles {
//     children: ReactNode;
// }
function GlobalStyles({ children }: {children: ReactNode}) {
    return children;
}

export default GlobalStyles;
