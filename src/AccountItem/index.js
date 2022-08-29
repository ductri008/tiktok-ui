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
                    'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/2ae293fa1416e4c9f4fac3afa8494c8d~c5_100x100.jpeg?x-expires=1661914800&x-signature=wbGuCqX8owmCj2RUFz93aouPH8k%3D'
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
