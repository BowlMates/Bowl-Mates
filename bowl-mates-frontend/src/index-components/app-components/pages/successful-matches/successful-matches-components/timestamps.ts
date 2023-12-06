export function getDayMonthYear(date: Date) {
    return date.getDate() + "/" + (date.getMonth() + 1) + "/" + ((date.getFullYear() + "").slice(2,4));
}

export function getClockTime(date: Date) {
    const isNightCheck = date.getHours() - 12 >= 0;
    const standardTimeIfPastNoon = date.getHours() - 12 === 0 ? 12 : date.getHours() - 12;
    const standardTimeIfNotPastNoon = date.getHours();
    const amPm = isNightCheck ? "PM" : "AM";
    const hours = isNightCheck ? standardTimeIfPastNoon : standardTimeIfNotPastNoon;
    return hours + ":" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) + amPm;
}