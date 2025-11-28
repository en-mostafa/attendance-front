import { DateObject } from "react-multi-date-picker";

export const jalali = (date: string) => {
    const value = new DateObject({
        date: date,
    }).format("YYYY-MM-DD");
    const englishDate = value.replace(/[۰-۹]/g, d => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString());
    return englishDate;
};