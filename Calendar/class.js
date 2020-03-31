class Calendar {
    constructor(calendar) {
        this.calendar = calendar;
        this.today = new Date();
        this.day = this.today.getDate();
        this.month = this.today.getMonth();
        this.year = this.today.getFullYear();
        this.locale = 'en-US';
        this.monthName = new Date(this.year, this.month).toLocaleString(this.locale, {
            month: "long"
        });

        //init
        this.setCurrentMonth();
        this.drawCalendarDates(this.month, this.year);

        prev.onclick = () => this.prevMonth();
        next.onclick = () => this.nextMonth();
    }

    /*
    logic:: getWeekStartDate
     */
    getWeekStartDate = (month = this.month, year = this.year) => {
        const date = new Date(year, month);
        // if month starts on saturday, we need to get another 6 days (-5)
        //from prev month -5, -4, -3, -2, -1, and 0

        const offset = date.getDay() === 0 ? -5 : -date.getDay() + 2;
        return new Date(this.year, this.month, offset);
    }

    /*
    set current date(month year day)
     */
    setCurrentMonth = () => {
        monthEl.textContent = this.monthName;
        yearEl.textContent = this.year;

        const title = document.getElementsByTagName('title')[0];
        title.innerHTML = `${this.day} ${this.monthName}`;
    }

    /*
    drawCalendarDates
     */
    drawCalendarDates = (month = this.month, year = this.year) => {
        const offset = this.getWeekStartDate(month, year);

        for (let i = 0; i < 6; i++) {
            const tr = document.createElement("tr");
            tr.setAttribute("class", "body__row");
            for (
                let j = 0, date = offset; j <= 6; j++, date.setDate(date.getDate() + 1)
            ) {
                const td = document.createElement("td");
                td.setAttribute("class", "body__row__item");

                td.textContent = date.getDate();
                tr.appendChild(td);
            }
            this.calendar.appendChild(tr);
        }
    }

    /*
    prev month dates
     */
    prevMonth = () => {
        const prevMonthDate = new Date(this.year, this.month - 1);
        this.month = prevMonthDate.getMonth();
        this.year = prevMonthDate.getFullYear();
        this.redrawCalendar();
    }

    /*
next month dates
 */
    nextMonth = () => {
        const nextMonthDate = new Date(this.year, this.month + 1)
        this.month = nextMonthDate.getMonth();
        this.year = nextMonthDate.getFullYear();
        this.redrawCalendar();
    }

    /*
    redrawCalendar on click
     */
    redrawCalendar = () => {
        this.monthName = new Date(this.year, this.month).toLocaleString(this.locale, {
            month: "long"
        });

        monthEl.textContent = this.monthName;
        yearEl.textContent = this.year;

        this.calendar.innerHTML = '';
        this.drawCalendarDates();
    }

}

let calendarTag = tbody;
let calendar = new Calendar(calendarTag);