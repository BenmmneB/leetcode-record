var simplifyPath = function(path) {
    let stack = []//堆
    let str = ''//用于接收最后的结果
    let arr = path.split('/')//先把/都去掉,/等最后再加
    // console.log(arr);
    arr.forEach(item=>{//把原字符串过滤掉/后的元素压入栈中
        if (item && item=='..') {
            stack.pop()
            // console.log('pop',stack);
        }else if(item && item != '.'){
            stack.push(item)
            // console.log('push',stack);
        }
    })
    // console.log(stack);
    arr.length ? str = '/' + stack.join('/') : stack.join('/')//栈中没元素加个/
    // console.log(str);
    return str
};
simplifyPath('/a/./b/d/../../c/')
// 只要 && 前面是 false，无论 && 后面是 true 还是 false，结果都将返 && 前面的值
// 只要 && 前面是 true，无论 && 后面是 true 还是 false，结果都将返 && 后面的值