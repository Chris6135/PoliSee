const agenda = require("../config/agenda");

class Consumer {
  constructor() {
    this.run().catch((error) => {
      console.error(error);
    });
  }

  async run() {
    try {
      agenda.define("MAILER", (job, done) => {
        new SequenceMessageWorkFlow(job.attrs.data);
        done();
      });

      agenda.define("JOB_PROCESS_FETCH_RSS_AUTOPOSTS", (job, done) => {
        new FetchAutoPostWorkFlow(job.attrs);
        done();
      });

      await new Promise((resolve) => agenda.once("ready", resolve));
      agenda.start();
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = Consumer;
