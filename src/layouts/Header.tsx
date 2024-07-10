import ButtonField from "../components/ButtonField";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from 'antd';

const Header = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    return (
        <div className="flex-basic-between" style={{ padding: '1.5rem 4rem' }}>
            <div style={{
                fontSize: '40px',
                fontWeight: 600,
                color: pathname.includes('/create-people') ? 'red' : 'yellow'
            }}>Von-Demo-Reactjs
            </div>
            <ButtonField onClick={() => navigate('/create-people')}>Create people</ButtonField>
            <Button type="primary">Button ant</Button>
        </div>
    )
};

export default Header;
