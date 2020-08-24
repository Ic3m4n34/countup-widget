import { CountUp } from "countup.js";

const widgetContainer = document.querySelector('#countup-widget');
const count = widgetContainer.getAttribute('data-google-count');

const options = {
  startVal: 10,
  separator: "."
};
let demo = new CountUp('countup-widget', count, options);
if (!demo.error) {
  demo.start();
} else {
  console.error(demo.error);
}