// Default configuration
const defaultConfig = {
  calendar_title: "Calendario de Conciertos",
  company_name: "Viajes Redondos a Conciertos",
  background_color: "#4c1d95",
  accent_color: "#8b5cf6",
  text_color: "#ffffff",
  surface_color: "#1e1b4b",
  secondary_color: "#ec4899",
  font_family: "Montserrat",
  font_size: 16,
};

// Concert events data with SVG logos
const concertEvents = [
  {
    id: 1,
    artist: "Pulp",
    tour: "Tour 2026",
    city: "Palacio de los Deportes, CDMX",
    date: "2 de Junio 2026",
    dates: [ "2 de Junio 2026"],
    schedules: [ "2:00 PM"],
    dateObj: new Date(2026, 5, 2),
    price: 629,
    originalPrice: 653,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 7,
    logo: `<img src="./logos/pulp.png" class="w-full h-full object-contain" />`,
  },
  {
    id: 2,
    artist: "Monsta X",
    tour: "Tour 2026",
    city: "Auditorio Nacional, CDMX",
    date: "4 de Junio, 2026",
    dateObj: new Date(2026, 5, 4),
    price: 629,
    originalPrice: 653,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 12,
    logo: `<img src="./logos/monstax.png" class="w-full h-full object-contain" />`,
  },
  {
    id: 3,
    artist: "TK from Ling tosite sigure ",
    tour: "Faanmeting 2026",
    city: "La maraka, CDMX",
    date: "6 de Junio, 2026",
    dateObj: new Date(2026, 5, 6),
    price: 629,
    originalPrice: 653,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 5,
    logo: `<img src="./logos/tk.png" class="w-full h-full object-contain" />`,
  },
  {
    id: 4,
    artist: "Milo J",
    tour: " Tour 2026",
    city: "Palacio de los Deportes, CDMX",
    date: "6 de Junio 2026",
    dateObj: new Date(2026, 5, 6),
    price: 629,
    originalPrice: 653,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 3,
    logo: `<img src="./logos/miloj.png" class="w-full h-full object-contain" />`,
  },
  {
    id: 5,
    artist: "The Rose",
    tour: " Tour 2026",
    city: "ARENA CDMX, CDMX",
    date: "17 de Junio 2026",
    dateObj: new Date(2026, 5, 17),
    price: 629,
    originalPrice: 653,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 8,
    logo: `<img src="./logos/therose.png" class="w-full h-full object-contain" />`,
  },
  {
    id: 6,
    artist: "Zayn",
    tour: "Tour 2026",
    city: "Estadio GNP, CDMX",
    date: "20 de Junio 2026",
    dateObj: new Date(2026, 5, 20),
    price: 629,
    originalPrice: 653,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 15,
    logo: `<img src="./logos/zayn.png" class="w-full h-full object-contain" />`,
  },
  {
    id: 6,
    artist: "Tigres del Norte",
    tour: "Tour 2026",
    city: "Estadio GNP, CDMX",
    date: "27 de Junio 2026",
    dateObj: new Date(2026, 5, 27),
    price: 629,
    originalPrice: 653,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 15,
    logo: `<img src="./logos/tigres.png" class="w-full h-full object-contain" />`,
  },
  {
    id: 7,
    artist: " Asian Kung-Fu Generation   ",
    tour: "Tour 2026",
    city: "Pepsi Center, CDMX",
    date: "28 de Junio 2026",
    dateObj: new Date(2026, 5, 28),
    price: 629,
    originalPrice: 653,
    includes: [
      "Viaje redondo",
      "Bebida y Snack",
      "Coordinador de viaje",
      "Seguro de viaje",
      "Gafete Conmemorativo",
    ],
    spots: 15,
    logo: `<img src="./logos/asian.png" class="w-full h-full object-contain" />`,
  },
  
];

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const monthNames = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

let currentEventData = null;
const WHATSAPP_NUMBER = "522225485659"; // Cambia este número por el tuyo

function getEventsForDate(year, month, day) {
  return concertEvents.filter((event) => {
    const eventDate = event.dateObj;
    return (
      eventDate.getFullYear() === year &&
      eventDate.getMonth() === month &&
      eventDate.getDate() === day
    );
  });
}

function renderCalendar() {
  const calendarGrid = document.getElementById("calendar-grid");
  const currentMonthEl = document.getElementById("current-month");

  currentMonthEl.textContent = `${monthNames[currentMonth]} ${currentYear}`;

  calendarGrid.innerHTML = "";

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

  // Previous month days
  for (let i = firstDay - 1; i >= 0; i--) {
    const dayNum = daysInPrevMonth - i;
    const dayEl = createDayElement(dayNum, true, []);
    calendarGrid.appendChild(dayEl);
  }

  // Current month days
  for (let day = 1; day <= daysInMonth; day++) {
    const events = getEventsForDate(currentYear, currentMonth, day);
    const isToday =
      day === currentDate.getDate() &&
      currentMonth === currentDate.getMonth() &&
      currentYear === currentDate.getFullYear();
    const dayEl = createDayElement(day, false, events, isToday);
    calendarGrid.appendChild(dayEl);
  }

  // Next month days
  const totalCells = calendarGrid.children.length;
  const remainingCells = 42 - totalCells;
  for (let i = 1; i <= remainingCells; i++) {
    const dayEl = createDayElement(i, true, []);
    calendarGrid.appendChild(dayEl);
  }
}

