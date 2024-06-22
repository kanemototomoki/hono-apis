import { Hono } from 'hono'

const app = new Hono()

await app.get('/', (c) => {
  return c.text('Hello Hono!')
}).get('health', (c) => {
  return c.json({ status: 'ok' })
})

export default app

