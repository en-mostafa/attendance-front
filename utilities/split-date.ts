
export const splitDate = (date: string) => {
    if (!date) return { day: "", month: "" };
    const [year, month, day] = date.split("-");
    return { day, month };
}