
import DatePicker, { Calendar, toDateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_en from "react-date-object/locales/persian_en";
import Icon from "react-multi-date-picker/components/icon"
import InputIcon from "react-multi-date-picker/components/input_icon"
import { useState } from "react";
import DateObject from "react-date-object";
import { useEffect } from "react";
const Taghvim = ({value , dateHandleChange }) => {
      return ( 
        <DatePicker 
        render={<InputIcon className="text-white"/>}
        value={value}
        format="MM/DD/YYYY"
        onChange={dateHandleChange}
        calendar={persian}
        locale={persian_en}
      />
     );
}
 
export default Taghvim;
