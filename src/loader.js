import { getOptions } from 'loader-utils';

export default function loader(source) {
  const options = getOptions(this);

  source = source.replace(/\[name\]/g, options.name);
  source = source.replace(/\[age\]/g, options.age);

  return `export default ${JSON.stringify(source)}`;
};