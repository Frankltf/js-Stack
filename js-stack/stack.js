function Stack(){
    this.dataSource=[];
    this.top=0;
    this.push=push;
    this.pop=pop;
    this.peek=peek;
    this.clear=clear;
    this.length=length;
}
function push (element){
    this.dataSource[this.top++]=element;
}
function pop(){
    return this.dataSource[--this.top];
}
function peek(){
    return this.dataSource[this.top-1];
}
function clear(){
    this.dataSource=[];
    this.top=0;
}
function length(){
    return this.top;
}


//回文实例
function isPalindRome(word){
    var w=new Stack();
    for(var i=0;i<word.length;i++){
        w.push([word[i]]);
    }
    console.log(w.dataSource);//hello
    var rword='';
    while (w.length()>0){
        rword+= w.pop();
    }
    console.log(rword);  //olleh
}
var str='hello';
//isPalindRome(str);


//递归实现5的阶乘
function fact(n){
    var e=new Stack();
    while (n>=1){
        e.push(n--);
    }
    console.log(e.dataSource);
    var product=1;
    while (e.length()>0){
        product=product* e.pop();
    }
    console.log(product);

}
fact(10)