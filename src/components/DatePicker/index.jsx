import {
    Input
} from '@chakra-ui/react';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';

import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';

const DatePickerInput = ({
    value,
    onChange = () => { },
    popperPosition = "auto",
    size = "md",
    width = "100%",
    placeholder = ""
}) => {

    const zeroPad = (value) => Number(value) < 10 ? `0${value}` : value;

    const handleDateChange = (date) => {
        onChange(new Date(`${date.year}/${zeroPad(date.month)}/${zeroPad(date.day)}`));
    }


    const renderCustomInput = ({ ref }) => {
        let displayValue = ""
        if (value instanceof Date) {
            displayValue = `${zeroPad(value.getDate())}/${zeroPad(value.getMonth() + 1)}/${value.getFullYear()}`
        }
        return (
            <Input
                id="DatePicker"
                isReadOnly
                ref={ref}
                size={size}
                width={width}
                zIndex={1}
                placeholder={placeholder}
                value={displayValue}
            />
        )
    }

    let sanitizedValue = null
    if (value instanceof Date) {
        sanitizedValue = {
            year: value.getFullYear(),
            month: value.getMonth() + 1,
            day: value.getDate()
        }
    }

    return (
        <DatePicker
            value={sanitizedValue}
            onChange={handleDateChange}
            renderInput={renderCustomInput}
            shouldHighlightWeekends
            calendarPopperPosition={popperPosition}
        />
    );
}


export default DatePickerInput;