import { observable, reaction, computed } from 'mobx'

const calc = observable({
  a: 1,
  b: 2
})

reaction(_ => calc.a, v => console.log(`a to ${v}`))
reaction(_ => calc.b, v => console.log(`b to ${v}`))

const sum = computed(() => {
  const res = calc.a + calc.b
  console.log('sum calc : ' + res)
  return res
})

sum.observe(_ => calc.a)
sum.observe(_ => calc.b)

calc.a = 10
calc.b = 20

console.log(sum.get())