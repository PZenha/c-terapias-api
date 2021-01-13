import { createWorker } from 'tesseract.js';
 
const worker = createWorker({
  logger: m => console.log(m)
});
 
(async () => {
  await worker.load();
  await worker.loadLanguage('por');
  await worker.initialize('por');
  const { data: { text } } = await worker.recognize(__dirname + '/pic.png');
  console.log(text);
  await worker.terminate();
})();


export default worker