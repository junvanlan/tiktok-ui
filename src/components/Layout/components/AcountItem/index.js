import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AcountItem.module.scss';

const cx = classNames.bind(styles);

function AcountItem() {
  return (
    <div className={cx('wapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4fd39dea816e0bbe3b834012d1963a7c~c5_300x300.webp?x-expires=1658739600&x-signature=acjhALmE3PNyFG2RJYmGdAvzQcw%3D"
        alt="Hoaaa"
      />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx('checked')} icon={faCheckCircle} />
        </p>
        <span className={cx('username')}>nguyenvan.a</span>
      </div>
    </div>
  );
}

export default AcountItem;
