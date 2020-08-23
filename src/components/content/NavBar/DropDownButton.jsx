import React, { useContext, useState } from 'react';
import { AppContext } from '../../../App';

import colors from '../../../config/colors';

export default function DropDown({ onClick, page }) {
  const { setDropDownHover } = useContext(AppContext);
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        ...styles.dropDownButton,
        ...{
          backgroundColor: hover ? colors.primary : '',
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
      {page ? 'Home' : 'TickTackToe'}
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
