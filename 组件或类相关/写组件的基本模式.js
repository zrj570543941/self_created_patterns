function extend(defaults, configs) {
    for (var attr in configs) {
        defaults[attr] = configs[attr];
    }
    return defaults;
}
var Component = (function() {
    let defaults = new WeakMap(); //defaults是每个实例间不互相共享的



    /////////////////////
    // 组件间共享的私有方法写在这即可 
    // 要用到defaults可以直接通过defaults.get(this)获取即可
    // 划分组件的功能的部件以及重新统一功能的统一部件一般都写这儿
    // 。。。。。。
    // 。。。。。
    // 。。。。。
    /////////////////////


    //记得要在父级组件上定义它的所有子组件都要用到的公有对外接口方法
    //然后子类去继承即可
    class Component extends Parent {
        consructor(configs) {
            defaults.set(this, {}); //在此初始化默认参数
            defaults.set(this, extend(
                defaults.get(this), configs
            )); //配置参数覆盖默认参数

            /////////////////////////////
            //然后在这块区域调用实现组件需要的组件间共享的私有方法
            /////////////////////////////
        }


        ////////////////
        //所有对外接口写这里即可 
        ////////////////
    }


    return Component;
})();