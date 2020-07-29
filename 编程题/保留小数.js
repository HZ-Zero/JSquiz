// function getnum()
// {
//     var num = 22.123456;
//     var result = num.substring(0,s.indexOf(".")+3);
//     alert(result);
// }
//
// function getnum()
// {
//     var num = 22.123456;
//     var aNew;
//     var re = /([0-9]+\.[0-9]{2})[0-9]*/;
//     aNew = num.replace(re,"$1");
//     alert(aNew);
// }
//
// function getnum()
// {
//     var num=22.123456;
//     alert( Math.round(num*100)/100);
// }
//
// alert(num.toFixed(2));
var obj = {

  fn: function () {
    console.log(this,'27') // fn
    return () => {
      console.log(this,'29'); // 箭头函数不改变this fn
        (function () { console.log(this,'30') })(); //this->node里 global html里window
      setTimeout(function () { console.log(this,'31') }, 1);  //this-> timeout
      setTimeout( () =>{ console.log(this,'32') }, 1);// 箭头函数 fn
    }
  }
}

obj.fn()();
