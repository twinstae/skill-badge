type Handler<Payload, Result> = (payload: Payload) => Promise<Result>

function createEventBus<
  EventType extends string,
  S extends Record<EventType, Handler<any, any>[]>
>(subscriptions: S) {

  function subscribe<T extends keyof S>(eventType: T, callback: S[T][number]) {
    subscriptions[eventType].push(callback);

    return {
      unsubscribe: () => {
        subscriptions[eventType] = subscriptions[eventType]
          .filter(subscription => subscription !== callback) as S[T];
      }
    }
  }

  function dispatch<T extends keyof S>(action: {
    type: T,
    payload: S[T][number] extends Handler<infer A, any> ? A : never
  }) {
    return Promise.all(subscriptions[action.type].map(handler => handler(action.payload)));
  }

  return { subscribe, dispatch }
}

type User = { name: string }

const fakeDB: Record<number, User | undefined> = {
  1: { name: 'taehee' }
}

const eventBus = createEventBus({
  'getUser': [] as Handler<number, User | null>[],
  'test': [] as Handler<string, void>[]
})

eventBus.subscribe('test', async (text) => console.log(text));
eventBus.subscribe('getUser', async (id) => fakeDB[id] ?? null);

async function main() {
  await eventBus.dispatch({ type: 'test', payload: "test" })
  await eventBus.dispatch({ type: 'getUser', payload: 1 })
    .then(console.log)
}

void main();

export default createEventBus