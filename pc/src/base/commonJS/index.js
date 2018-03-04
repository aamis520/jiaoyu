// index.js
let common = {}
let test = require("./test")

import test2 from "./common"

function addCommonModule(key) {
    if (common[key] !== undefined) {
        throw new Error("common对象已存在：" + key)
    }
    common[key] = test
}

//
addCommonModule('test')
// 
addCommonModule('test2')


export default common
