import { report } from './day1-input';

const avgReport = report.map((_, i) => {
  return report[i] + report[i + 1] + report[i + 2];
});

let count = 0;
for (let i = 1; i < avgReport.length; i++) {
  if (avgReport[i] > avgReport[i - 1]) {
    count += 1;
  }
}

console.log(count);
