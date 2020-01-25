import React from 'react';
import classNames from 'classnames';
import styles from '../../scss/components/Pokemon/DynamaxButton.module.scss';

const DynamaxButton = ({
  dynamax,
  onChange,
}) => {
  const className = classNames(
    styles.dynamaxButton,
    {
      [styles.dynamax]: dynamax,
    },
  );
  return (
    <div
      className={className}
      onClick={() => onChange(!dynamax)}
    >
      다이맥스 : {dynamax? "" : "비"}활성화
    </div>
  );
};

export default DynamaxButton;
