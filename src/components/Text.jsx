import React from 'react';
import classNames from 'classnames';
import styles from '../css/components/Text.module.scss';

const Text = ({...rest}) => <p {...rest} />;

const CenteredText = ({
  className,
  ...rest
}) => {
  rest.className = classNames(className, 'center');
  return <Text {...rest} />;
}

const VerticalCenterText = ({
  className,
  ...rest
}) => {
  rest.className = classNames(className, styles.verticalCenter);
  return <Text {...rest} />;
}

export default Text;
export {
  CenteredText,
  VerticalCenterText,
};
