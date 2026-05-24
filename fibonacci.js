let n = 10
let a = 0
let b = 1
let temp

console.log(a)
console.log(b)

for (let i = 2; i <= n; i++) {
    temp = a + b
    console.log(temp)
    a = b
    b = temp
}