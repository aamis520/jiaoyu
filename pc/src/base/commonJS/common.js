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

//数组去重对象
//item=>Vue下this.data,付延兵2017-12-4
//页面使用1.引入  import common from '@commonJS/common'
//2.this.checkedIncome = common.deleChongfu(this.checkedIncome)
//3.注意,获取数据后,给数组添加新属性不能被Vue监听到，需要深拷贝$set一下,this.$set(this.checkedIncome,Object.assign(this.checkedIncome))
//4.处理规格[{},{},{},{},{}]
function deleChongfu(item) {

    let removeRepeat = {};
	item.forEach(function(ele){
		removeRepeat[JSON.stringify(ele)] = ele
	});
	item = Object.keys(removeRepeat).map((u)=>{
		return JSON.parse(u)
	});

    return item
}

Array.prototype.isContain = function (item) {

    let len = this.length

    item = JSON.stringify(item)

    for (let i = 0; i < len; i++) {
        let _item = JSON.stringify(this[i])
        if (item == _item) {
            return true
        }
    }

}

Array.prototype.removeItem = function (item) {

    let len = this.length

    item = JSON.stringify(item)

    for (let i = 0; i < len; i++) {
        let _item = JSON.stringify(this[i])
        if (item == _item) {
            this.splice(i, 1)
        }
    }

}

export default {
    deleteStringFromArray: function (string, array) {
        let len = array.length
        for (let i = 0; i < len; i++) {
            if (string === array[i]) {
                return array.splice(i, 1)
            }
        }
    },
    filterNull,
    deleChongfu
}
