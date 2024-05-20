const users = ["Sofia", "Pimenta", "Andre", "Pipa", "Andy", "Flavio", "Fazenda", "Gabs", "Rafa"];

const calendar = document.getElementById("calendar");

const startDate = new Date("2024-06-24");
const endDate = new Date("2024-09-12");
const daysDiff = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

let currentDate = new Date(startDate);

while (currentDate <= endDate) {
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const monthHeader = document.createElement("h2");
    monthHeader.textContent = month;
    monthHeader.classList.add("text-2xl", "text-center", "font-bold", "mb-4");
    calendar.appendChild(monthHeader);

    const monthGrid = document.createElement("div");
    monthGrid.classList.add("grid", "grid-cols-7", "gap-2");
    calendar.appendChild(monthGrid);

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day", "border", "border-gray-300", "p-2", "text-center", "cursor-pointer", "transition", "duration-500", "transform", "hover:scale-105", "hover:bg-gray-200");
        dayElement.dataset.date = currentDate.toISOString().split("T")[0];
        dayElement.textContent = i;
        dayElement.addEventListener("click", markAvailability);

        monthGrid.appendChild(dayElement);
        currentDate.setDate(currentDate.getDate() + 1);
    }
}

function markAvailability(event) {
    const selectedDate = event.target.dataset.date;
    const user = prompt("Qual usuário está ocupado?");
    const reason = prompt("Por que estão ocupados?");

    if (user && reason) {
        const dayElement = event.target;
        const isUserAvailable = !dayElement.classList.contains("bg-red-200");

        if (isUserAvailable) {
            dayElement.classList.remove("bg-green-200");
            dayElement.classList.add("bg-red-200");
        }

        alert(`Usuário ${user} está ocupado em ${selectedDate} devido a ${reason}.`);
    }
}
