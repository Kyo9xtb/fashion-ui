import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import { Images } from '@/assets';

const cx = classNames.bind(styles);
function Footer() {
    const handleOpenMenu = (e: React.MouseEvent<HTMLInputElement>): void => {
        const target = e.target as HTMLElement;
        const closestBlock = target.closest(`.${cx('footer-col-block')}`);
        if (closestBlock) {
            closestBlock.classList.toggle(`${cx('open')}`);
        }
    };
    return (
        <footer id={cx('footer')} className={cx('footer')}>
            <div className={cx('footer-wrapper')}>
                <div className={cx('footer-body')}>
                    <div className={cx('container')}>
                        <div className={cx('row')}>
                            {/** footer-info */}
                            <div className={cx('col-lg-4')}>
                                <div className={cx('footer-info')}>
                                    <div className={cx('footer-logo')}>
                                        <Link to="/">
                                            <img src={Images.logo} alt="" />
                                        </Link>
                                    </div>
                                    <div className={cx('footer-address')}>
                                        <p>549 Oak St.Crystal Lake, IL 60014</p>
                                        <Link to="/" className={cx('tf-btn-default ', 'tf-btn-default')}>
                                            GET DIRECTION
                                            <i className="fa-solid fa-square-arrow-up-right"></i>
                                        </Link>
                                    </div>
                                    <ul className={cx('footer-contact')}>
                                        <li>
                                            <i className="fa-solid fa-envelope"></i>
                                            <p>themesflat@gmail.com</p>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-phone"></i>
                                            <p>315-666-6688</p>
                                        </li>
                                    </ul>
                                    <ul className={cx('tf-social-icon')}>
                                        <li>
                                            <Link to="" className={cx('social-facebook')}>
                                                <i className="fa-brands fa-facebook-f"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="" className={cx('social-twitter')}>
                                                <i className="fa-brands fa-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="" className={cx('social-instagram')}>
                                                <i className="fa-brands fa-instagram"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="" className={cx('social-tiktok')}>
                                                <i className="fa-brands fa-tiktok"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="" className={cx('social-amazon')}>
                                                <i className="fa-brands fa-amazon"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="" className={cx('social-pinterest')}>
                                                <i className="fa-brands fa-pinterest-p"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/** footer-menu */}
                            <div className={cx('col-lg-4')}>
                                <div className={cx('footer-menu')}>
                                    <div className={cx('footer-col-block')} onClick={handleOpenMenu}>
                                        <h3 className={cx('footer-heading', 'text-button', 'footer-heading-mobile')}>
                                            Infomation
                                        </h3>
                                        <div className={cx('tf-collapse-content')}>
                                            <ul className={cx('footer-menu-list')}>
                                                <li className={cx('text-caption-1')}>
                                                    <Link to="" className={cx('footer-menu-item')}>
                                                        About Us
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={cx('footer-col-block')} onClick={handleOpenMenu}>
                                        <h3 className={cx('footer-heading', 'text-button', 'footer-heading-mobile')}>
                                            Infomation
                                        </h3>
                                        <div className={cx('tf-collapse-content')}>
                                            <ul className={cx('footer-menu-list')}>
                                                <li className={cx('text-caption-1')}>
                                                    <Link to="" className={cx('footer-menu-item')}>
                                                        About Us
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/** footer-new-letter */}
                            <div className={cx('col-lg-4')}>
                                <div className={cx('footer-menu')}>
                                    <div className={cx('footer-col-block')} onClick={handleOpenMenu}>
                                        <h3 className={cx('footer-heading', 'text-button', 'footer-heading-mobile')}>
                                            Newletter
                                        </h3>
                                        <div className={cx('tf-collapse-content ', 'tf-collapse-content')}>
                                            <div className={cx('footer-news-letter')}>
                                                <p className={cx('text-caption-1')}>
                                                    Sign up for our newsletter and get 10% off your first purchase
                                                </p>
                                                <div className={cx('tfSubscribeMsg', 'footer-sub-element')}>
                                                    <p style={{ color: 'rgb(52, 168, 83)' }}>
                                                        You have successfully subscribed.
                                                    </p>
                                                </div>
                                                <form
                                                    className={cx(
                                                        'form-newsletter',
                                                        'subscribe-form',
                                                        'position-relative',
                                                    )}
                                                >
                                                    <div className={cx('subscribe-content')}>
                                                        <fieldset className={cx('email')}>
                                                            <input
                                                                type="email"
                                                                name="email"
                                                                id="email"
                                                                placeholder="Enter your e-mail"
                                                                required={true}
                                                            />
                                                        </fieldset>
                                                        <div className={cx('button-submit')}>
                                                            <button type="submit">
                                                                <i className="fa-solid fa-up-right-from-square"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                                <div className={cx('tf-cart-checkbox')}>
                                                    <div className={cx('tf-checkbox-wrapper')}>
                                                        <input type="checkbox" id={cx('footer-Form_agree')} />
                                                        <div>
                                                            <i className="fa-solid fa-check"></i>
                                                        </div>
                                                    </div>
                                                    <label
                                                        htmlFor={cx('footer-Form_agree')}
                                                        className={cx('text-caption-1')}
                                                    >
                                                        By clicking subcribe, you agree to the
                                                        <Link to="">Terms of Service</Link> and{' '}
                                                        <Link to="">Privacy Policy</Link>.
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('footer-bottom')}>
                    <div className={cx('container')}>
                        <div className={cx('row')}>
                            <div className={cx('col-12')}>
                                <div className={cx('footer-bottom-wrapper')}>
                                    <div className={cx('left')}>
                                        <p className={cx('text-caption-1')}>© 2025 Modave. All Rights Reserved.</p>
                                    </div>
                                    <div className={cx('tf-payment ', 'tf-payment')}>
                                        <p className={cx('text-caption-1')}>Payment:</p>
                                        <ul>
                                            <li>
                                                <img src={Images.visa} alt="payment" />
                                            </li>{' '}
                                            <li>
                                                <img src={Images.masterCard} alt="payment" />
                                            </li>{' '}
                                            <li>
                                                <img src={Images.amex} alt="payment" />
                                            </li>{' '}
                                            <li>
                                                <img src={Images.payPal} alt="payment" />
                                            </li>{' '}
                                            <li>
                                                <img src={Images.expert} alt="payment" />
                                            </li>{' '}
                                            <li>
                                                <img src={Images.discover} alt="payment" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
