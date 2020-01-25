import React from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';
import Grid from './Grid';
import { VerticalCenterText } from './Text';
import classNames from 'classnames';
import styles from '../scss/components/Nav.module.scss';

import {
  ReactComponent as CommunityIcon,
} from '../svg/iconmonstr-user-29.svg';
import {
  ReactComponent as IVCheckerIcon,
} from '../svg/iconmonstr-calculator-1.svg';
import {
  ReactComponent as SpeedCheckerIcon,
} from '../svg/iconmonstr-time-19.svg';
import {
  ReactComponent as MenuIcon,
} from '../svg/iconmonstr-menu-1.svg';

const iconSize = 30;
const iconProps = {
  width: iconSize,
  height: iconSize,
};

const NavItem = ({
  children,
  title,
  to,
  curruntPathName,
  closeNav,
  icon: Icon,
}) => {
  const isSamePath = (to === curruntPathName);
  const className = classNames({
    [styles.selected]: isSamePath,
  });
  const RootElement = ({ children }) => isSamePath? (
    <div className={className}>{children}</div>
  ) : (
    <Link to={to} className={className}>{children}</Link>
  );
  return (
    <RootElement>
      <Grid
        column={`${iconSize}px:3`}
        gap="1rem"
        onClick={closeNav}
      >
        <Icon fill={isSamePath? "#df1616" : "#323232"} {...iconProps} />
        <VerticalCenterText>{title}</VerticalCenterText>
      </Grid>
    </RootElement>
  );
};

const Nav = ({ isOpen, onClickClose, isMobile, location }) => {
  const className = classNames(styles.nav, {
    [styles.mobile]: isMobile,
    [styles.open]: isOpen,
  });
  const curruntPathName = location.pathname;
  const navItemParams = {
    curruntPathName,
    closeNav: onClickClose,
  };
  return (
    <nav className={className}>
      <NavCloseButton onClick={onClickClose} />
      <NavItem
        to="/"
        title="커뮤니티"
        icon={CommunityIcon}
        {...navItemParams}
      />
      <NavItem
        to="/iv-checker"
        title="개체값 측정기"
        icon={IVCheckerIcon}
        {...navItemParams}
      />
      <NavItem
        to="/speed-checker"
        title="스피드 추월 계산기"
        icon={SpeedCheckerIcon}
        {...navItemParams}
      />
    </nav>
  );
};

const NavCloseButton = ({ onClick }) => (
  <div className={styles.navCloseButton} onClick={onClick}>
    닫기
  </div>
);

const NavOpenButton = ({ isOpen, isMobile, onClick }) => {
  const className = classNames(styles.navOpenButton, {
    [styles.mobile]: isMobile,
  });
  return (
    <div className={className} onClick={onClick}>
      <MenuIcon />
    </div>
  );
};

export default withRouter(Nav);
export {
  NavOpenButton,
};
