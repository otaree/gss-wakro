const zeroPad = num => num < 10 ? `0${num}` : `${num}`;
export const localFormattedDate = (date = new Date()) => `${zeroPad(date.getDate())}/${zeroPad(date.getMonth() + 1)}/${date.getFullYear()}`
export const localFormattedDateTime = (date = new Date()) => `${zeroPad(date.getDate())}/${zeroPad(date.getMonth() + 1)}/${date.getFullYear()} ${zeroPad(date.getHours())}:${zeroPad(date.getMinutes())}:${zeroPad(date.getSeconds())}`;
export const isoFormattedDate = (date = new Date()) => `${date.getFullYear()}-${zeroPad(date.getMonth() + 1)}-${zeroPad(date.getDate())}`;