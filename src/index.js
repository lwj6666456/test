import util from './util'
import {
    fn1,
    fn2
} from './util2'


var obj={a:1,b:2}
console.log(Object.keys(obj).map(item=>{
    return item+"dddd"
}))