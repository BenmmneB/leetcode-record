//1.利用栈存储元素
var isValid = function(s) {
    var stack = []
    for(let i = 0;i<s.length;i++){
        var current = s[i]//current为当前传入的
        if(s[i]=='(' || s[i]=='{' || s[i]=='['){
            stack.push(s[i])
        }else{
            var end = stack[stack.length-1]//end为当前栈中的这一项[即上一个传入的符号]（栈中只会有一个元素）
            if(current==')'&& end=='('  
            || s[i]=='}'&&end=='{' 
            || s[i]==']'&&end=='['){
                stack.pop()
            }else{
                return false
            }
        }
    }
    return stack.length == 0//真
};
//2.成对替换
var isValid = function(s) {
    let len = s.length
    //不为偶数直接false
    if(len % 2 != 0){
        return false
    }
    let length = len / 2//可以直接判断一半
    for(let i = 0;i < length;i++){
        s = s.replace('()','')
        s = s.replace('{}','')
        s = s.replace('[]','')
    }
    return s.length == 0

};