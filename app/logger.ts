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
const _logger = pino(transport);

export const logger = {
  skill: {
    detail: (slug: string) => _logger.info({type: 'skill detail', slug }),
    list: () => _logger.info({type: 'skill list' }),
  },
  position: {
    detail: (slug: string) => _logger.info({type: 'position detail', slug }),
  }
}