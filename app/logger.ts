import path from 'path';
import pino from 'pino';
const transport = pino.transport({
  targets: [
    {
      level: 'info',
      target: 'pino/file',
      options: { destination: path.resolve(__dirname, './log') }
    }
  ]
})

export const logger = pino(transport);