```
const list = [1, 2, 3]
const square = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}

async function test() {
  // forEach是不能阻塞的，默认是请求并行发起（暂时不知真假）
  // list.forEach(async x=> {
  //   const res = await square(x)
  //   console.log(res)
  // })
  // list.map(async x=> {
  //   const res = await square(x)
  //   console.log(res)
  // })
  for(const item of list) {
    const res = await square(item)
    console.log(res)
  }
}
test()

```