function createDayElement(day, isOtherMonth, events, isToday = false) {
  const dayEl = document.createElement("div");
  dayEl.className = `min-h-[110px] rounded-xl p-2 transition-all ${
    isOtherMonth
      ? "bg-slate-900/20 text-slate-700"
      : events.length > 0
      ? "bg-gradient-to-br from-purple-900/60 to-slate-900/80 border-2 border-purple-500/50 event-cell cursor-pointer hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/30"
      : "bg-slate-900/40 text-slate-500 border border-slate-800"
  }`;

  const dayNumber = document.createElement("div");
  dayNumber.className = `text-sm font-bold mb-2 ${
    isToday
      ? "w-7 h-7 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center shadow-lg"
      : ""
  }`;
  dayNumber.textContent = day;
  dayEl.appendChild(dayNumber);

  if (events.length > 0 && !isOtherMonth) {
    events.forEach((event) => {
      const eventContainer = document.createElement("div");
      eventContainer.className = "flex flex-col items-center gap-1";

      const logoContainer = document.createElement("div");
      logoContainer.className =
        "w-20 h-20 rounded-xl shadow-lg flex items-center justify-center event-indicator overflow-hidden";
      logoContainer.innerHTML = event.logo;

      const eventTitle = document.createElement("p");
      eventTitle.className =
        "text-xs text-purple-300 font-bold text-center truncate w-full";
      eventTitle.textContent = event.artist;

      eventContainer.appendChild(logoContainer);
      eventContainer.appendChild(eventTitle);
      dayEl.appendChild(eventContainer);

      dayEl.addEventListener("click", () => openEventModal(event));
    });
  }

  return dayEl;
}

