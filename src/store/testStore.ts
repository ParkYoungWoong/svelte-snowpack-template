import { writable } from 'svelte/store'

export const testStore = writable({
  run: (x: string, y: number) => {
    console.log(x, y)
  }
})
