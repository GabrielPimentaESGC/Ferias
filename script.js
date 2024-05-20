const users = ["Sofia", "Pimenta", "Andre", "Pipa", "Andy", "Flavio", "Fazenda", "Gabs", "Rafa"];

const calendar = document.getElementById("calendar");

const startDate = new Date("2024-06-24");
const endDate = new Date("2024-09-12");
const daysDiff = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

for (let i = 0; i < daysDiff; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);
    
    const dayElement = document.createElement("div");
    dayElement.classList.add("day", "border", "border-gray-300", "p-2", "text-center", "cursor-pointer");
    dayElement.dataset.date = currentDate.toISOString().split("T")[0];
    dayElement.textContent = currentDate.getDate();
    dayElement.addEventListener("click", markAvailability);
    
    calendar.appendChild(dayElement);
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
