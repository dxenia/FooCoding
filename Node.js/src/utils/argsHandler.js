import { parseArgs } from 'node:util';

export function argsHandler() {
  const options = {
    resource: { type: 'string' },
    method: { type: 'string' },
    id: { type: 'string' },
    all: { type: 'boolean' },
  };

  const { values, tokens } = parseArgs({
    options,
    tokens: true,
    strict: false,
  });

  Object.entries(values).forEach(([param, value]) => {
    switch (param) {
      case 'resource':
        console.log(`Resource: ${value}`);
        break;

      case 'method':
        console.log(`Method: ${value}`);
        break;

      case 'id':
        console.log(`ID: ${value}`);
        break;

      case 'all':
        console.log(`Get all: ${value}`);
        break;
    }
  });

  return values;
}
