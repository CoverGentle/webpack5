function getString(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve('hello webpack!!!');
    }, 2000);
  })
}




async function Helloworld(){
  let string = await getString()
  console.log(string);
}
export default Helloworld
