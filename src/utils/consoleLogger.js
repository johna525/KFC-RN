const logStyles = [
  'background: linear-gradient(#D33106, #571402)',
  'border: 1px solid #3E0E02',
  'color: white',
  'display: block',
  'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)',
  'line-height: 30px',
  'text-align: center',
  'font-weight: bold',
  'padding: 5px'
].join(';');
const log = (msg, logTitle = '') => {
  console.log(logTitle, msg);
  console.group(logTitle), // eslint-disable-line
  console.trace(`%c ${msg}`, logStyles), // eslint-disable-line no-console
  console.groupEnd(); // eslint-disable-line no-console
};

export default log;
