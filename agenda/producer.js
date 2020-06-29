const agenda = require("../config/agenda");

class Producer {
  //job once func
  runOnceOnSchedule(scheduleTime, jobName, jobParams) {
    agenda
      .schedule(scheduleTime, jobName, jobParams)
      .then(() =>
        console.log(
          "The messages is run once %s %s - %s",
          scheduleTime,
          jobName,
          jobParams
        )
      )
      .catch((err) => console.log(err));
  }

  //repeat job func
  runEverySchedule(scheduleTime, jobName, jobParams) {
    agenda
      .every(scheduleTime, jobName, jobParams)
      .then(() => console.log("Every schedule"))
      .catch((err) => console.log(err));
  }

  //cancel and readd
  reAddSchedule(scheduleTime, jobName) {
    agenda
      .cancel({ name: jobName })
      .then(() => {
        console.log("Delete schedule");
        this.runEverySchedule(scheduleTime, jobName);
      })
      .catch((err) => console.log(err));
  }
}
module.exports = Producer;
