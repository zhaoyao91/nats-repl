const NATS = require('nats')
const logger = require('env-pino')
const repl = require('repl')

const {NATS_URL} = process.env

const nats = NATS.connect(NATS_URL)
nats.on('error', err => logger.error(err))

repl.start('> ').context.nats = nats