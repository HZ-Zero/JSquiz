function Promise(fn) {
    this.status='p'
    this.val=undefined
    let _this=this
    this._resolvecallback=[]
    this._rejectcallback=[]
    this._resolve=function (value){
        if (_this.status=='p'){
            _this.status="resolve"
            _this.val=value
        }

    }
    this._reject=function (value){
        if (_this.status=='p'){
            _this.status="reject"
            _this.val=value
        }
    }
    try {
        fn(_this.resolve,_this.reject);
    }catch (e) {
        _this._reject(e)
    }
}
Promise.prototype.then=function () {
    return new Promise()
}