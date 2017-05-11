//此模式参考于<<Learning JavaScript Data Structures and Algorithms - Second Edition>> 这本书
//上stack类的weakmap方式的实现的代码，具体是P83
var Component = (function() {
    //第一步：要私有化的属性或方法的放置区域
    var map1 = new WeakMap();
    var map2 = new WeakMap();

    var Component = function() {
        // 第二步：用于模拟普通的own property的特性，即每个实例之间的属性值互不共享，并且初始化私有属性值
        map1.set(this, val1); //val1用来初始化这个私有属性的值，可以是方法或其他任何值
        map2.set(this, val2); //val2用来初始化这个私有属性的值，可以是方法或其他任何值
    };
    //第三步，所有原型上的方法或者不在原型上的私有方法能够通过----私有属性名称.get(this)或set(this)的方式
    //读写私有属性值，但外界是读写不到的
    Component.prototype = {};

    //最后这一步也很重要,return出构造函数
    return Component;
})();

// 用这个方法的原因的个人理解及优点：
// 第一：用map的原因：只有map能模拟普通的own property的特性，即每个实例之间的属性值互不共享
// 第二：用weakmap的原因：当当前类的实例清除引用时,相应的私有属性也自动清除内存。
// 第三：用map做到了私有化属性的目的