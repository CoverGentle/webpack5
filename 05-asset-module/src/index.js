import helloWorld from './hello-world'
import imgUrl from './assets/test.png'
import svgUrl from './assets/okbeng.svg'
import exampleTxt from './assets/example.txt'
import jpgUrl from './assets/piyao.jpg'
helloWorld()

const img = document.createElement('img')
img.src = imgUrl

const img2 = document.createElement('img')
img2.style.cssText = 'width:500px'
img2.src = svgUrl

const blockTxt = document.createElement('div')
blockTxt.style.cssText = 'width:500px;height:200px;background:aliceblue'
blockTxt.textContent = exampleTxt

const jpgMap = document.createElement('img')
jpgMap.style.cssText = 'width:500px'
jpgMap.src = jpgUrl


document.body.appendChild(img)
document.body.appendChild(img2)
document.body.appendChild(blockTxt)
document.body.appendChild(jpgMap)
