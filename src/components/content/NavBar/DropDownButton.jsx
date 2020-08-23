import React, { useContext, useState } from 'react';
import { AppContext } from '../../../App';

import colors from '../../../config/colors';

export default function DropDown({
  onClick,
  page,
  title = 'Title',
  color = colors.primary,
}) {
  const { setDropDownHover } = useContext(AppContext);
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        ...styles.dropDownButton,
        ...{
          backgroundColor: hover ? color : '',
          color: hover ? colors.white : colors.primary,
        },
      }}
      onClick={onClick}
      onMouseOver={() => {
        setHover(!hover);
        setDropDownHover(colors.primary);
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
    paddingLeft: 20,
  },
};
