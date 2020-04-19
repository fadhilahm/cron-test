// var cron = require("node-cron");
const { sendEmail } = require("./helpers/axios");

// cron.schedule(
//   "* * * * *",
//   () => {
//     let currentTime = new Date();
//     console.log(`Current Time is ${currentTime}`);
//     let testString = `Current Time is ${currentTime}`;
//     sendEmail.post("/mail", {
//       to: "fadhilahmetra@gmail.com",
//       subject: "Sent to you by cron : " + testString,
//       html: "<p>Lorem ipsum dolor..., <b>vel</b> luctu.</p>",
//       company: "K-temuan Inc",
//       sendername: "K-temuan Inc Customer Support",
//     });
//   },
//   {
//     scheduled: true,
//     // timezone: "Asia/Jakarta",
//   }
// );

let currentTime = new Date();
console.log(`Current Time is ${currentTime}`);
let testString = `Current Time is ${currentTime}`;
sendEmail.post("/mail", {
  to: "fadhilahmetra@gmail.com",
  subject: "Sent to you by cron : " + testString,
  html: "<p>Lorem ipsum dolor..., <b>vel</b> luctu.</p>",
  company: "K-temuan Inc",
  sendername: "K-temuan Inc Customer Support",
});
