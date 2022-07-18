const url = require('url')
const { URL } = url

const string =
  'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=sesac'

const naver = new URL(string)
let params = new URLSearchParams(naver.search)
console.log(params.keys())
console.log(params.values())
params.delete('sm')
console.log(params.keys())
