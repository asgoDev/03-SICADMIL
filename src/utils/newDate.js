class MyDate {
  constructor(stringDate) {
    this.date = stringDate ? new Date(stringDate) : null;
  }

  today() {
    return new Date().toLocaleDateString("es-ES");
  }

  todayShort() {
    return new Date()
      .toLocaleDateString("es-ES", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
      .replace(/ /g, "");
  }

  toLong() {
    if(!this.date) return ''
    return this.date.toLocaleDateString("es-ES");
  }

  toShort() {
    if(!this.date) return ''
    return this.date
      .toLocaleDateString("es-ES", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
      .replace(/ /g, "");
  }
}

export const newDate = (someDate) => new MyDate(someDate);
