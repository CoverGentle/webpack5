import helloWorld from './hello-world'
import imgUrl from './assets/test.png'
import svgUrl from './assets/okbeng.svg'
import exampleTxt from './assets/example.txt'
import jpgUrl from './assets/piyao.jpg'
import './style.css'
import './style.less'
helloWorld()

const img = document.createElement('img')
img.src = imgUrl
document.body.appendChild(img)

const img2 = document.createElement('img')
img2.style.cssText = 'width:500px'
img2.src = svgUrl
document.body.appendChild(img2)

const blockTxt = document.createElement('div')
blockTxt.style.cssText = 'width:500px;height:200px;background:aliceblue'
blockTxt.textContent = exampleTxt
blockTxt.classList.add('block-bg')
document.body.appendChild(blockTxt)

const jpgMap = document.createElement('img')
jpgMap.style.cssText = 'width:500px'
jpgMap.src = jpgUrl
document.body.appendChild(jpgMap)

document.body.classList.add('hello')

// const span = document.createElement('span')
// span.classList.add('icon')
// span.innerHTML = '1212'



