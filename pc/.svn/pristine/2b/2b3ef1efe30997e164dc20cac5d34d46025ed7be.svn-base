//所有关于数字处理
//1.常规基础数字处理
let numBaseHandle = { 
    parseInt (num) {//丢弃小数部分,保留整数部分
        return parseInt(num)
    },
    ceil(num) {//向上取整
        return Math.ceil(num)
    },
    round(num) {//四舍五入
        return Math.round(num)
    },
    floor(num){//向下取整 
        return Math.floor(num)
    },
    random(num1,num2,pre){//num1-num2之间随机数,pre为精确度
    	let backNum;
		if (num1&&num2) {
			let add = num1<num2 ? num1 : num2;
			backNum = Math.random() * Math.abs(num1-num2) + add
		}else if(num1 || num2){
			backNum = Math.random() * num1
		}else{
			backNum = 0
		}
		//取精确度
		if(pre){
			backNum = backNum.toString().slice(0,pre+2)
		}else{
			backNum = parseInt(backNum)
		}
    	return backNum
    }
};  
//2.特殊数字处理
let numSpecialHandle = { 
    floatNumAdd(num1,num2) {//浮点数相加
        return parseFloat((num1+num2).toFixed(10))
    },
    floatNumSub(num1,num2) {//浮点数相减
        return parseFloat((num1-num2).toFixed(10))
    },
    floatNumMult(num1,num2) {//浮点数相乘
        return parseFloat((num1*num2).toFixed(10))
    },
    floatNumDivision(num1,num2) {//浮点数相除
    	//浮点数相除预先处理如果出现1/3类似情况，四舍五入保留4位小数
    	let num = '';
    	num = Math.round(parseFloat((num1/num2).toFixed(10))*10000)/10000
        return num;
    },
    floatDotTwo(num){//四舍五入保留两位小说
    	return Math.round(num*100)/100
    },
    moneyNum(num){//数字金额，从右到左每隔3位加.
		//正则写法
		return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g,'$1,');
    }
}
export {numBaseHandle,numSpecialHandle}
