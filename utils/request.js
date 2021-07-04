const Methods = ['OPTIONS', 'GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'TRACE', 'CONNECT'];

class SafeRequest {
    static getInstance() {
        if (!SafeRequest.instance) {
            SafeRequest.instance = new SafeRequest();
        }
        return SafeRequest.instance;
    }

    constructor() {
        Methods.forEach(method => {
            const key = method.toLowerCase();
            this[key] = this._requestInit(method);
        });

        this.uploadFile = this._uploadFileInit();
    }

    _requestInit(method) {
        return function (url, data={}) {

            if (wx.getStorageSync('token')) {
                data.token = wx.getStorageSync('token');
            }

            return new Promise((reslove, reject) => {
                wx.request({
                    url,
                    header: {
                        'X-Requested-With': 'XMLHttpRequest',
                    },
                    data,
                    method,
                    success: res => {
                        reslove(res);
                        //需要根据业务调整
                        // if (res.statusCode === 200 && res.data.code === undefined) { // 第三方接口
                        //     reslove(res.data);
                        //     return;
                        // }

                        // if (res.statusCode === 200 && res.data.code === 0) {
                        //     reslove(res.data);
                        //     return;
                        // }

                        // if (res.data.code === 403) {
                        //     wx.reLaunch({ url: '/pages/login/index' });
                        //     return;
                        // }

                        // setTimeout(() => {
                        //     wx.showToast({title: res.data.message, icon: 'none'});
                        // }, 200);
                        // reject(res);
                    },
                    fail: (err) => {
                        wx.showToast({title: '网络错误', icon: 'none'});
                        reject(err);
                    }
                });
            });
        };
    }

    _uploadFileInit() {
        return function (url, name, filePath, formData = null) {
            if (wx.getStorageSync('token')) {
                url = url + '?token=' + wx.getStorageSync('token');
            }

            return new Promise((reslove, reject) => {
                wx.uploadFile({
                    url,
                    name,
                    filePath,
                    formData,
                    success: res => {
                        if (res.statusCode === 200) {
                            reslove(res.data);
                        } else {
                            reject(res);
                        }
                    },
                    fail: reject
                });
            });
        };
    }
}

export default SafeRequest.getInstance();
