// 动态导入

function getComponent(){
 return import('lodash').then(({default:_})=>{
   const element =  document.createElement('div')
   element.innerHTML = _.join(['动','态','导','入'],' ')
   return element
  })
}

getComponent().then((element)=>{
  document.body.appendChild(element)
})