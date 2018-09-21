
var moment = require('moment');


export default class EventDate {
  constructor(year, monthIndex, day, hour, minute) {
    this.date = new Date(year, monthIndex, day, hour, minute);  // todo: remove
    this.moment = moment.utc([year, monthIndex, day, hour, minute]);
  }

  get monthKey(){
      var yearNum = this.date.getFullYear()-2000;
      return (yearNum*12) + this.date.getMonth();
  }

  get weekKey(){
      var weekNum = this.moment.isoWeek();
      console.log('weekNum:');
      console.log(weekNum);
      return (this.date.getMonth()*100) + weekNum;
  }

  get weekStartStr(){
    let dt = this.moment.clone().startOf('isoweek');
    return dt.format('dddd, DD MMMM')
  }

  get monthYear(){
      var month = this.date.toLocaleString('en-US', { month: "long"});
      return month + " " + (this.date.getFullYear().toString());
  }
}
