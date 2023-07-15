import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
const { dispatch } = useContext(AppContext);
const changeCurrency = (val) => {
    dispatch ({
        type: 'CHG_CURRENCY',
        payload: val,
    });
};

return (
    <div className="alert alert-secondary" style={{backgroundColor:"lime"}}>
        <label style={{backgroundColor:"lime", color:"white", marginLeft:"0.5em"}}>Currency
        <select name="currency" id="currency" style={{backgroundColor:"lime", color:"white", marginLeft:"0.5rem"}}onChange={event => changeCurrency(event.target.value)}>
            <option value="$">($ Dollar)</option>
            <option value="£">(£ Pound)</option>
            <option value="€">(€ Euro)</option>
            <option value="₹">(₹ Ruppee)</option>

        </select>
    </label>
    </div>
    );

}

export default Currency;