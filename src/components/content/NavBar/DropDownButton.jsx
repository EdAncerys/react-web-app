import React, { useContext, useState } from 'react';
import { AppContext } from '../../../App';

import colors from '../../../config/colors';

export default function DropDown({
  onClick,
  page,
  title = 'Title',
  color = colors.primary,
}) {
  const { setDropDownHover, setDropDown, mediaQuery } = useContext(AppContext);
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        ...styles.dropDownButton,
        ...{
          backgroundColor: hover ? color : '',
          paddingLeft: mediaQuery ? 20 : '5vw',
          color: hover ? colors.white : colors.primary,
        },
      }}
      onClick={() => {
        onClick();
        setDropDown(false);
      }}
      onMouseOver={() => {
        setHover(!hover);
        setDropDownHover(color);
      }}
      onMouseLeave={() => {
        setHover(!hover);
        setDropDownHover(false);
      }}
    >
      {page ? 'Home' : title}
    </div>
  );
}

const styles = {
  dropDownButton: {
    cursor: 'pointer',
    fontSize: 'inherit',
    fontWeight: 'bold',
    padding: 10,
  },
};
