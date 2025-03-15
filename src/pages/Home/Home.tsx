import classNames from 'classnames/bind';

import style from './Home.module.scss';

const cx = classNames.bind(style);
function Home() {
    return (
        <>
            <div>
                <h2 className={cx('Test')}>Home page</h2>
            </div>
        </>
    );
}

export default Home;
