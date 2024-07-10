
import { ReactNode } from 'react';

type Props = {
  loading?: boolean;
  children?: ReactNode;
  onClick?: () => void;
}

const ButtonField = ({
  loading,
  children,
  onClick,
}: Props) => {
  return (
    <button className="btn-main" onClick={onClick && onClick}>
      {!loading ? children : <button style={{ display: 'flex', alignItems: 'center', columnGap: '.5rem', color: '#fff'}}>
          {children}
        </button>
      }
    </button>
  )
};

export default ButtonField;
