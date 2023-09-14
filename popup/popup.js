function load() {
    let currentDate = {
        day: null,
        month: null,
        year: null
    };
    var year = document.getElementById("year");
    let currentYear = new Date().getFullYear();
    for (var i = currentYear; i >= 1900; i--) {
        var option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        year.appendChild(option);
    }
    chrome.storage.local.get("birthdate").then((result) => {
        if(result.birthdate != null || result.birthdate != undefined) {
            currentDate.day = result.birthdate.day;
            currentDate.month = result.birthdate.month;
            currentDate.year = result.birthdate.year;
            let dayElement = document.getElementById("day");
            let monthElement = document.getElementById("month");
            let yearElement = document.getElementById("year");
            if(currentDate.day != null) {
                dayElement.value = currentDate.day;
                monthElement.value = currentDate.month;
                yearElement.value = currentDate.year;
            } else {
                dayElement.value = 1;
                monthElement.value = 1;
                yearElement.value = currentYear;
            }
        }
    });
    document.getElementById("day").addEventListener("change", (event) => changeDay(event.target.value));
    document.getElementById("month").addEventListener("change", (event) => changeMonth(event.target.value));
    document.getElementById("year").addEventListener("change", (event) => changeYear(event.target.value));
    document.getElementById("submit").addEventListener("click", save);
}
document.addEventListener("DOMContentLoaded", load);
function changeDay(day) {
    date.day = day;
}
function changeMonth(month) {
    date.month = month;
}
function changeYear(year) {
    date.year = year;
}
function save() {
    chrome.storage.local.set({birthdate: date}).then(() => {
        window.close();
    });
    
}
let date = {
    day: 1,
    month: 5,
    year: 1900
};