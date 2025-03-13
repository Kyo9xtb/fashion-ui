import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { Images } from '@/assets';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function MegaMenu() {
    return (
        <div className={cx('sub-menu', 'mega-menu')}>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    <div className={cx('col-lg-2')}>
                        <div className={cx('mega-menu-item')}>
                            <div className={cx('menu-heading')}>Shop Layout</div>
                            <ul className={cx('menu-list')}>
                                <li className={cx('menu-item-li')}>
                                    <Link to="/" className={cx('menu-link-text')}>
                                        DefaultLayout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('col-lg-4')}></div>
                </div>
            </div>
        </div>
    );
}
function SubMenu() {
    return (
        <div className={cx('sub-menu', 'sub-menu-default')}>
            <ul className={cx('menu-list')}>
                <li className={cx('menu-item-li')}>
                    <Link to="/" className={cx('menu-link-text')}>
                        DefaultLayout
                    </Link>
                </li>
            </ul>
        </div>
    );
}
function Header() {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isScrollTop, setIsScrollTop] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                return setIsScrollTop(false);
            }
            setIsScrollTop(window.scrollY < lastScrollTop);
            setLastScrollTop(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isScrollTop, lastScrollTop]);
    return (
        <header
            id={cx('header')}
            className={isScrollTop ? cx('header-default', 'header-bg') : cx('header-default')}
            style={isScrollTop ? { top: '0px' } : { top: '-135px' }}
        >
            <div className={cx('container')}>
                <div className={cx('row align-items-center', 'wrapper-header')}>
                    {/**btn-mobile */}
                    <div className={cx('col-md-4 col-3 d-xl-none')}>
                        <Link to="/" className={cx('mobile-menu')}>
                            <i className="fa-solid fa-bars"></i>
                        </Link>
                    </div>
                    {/**logo */}
                    <div className={cx('col-xl-3 col-md-4 col-6')}>
                        <Link to="/" className={cx('logo-header')}>
                            <img src={Images.logo} alt="logo" />
                        </Link>
                    </div>
                    {/**box-nav */}
                    <div className={cx('col-xl-6 d-none d-xl-block')}>
                        <nav className={cx('box-navigation', 'text-center')}>
                            <ul className={cx('d-flex align-items-center justify-content-center', 'box-nav-ul')}>
                                <li className={cx('menu-item')}>
                                    <Link to="/" className={cx('item-link')}>
                                        Home <i className="fa-solid fa-angle-down"></i>
                                    </Link>
                                    <MegaMenu />
                                </li>
                                <li className={cx('menu-item', 'position-relative')}>
                                    <Link to="/" className={cx('item-link')}>
                                        Home <i className="fa-solid fa-angle-down"></i>
                                    </Link>
                                    <SubMenu />
                                </li>
                                <li className={cx('menu-item')}>
                                    <Link to="/" className={cx('item-link')}>
                                        Home <i className="fa-solid fa-angle-down"></i>
                                    </Link>
                                </li>
                                <li className={cx('menu-item')}>
                                    <Link to="/" className={cx('item-link')}>
                                        Home <i className="fa-solid fa-angle-down"></i>
                                    </Link>
                                </li>
                                <li className={cx('menu-item')}>
                                    <Link to="/" className={cx('item-link')}>
                                        Home <i className="fa-solid fa-angle-down"></i>
                                    </Link>
                                </li>
                                <li className={cx('menu-item')}>
                                    <Link to="/" className={cx('item-link')}>
                                        Home <i className="fa-solid fa-angle-down"></i>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    {/**nav-icon */}
                    <div className={cx('col-xl-3 col-md-4 col-3')}>
                        <ul className={cx('d-flex align-items-center justify-content-end', 'nav-icon')}>
                            <li className={cx('nav-search')}>
                                <Link to="/" className={cx('nav-icon-item')}>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </Link>
                            </li>
                            <li className={cx('nav-account')}>
                                <Link to="/" className={cx('nav-icon-item')}>
                                    <i className="fa-solid fa-user"></i>
                                </Link>
                                <div className={cx('dropdown-account', 'dropdown-login')}>
                                    <div className={cx('sub-top')}>
                                        <Link to="/" className={cx('tf-btn ', 'tf-btn', 'btn-reset')}>
                                            Login
                                        </Link>
                                        <p className={cx('text-center text-secondary-2 mb-0')}>
                                            Don’t have an account?
                                            <Link to="/">Register</Link>
                                        </p>
                                    </div>
                                    <div className={cx('sub-bot')}>
                                        <span>Support</span>
                                    </div>
                                </div>
                            </li>
                            <li className={cx('nav-wishlist')}>
                                <Link to="/" className={cx('nav-icon-item')}>
                                    <i className="fa-solid fa-heart"></i>
                                </Link>
                            </li>
                            <li className={cx('nav-cart')}>
                                <Link to="/" className={cx('nav-icon-item')}>
                                    <i className="fa-solid fa-bag-shopping"></i>
                                    <span className={cx('count-box')}>0</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
