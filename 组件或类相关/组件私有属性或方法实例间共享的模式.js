// 这种模式定义的私有成员在所有实例中是共享内存的
var Component = (function() {
    //私有方法或属性定义区域
    var a = function() {};

    var Component = function() {};
    //对外接口定义在原型上即可
    Component.prototype = {};

    //最后这一步也很重要,return出构造函数，这样a外界不能用到，但这里可以用到
    return Component;
})();