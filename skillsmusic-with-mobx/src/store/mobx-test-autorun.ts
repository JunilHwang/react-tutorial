import { observable, computed, autorun } from 'mobx'

const calc = observable({
  a: 1,
  b: 2
})

const sum = computed(() => calc.a + calc.b)

autorun(() => console.log(`a to ${calc.a}`))
autorun(() => console.log(`b to ${calc.b}`))
autorun(() => console.log(`sum to ${sum.get()} `)) // su

calc.a = 10
calc.b = 20

console.log(sum.get())