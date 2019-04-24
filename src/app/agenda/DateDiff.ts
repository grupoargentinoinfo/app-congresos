export class DateDiff {
  days = null;
  hours = null;
  minutes = null;
  seconds = null;
  date1;
  date2;

  constructor(date1, date2) {
    this.date1 = date1;
    this.date2 = date2;
    var data = new DateMeasure(this.date1 - this.date2);
    this.days = data.days;
    this.hours = data.hours;
    this.minutes = data.minutes;
    this.seconds = data.seconds;
  }



  diff(date1, date2) {
    return new DateDiff(date1, date2);
  };
}


export class DateMeasure {
  public days;
  public hours;
  public minutes;
  public seconds;

  constructor(ms)
  {
    this.seconds = Math.floor(ms / 1000);
    this.minutes = Math.floor(this.seconds / 60);
    this.seconds = this.seconds % 60;
    this.hours = Math.floor(this.minutes / 60);
    this.minutes = this.minutes % 60;
    this.days = Math.floor(this.hours / 24);
    this.hours = this.hours % 24;
  }
  
}