const func1 = new Promise((resolve, reject) => {
  flag = true
  if (flag) resolve('성공')
  else reject('실패')
})

func1
  .then((value) => {
    return value + '1'
  })
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })
