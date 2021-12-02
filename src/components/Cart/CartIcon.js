import Icon from '@mdi/react'
import { mdiCartVariant  } from '@mdi/js'

const CartIcon = () => {
    return (
        <Icon path={mdiCartVariant }
          title="Card"
          size={1}
          horizontal
          vertical
          rotate={90}
          color="white"
          spin/>
      )
};

export default CartIcon;