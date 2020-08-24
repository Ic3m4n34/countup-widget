import { CountUp } from "countup.js";

const widgetContainer = document.querySelector('#countup-widget');
const count = widgetContainer.getAttribute('data-google-count');
const duration = widgetContainer.getAttribute('data-duration');

widgetContainer.style = 'font-family: \'Questrial\',  sans-serif; font-size: 31px; color: red;';

const options = {
  startVal: 10,
  separator: '.',
  duration: duration,
};
let demo = new CountUp('countup-widget', count, options);
if (!demo.error) {
  demo.start();
} else {
  console.error(demo.error);
}