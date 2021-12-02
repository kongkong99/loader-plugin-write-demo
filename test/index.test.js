import path from 'path';
import compiler from './compiler.js';

test('Inserts name and outputs JavaScript', async () => {
  const stats = await compiler(path.resolve(__dirname, 'example.txt'));
  const output = stats.toJson().modules[0].source;
  // console.log(output);
  expect(output).toBe(`export default "Hey Alice 18!"`);
});