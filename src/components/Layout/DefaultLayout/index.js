import Header from '../components/Header';
import NavBar from '../components/NavBar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <>
            <div className={cx('wrapper')}>
                <Header />
                <div className={cx('container')}>
                    <NavBar />
                    <div className={cx('content')}>{children}</div>
                </div>
            </div>
        </>
    );
}

export default DefaultLayout;
