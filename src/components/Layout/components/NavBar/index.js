import styles from './NavBar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function NavBar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>Side Bar</h2>
        </aside>
    );
}

export default NavBar;
