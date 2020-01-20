import React from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';
import Grid from './Grid';
import { VerticalCenterText } from './Text';
import classNames from 'classnames';
import styles from '../css/components/Nav.module.scss';

import {
  ReactComponent as CommunityIcon,
} from '../svg/iconmonstr-user-29.svg';
import {
  ReactComponent as IVCheckerIcon,
} from '../svg/iconmonstr-calculator-1.svg';
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
  icon,
}) => {
  const isSamePath = (to === curruntPathName);
  const RootElement = ({ children }) => isSamePath? (
    <div>{children}</div>
  ) : (
    <Link to={to}>{children}</Link>
  );
  const Icon = icon;
  return (
    <RootElement>
      <Grid column={`${iconSize}px:3`} gap="1rem" onClick={closeNav}>
        <Icon fill={isSamePath? "#df1616" : "#323232"} {...iconProps} />
        <VerticalCenterText>{title}</VerticalCenterText>
      </Grid>
    </RootElement>
  );
}

const Nav = ({ isOpen, onClickClose, isMobile, location }) => {
  const className = classNames(styles.nav, {
    [styles.mobile]: isMobile,
    [styles.open]: isOpen,
  });
  const curruntPathName = location.pathname;
  const closeNav = () => onClickClose(false);
  return (
    <nav className={className}>
      <NavCloseButton onClick={closeNav} />
      <NavItem
        to="/"
        title="커뮤니티"
        icon={CommunityIcon}
        curruntPathName={curruntPathName}
        closeNav={closeNav}
      />
      <NavItem
        to="/iv-checker"
        title="개체값 측정기"
        icon={IVCheckerIcon}
        curruntPathName={curruntPathName}
        closeNav={closeNav}
      />
    </nav>
  );
};

const NavCloseButton = ({ onClick }) => {
  const className = classNames(styles.navCloseButton, {

  });
  return (
    <div className={className} onClick={onClick}>닫기</div>
  );
};

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
