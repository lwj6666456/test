import util from './util'
import {
    fn1,
    fn2
} from './util2'

function loadImg(src) {
    const promise = new Promise((resolve, reject) => {
        try {
            var img = document.createElement('img')
            img.onload = function () {
                resolve("成功")
            }
            img.onerror = function () {
                resolve("失败")
            }
            img.src = src
            
        } catch (err) {
            reject(err)
        }

    })
    return promise
}
var src = 'www.baidu.com/tt.jpg'
loadImg(src).then(res => {
    console.log(res)
}, err => {
    console.error(err)
})