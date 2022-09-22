type Listener<E> = (this: any, ev: E) => any;

export function createListenerAndPublish<E>(){
  let listeners: Listener<E>[] = [];
  const manager = {
    addEventListener(_eventName: 'change', listener: Listener<E>) {
      listeners = [...listeners, listener];
    },
    removeEventListener(_eventName: 'change', listener: Listener<E>){
      listeners = listeners.filter(h => h !== listener)
    }
  };
  
  function publish(event: any){
    listeners.forEach(listener => listener(event as E));
  }
  return {
    manager,
    publish,
  }
}