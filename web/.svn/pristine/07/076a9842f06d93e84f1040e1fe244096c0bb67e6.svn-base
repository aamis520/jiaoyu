// 自定义判断元素类型JS
function toType(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

function filterNull(obj) {
    
    if (toType(obj) === 'array') {
        for (let i = 0; i < obj.length; i++) {
            if (obj[i] === null) {
                obj.splice(i, 1)
                i -= 1
            }
        }
    } else {
        for (let key in obj) {
            if (obj[key] === null) {
                delete obj[key]
            } else {
                if (toType(obj[key]) === 'string') {
                    obj[key] = obj[key].trim()
                } else if (toType(obj[key]) === 'object') {
                    obj[key] = filterNull(obj[key])
                } else if (toType(obj[key]) === 'array') {
                    obj[key] = filterNull(obj[key], 'array')
                }
            }
        }
    }
    
    return obj
}


let a = {
    v: [null, null, 123],
    b: {
        c: null,
        d: 'test   '
    }
}
console.log(filterNull(a))


export default {
    deleteStringFromArray: function (string, array) {
        let len = array.length
        for (let i = 0; i < len; i++) {
            if (string === array[i]) {
                return array.splice(i, 1)
            }
        }
    },
    filterNull
}