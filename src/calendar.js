/**
 * Classe MyCalendar : Un composant de calendrier simple qui affiche les événements au clic dans la console.
 * Peut être personnalisé avec des options : events (liste d'événements), eventClass (style).
 */
class MyCalendar {
  /**
   * Constructeur de MyCalendar
   * @param {string} targetElementId - L'ID de l'élément HTML cible où le calendrier sera injecté.
   * @param {Object} options - Options pour personnaliser le calendrier et ses comportements.
   */
  constructor(targetElementId, options = {}) {
    this.targetElement = document.getElementById(targetElementId);
    this.options = options;
    this.currentDate = new Date();
    this.events = options.events || {};
    this.eventClass = options.eventClass || "event";
    this.initialize();
  }

  /**
   * Génère le calendrier pour le mois de `this.currentDate` et l'injecte dans l'élément cible du DOM.
   */
  generateCalendar() {
    const firstDay = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth(),
      1
    );
    const lastDay = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      0
    );

    // Construction de la structure HTML du calendrier
    let html = `<div id="calendar-container">
                    <div id="calendar-header">
                        <button id="prevMonth">Précédent</button>
                        <h3>${firstDay.toLocaleString("default", {
                          month: "long",
                        })} ${firstDay.getFullYear()}</h3>
                        <button id="nextMonth">Suivant</button>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Lu</th><th>Ma</th><th>Me</th><th>Je</th><th>Ve</th><th>Sa</th><th>Di</th>
                            </tr>
                        </thead>
                        <tbody>`;

    let day = firstDay;
    while (day.getDay() !== 1) {
      day.setDate(day.getDate() - 1);
    }
    let isCurrentMonth = true;
    while (isCurrentMonth) {
      html += "<tr>";
      for (let i = 0; i < 7; i++) {
        if (day.getMonth() === this.currentDate.getMonth()) {
          const eventKey = `${day.getFullYear()}-${String(
            day.getMonth() + 1
          ).padStart(2, "0")}-${String(day.getDate()).padStart(2, "0")}`;
          const hasEvent = this.events[eventKey];
          // Gestion des jours avec ou sans événement
          html += `<td ${
            hasEvent
              ? 'class="' +
                this.eventClass +
                '" data-event-key="' +
                eventKey +
                '"'
              : ""
          }>${day.getDate()}</td>`;
        } else {
          html += "<td></td>";
        }
        day.setDate(day.getDate() + 1);
      }
      html += "</tr>";
      isCurrentMonth = day.getMonth() === this.currentDate.getMonth();
    }

    html += `   </tbody>
                    </table>
                </div>`;
    this.targetElement.innerHTML = html;

    // Attache des gestionnaires d'événements pour les boutons et les jours avec des événements.
    this.attachEventListeners();
  }

  /**
   * Attache des gestionnaires d'événements pour les interactions utilisateur avec le calendrier.
   */
  attachEventListeners() {
    this.targetElement
      .querySelector("#prevMonth")
      .addEventListener("click", () => this.prevMonth());
    this.targetElement
      .querySelector("#nextMonth")
      .addEventListener("click", () => this.nextMonth());
    this.targetElement
      .querySelectorAll("." + this.eventClass)
      .forEach((dayElement) => {
        dayElement.addEventListener("click", (e) =>
          this.showEvent(e.currentTarget.dataset.eventKey)
        );
      });
  }

  /**
   * Affiche les détails de l'événement dans la console.
   * @param {string} eventKey - La clé de l'événement dans l'objet `this.events`.
   */
  showEvent(eventKey) {
    const event = this.events[eventKey];
    if (event) {
      console.log(`Événement : ${event.title}`);
      console.log(`Description : ${event.description}`);
    }
  }

  /**
   * Passe au mois suivant et régénère le calendrier.
   */
  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.generateCalendar();
  }

  /**
   * Passe au mois précédent et régénère le calendrier.
   */
  prevMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.generateCalendar();
  }

  /**
   * Initialisation du calendrier lors de la création de l'instance.
   */
  initialize() {
    this.generateCalendar();
  }
}

export default MyCalendar;
