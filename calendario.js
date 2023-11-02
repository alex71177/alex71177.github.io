

document.addEventListener("DOMContentLoaded", function () {
    const currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    const prevMonthButton = document.getElementById("prevMonth");
    const nextMonthButton = document.getElementById("nextMonth");
    const currentMonthDisplay = document.getElementById("currentMonth");
    const daysContainer = document.querySelector(".days");
    const noteInput = document.getElementById("noteInput");
    const addNoteButton = document.getElementById("addNote");
    const noteList = document.getElementById("noteList");

    function updateCalendar() {
        currentMonthDisplay.textContent = new Date(currentYear, currentMonth, 1).toLocaleDateString("es-ES", { year: "numeric", month: "long" });

        // Limpia el contenido anterior del calendario
        daysContainer.innerHTML = "";

        const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
        const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        for (let i = 0; i < firstDayOfMonth; i++) {
            const emptyDay = document.createElement("div");
            emptyDay.classList.add("day", "empty");
            daysContainer.appendChild(emptyDay);
        }

        for (let day = 1; day <= lastDayOfMonth; day++) {
            const dayElement = document.createElement("div");
            dayElement.classList.add("day");
            dayElement.textContent = day;

            dayElement.addEventListener("click", () => {
                // Muestra las notas para el día seleccionado
                const note = noteInput.value.trim();
                if (note !== "") {
                    const noteItem = document.createElement("li");
                    noteItem.textContent = `${currentMonth + 1}/${day}/${currentYear}: ${note}`;
                    noteList.appendChild(noteItem);
                }
            });

            daysContainer.appendChild(dayElement);
        }
    }

    prevMonthButton.addEventListener("click", () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        updateCalendar();
    });

    nextMonthButton.addEventListener("click", () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        updateCalendar();
    });

    addNoteButton.addEventListener("click", () => {
        const note = noteInput.value.trim();
        if (note !== "") {
            const noteItem = document.createElement("li");
            noteItem.textContent = `${currentMonth + 1}/${currentDate.getDate()}/${currentYear}: ${note}`;
            noteList.appendChild(noteItem);
            noteInput.value = "";
        }
    });

    updateCalendar();
});
