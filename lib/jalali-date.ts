import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

export const jalali = (date: string) => {
    return new DateObject({
        date: date,
        calendar: persian,
        locale: persian_fa
    }).format("YYYY-MM-DD")
};