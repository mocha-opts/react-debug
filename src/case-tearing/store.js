let state = { count: 0 };
let listeners = new Set();

export function getState() {
  return state.count;
}

export function setState(v) {
  state.count = v;
  listeners.forEach((l) => l());
}

export function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
