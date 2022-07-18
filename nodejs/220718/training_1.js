console.log('사용가능한 메모리 : ' + os.freemem())
console.log('전체 메모리 용량 : ' + os.totalmem())
console.log('홈 디렉토리 경로 출력 : ' + os.homedir())

console.log('경로 구분자 출력 : ' + path.sep)
console.log('현재 파일의 확장자 출력 : ' + path.extname(__filename))
console.log('현재 파일의 경로를 분리해서 출력 : ')
console.log(path.parse(__filename))
