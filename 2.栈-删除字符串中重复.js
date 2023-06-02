//1.
var removeDuplicates = function(s) {
    let stack = []
    for(i of s){
        let prev = stack.pop()//当前项的前一项
        if(prev != i){
            stack.push(prev)
            stack.push(i)
        }
    }
    return stack.join('')
};
//2.
 //弄一个栈然后循环字符串s,s[i]若与栈顶元素相同就出栈，否则入栈
 var removeDuplicates = function(s) {
    let stack = []
    for(let i = 0 ;i < s.length;i++){
        if(stack[stack.length-1] == s[i]){
            stack.pop()
        }else{
            stack.push(s[i])
        }
    }
    return stack.join('')
 };