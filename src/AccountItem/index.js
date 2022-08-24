import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import className from 'classnames/bind';
import styles from '~/AccountItem/AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = className.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src={
                    'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/f383f6f9ba4d580f21a34c58bd86afcf.jpeg?x-expires=1661504400&x-signature=HL6%2FwE3vn9yeWLpmHENCgGXthtE%3D'
                }
                alt=""
            />
            <div className={cx('info')}>
                <span className={cx('username')}>
                    cryptokidvn <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </span>
                <p className={cx('name')}> Cryptokid Việt Nam</p>
            </div>
        </div>
    );
}

export default AccountItem;
