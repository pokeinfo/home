import React from 'react';
import classNames from 'classnames';

const DynamaxButton = ({
  dynamax,
  onChange,
}) => {
  function clickEvent() {
    dynamax = !dynamax;
    onChange(dynamax);
  }
  return (
    <div
      id="dynamax-button"
      className={classNames({ dynamax })}
      onClick={clickEvent}
    >
      다이맥스 : {dynamax? "" : "비"}활성화
    </div>
  );
};

export default DynamaxButton;