function openEventModal(event) {
  currentEventData = event;
  const modal = document.getElementById("event-modal");
  const modalImage = document.getElementById("modal-image");
  const modalArtist = document.getElementById("modal-artist");
  const modalTour = document.getElementById("modal-tour");
  const modalCity = document.getElementById("modal-city");
  const modalDate = document.getElementById("modal-date");
  const modalPrice = document.getElementById("modal-price");
  const modalOriginalPrice = document.getElementById("modal-original-price");
  const modalSpots = document.getElementById("modal-spots");
  const modalIncludes = document.getElementById("modal-includes");
  const discountBadge = document.getElementById("discount-badge");

  modalImage.innerHTML = event.logo;
  modalArtist.textContent = event.artist;
  modalTour.textContent = event.tour;
  modalCity.textContent = event.city;
  modalDate.textContent = event.date;
  modalPrice.textContent = `$${event.price}`;
  modalOriginalPrice.textContent = `$${event.originalPrice}`;
  modalSpots.textContent = event.spots;

  if (event.originalPrice > event.price) {
    const discount = Math.round(
      ((event.originalPrice - event.price) / event.originalPrice) * 100
    );
    discountBadge.textContent = `-${discount}%`;
    discountBadge.classList.remove("hidden");
  } else {
    discountBadge.classList.add("hidden");
  }

  modalIncludes.innerHTML = "";
  event.includes.forEach((item) => {
    const includeItem = document.createElement("div");
    includeItem.className = "flex items-start gap-2 text-sm text-slate-200";
    includeItem.innerHTML = `
          <svg class="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
          </svg>
          <span>${item}</span>
        `;
    modalIncludes.appendChild(includeItem);
  });

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeEventModal() {
  const modal = document.getElementById("event-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

function openReservationModal() {
  if (!currentEventData) return;

  const reservationModal = document.getElementById("reservation-modal");
  const reservationEventTitle = document.getElementById(
    "reservation-event-title"
  );

  reservationEventTitle.textContent = `${currentEventData.artist} - ${currentEventData.date}`;

  generatePassengerForms(1);

  reservationModal.classList.remove("hidden");
  reservationModal.classList.add("flex");
}

function closeReservationModal() {
  const modal = document.getElementById("reservation-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

function generatePassengerForms(numPassengers) {
  const container = document.getElementById("passengers-container");
  container.innerHTML = "";

  for (let i = 1; i <= numPassengers; i++) {
    const passengerForm = document.createElement("div");
    passengerForm.className =
      "bg-slate-800/50 border border-purple-500/20 rounded-2xl p-5 mb-4";
    passengerForm.innerHTML = `
          <h4 class="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
            Pasajero ${i}
          </h4>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label for="nombre-${i}" class="block text-purple-300 text-sm font-semibold mb-2">Nombre Completo</label>
              <input 
                type="text" 
                id="nombre-${i}" 
                name="nombre-${i}"
                required
                class="w-full bg-slate-900 border border-purple-500/30 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Juan Pérez"
              >
            </div>
            
            <div>
              <label for="edad-${i}" class="block text-purple-300 text-sm font-semibold mb-2">Edad</label>
              <input 
                type="number" 
                id="edad-${i}" 
                name="edad-${i}"
                required
                min="1"
                max="120"
                class="w-full bg-slate-900 border border-purple-500/30 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="25"
              >
            </div>
            
            <div class="md:col-span-2">
              <label for="telefono-${i}" class="block text-purple-300 text-sm font-semibold mb-2">Número de Teléfono</label>
              <input 
                type="tel" 
                id="telefono-${i}" 
                name="telefono-${i}"
                required
                class="w-full bg-slate-900 border border-purple-500/30 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="5512345678"
              >
            </div>
          </div>
        `;
    container.appendChild(passengerForm);
  }
}

function collectFormData() {
  const numPassengers = parseInt(
    document.getElementById("num-passengers").value
  );
  const passengers = [];

  for (let i = 1; i <= numPassengers; i++) {
    const nombre = document.getElementById(`nombre-${i}`).value.trim();
    const edad = document.getElementById(`edad-${i}`).value.trim();
    const telefono = document.getElementById(`telefono-${i}`).value.trim();

    if (!nombre || !edad || !telefono) {
      return null;
    }

    passengers.push({ nombre, edad, telefono });
  }

  return passengers;
}

function sendToWhatsApp() {
  const passengers = collectFormData();

  if (!passengers) {
    // Show inline error message
    const sendButton = document.getElementById("send-whatsapp");
    const originalText = sendButton.innerHTML;
    sendButton.innerHTML =
      '<span class="text-red-200">⚠️ Por favor completa todos los campos</span>';
    sendButton.classList.add("bg-red-600");

    setTimeout(() => {
      sendButton.innerHTML = originalText;
      sendButton.classList.remove("bg-red-600");
    }, 3000);
    return;
  }

  let message = `🎵 *RESERVA DE VIAJE A CONCIERTO* 🎵\n\n`;
  message += `🎤 *Evento:* ${currentEventData.artist}\n`;
  message += `📍 *Lugar:* ${currentEventData.city}\n`;
  message += `📅 *Fecha:* ${currentEventData.date}\n`;
  message += `💵 *Precio:* $${currentEventData.price} por persona\n`;
  message += `👥 *Lugares:* ${passengers.length}\n`;
  message += `💰 *Total:* $${currentEventData.price * passengers.length}\n\n`;

  message += `👤 *DATOS DE PASAJEROS:*\n\n`;

  passengers.forEach((passenger, index) => {
    message += `*Pasajero ${index + 1}:*\n`;
    message += `Nombre: ${passenger.nombre}\n`;
    message += `Edad: ${passenger.edad} años\n`;
    message += `Teléfono: ${passenger.telefono}\n\n`;
  });

  message += `✅ *El paquete incluye:*\n`;
  currentEventData.includes.forEach((item) => {
    message += `• ${item}\n`;
  });

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");

  closeReservationModal();
  closeEventModal();
}

// Event listeners
document.getElementById("prev-month").addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
});

document.getElementById("next-month").addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar();
});

document
  .getElementById("close-modal")
  .addEventListener("click", closeEventModal);
document.getElementById("event-modal").addEventListener("click", (e) => {
  if (e.target.id === "event-modal") closeEventModal();
});

document
  .getElementById("show-reservation-form")
  .addEventListener("click", () => {
    closeEventModal();
    openReservationModal();
  });

document
  .getElementById("close-reservation")
  .addEventListener("click", closeReservationModal);
document.getElementById("reservation-modal").addEventListener("click", (e) => {
  if (e.target.id === "reservation-modal") closeReservationModal();
});

document.getElementById("num-passengers").addEventListener("change", (e) => {
  generatePassengerForms(parseInt(e.target.value));
});

document.getElementById("send-whatsapp").addEventListener("click", (e) => {
  e.preventDefault();
  sendToWhatsApp();
});

// Element SDK initialization
async function onConfigChange(config) {
  const calendarTitle = document.getElementById("calendar-title");
  const companyName = document.getElementById("company-name");

  if (calendarTitle) {
    calendarTitle.textContent =
      config.calendar_title || defaultConfig.calendar_title;
  }
  if (companyName) {
    companyName.textContent = config.company_name || defaultConfig.company_name;
  }
}

function mapToCapabilities(config) {
  return {
    recolorables: [],
    borderables: [],
    fontEditable: undefined,
    fontSizeable: undefined,
  };
}

function mapToEditPanelValues(config) {
  return new Map([
    ["calendar_title", config.calendar_title || defaultConfig.calendar_title],
    ["company_name", config.company_name || defaultConfig.company_name],
  ]);
}

// Initialize
if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities,
    mapToEditPanelValues,
  });
}

renderCalendar();
