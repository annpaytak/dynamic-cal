const monthel = document.getElementById('monthEl');
const yearel = document.getElementById('yearEl');

const today = new Date();
const day = new Date().getDate();
let month = today.getMonth();
let year = today.getFullYear();

const locale = navigator.language;
const monthName = new Date(year, month).toLocaleString(locale, { month: "long" });


const getWeekStartDate = (month, year)=> {
    const date = new Date(year, month);

    // if month starts on saturday, we need to get another 6 days (-5)
    // from prev month: -5, -4, -3, -2, -1 and 0
    const offset = date.getDay() === 0 ? -5 : -date.getDay() + 2;
    return new Date(year, month, offset);
}

const generateCalendarDates = () => {
    const offsetDate = getWeekStartDate(month, year);

    for (let i = 0; i < 6; i++) {
        const tr = document.createElement('tr')
        tr.setAttribute('class', 'body__row')
        for (
            let j = 0, date = offsetDate;
            j <= 6;
            j++, date.setDate(date.getDate() + 1)
        ){
            const td = document.createElement('td')

            td.setAttribute('class', 'body__row__item')

            //todo:: stylize prev month dates and today date

            // if (date.getMonth() !== month) {
            //     td.classList.add("body__row__item--disabled");
            // }
            td.textContent = date.getDate();
            tr.appendChild(td);

        }
        tbody.appendChild(tr)
    }

    // tbody.onmousemove = () => {
    //     const element = event.target;
    //
    //     //todo:: do not highlight days from not this month
    //
    //     if (element.nodeName === "TD") {
    //         [...calendar.querySelectorAll(".body__row__item--hover")].forEach(day =>
    //             day.classList.remove("body__row__item--hover")
    //         );
    //         element.classList.add("body__row__item--hover");
    //     }
    // };

}

const setCurrentMonth = () => {
    monthel.textContent = monthName;
    yearel.textContent = year;

    const title = document.getElementsByTagName("title")[0];
    title.innerHTML = `${day} ${monthName}`;
}

const prev = () => {
    const prevMonthDate = new Date(year, month - 1);
    month = prevMonthDate.getMonth();
    year = prevMonthDate.getFullYear();

    redrawCalendar();
}

const next = () => {
    const nextMonthDate = new Date(year, month + 1);
    month = nextMonthDate.getMonth();
    year = nextMonthDate.getFullYear();

    redrawCalendar();
}

const redrawCalendar = () => {
    monthel.textContent = monthName;
    yearel.textContent = year;

    tbody.innerHTML = '';
    generateCalendarDates();
}

const init = () => {
    setCurrentMonth();
    generateCalendarDates();
}

init();
