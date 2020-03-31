/*
constants
 */
const today = new Date();
const day = today.getDate();
let month = today.getMonth();//02
let year = today.getFullYear();
const locale = 'en-US'//navigator.language;
const monthName = new Date(year, month).toLocaleString(locale, {month: "long"});

/*
logic:: getWeekStartDate
 */
const getWeekStartDate = (month, year) => {
    const date = new Date(year, month);
    console.log('date', date);
    // if month starts on saturday, we need to get another 6 days (-5)
    //from prev month -5, -4, -3, -2, -1, and 0

    const offset = date.getDay() === 0 ? -5 : -date.getDay() + 2;
    console.log('offset', offset);
    console.log('weekStartDate', new Date(year, month, offset));
    return new Date(year, month, offset);//24
}



/*
set current date(month year day)
 */
const setCurrentMonth = () => {
    monthEl.textContent = monthName;
    yearEl.textContent = year;

    const title = document.getElementsByTagName('title')[0];
    title.innerHTML = `${day} ${monthName}`;
}


/*
drawCalendarDates
 */
const drawCalendarDates = () => {
    const offset = getWeekStartDate(month, year);
    console.log(offset);

    for (let i = 0; i < 6; i++){
        const tr = document.createElement("tr");
        tr.setAttribute("class", "body__row");
        for (
            let j = 0, date=offset; j <= 6;
            j++, date.setDate(date.getDate()+1)
        ){
            const td = document.createElement("td");
            td.setAttribute("class", "body__row__item");

            td.textContent = date.getDate();
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    //todo: select 

}

/*
prev month dates
 */
const prevMonth = () => {
    const prevMonthDate = new Date(year, month-1);
    month = prevMonthDate.getMonth();
    year = prevMonthDate.getFullYear();
    redrawCalendar();
}

/*
next month dates
 */
const nextMonth = () => {
    const nextMonthDate = new Date(year, month+1)
    month = nextMonthDate.getMonth();
    year = nextMonthDate.getFullYear();
    redrawCalendar();
}

/*
redrawCalendar on click
 */
const redrawCalendar = () => {
    const monthName = new Date(year, month).toLocaleString(locale, {month: "long"});

    monthEl.textContent = monthName;
    yearEl.textContent = year;

    tbody.innerHTML = '';
    drawCalendarDates();
}

/*
init
 */
const init = () => {
    setCurrentMonth();
    drawCalendarDates();
}
init();



