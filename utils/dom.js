
// 输入框值与data绑定
export const inputBuilding = function (evt) {
    const val = evt.detail.value;
    const data = evt.target.dataset.bind;
    this.setData({[data]: val});
}

// 复制文本
export const inputCopy = function (evt) {
    const data = evt.target.dataset.copy;
    wx.setClipboardData({
        data,
        success () {
            wx.showToast({ title: '复制成功', icon: 'none' });
        }
    })
}

// 授权
export const authorization = function(scope) {
    //查看授权信息
    return new Promise((resolve, reject) => {
        wx.getSetting({
            success(res) {
                // 如果该权限已经授权
                if (res.authSetting[scope] === true) {
                    resolve();
                } else if (res.authSetting[scope] === false) {
                    //该权限调起授权，但拒绝，重新调起设置界面
                    wx.openSetting({
                        success: (res) => {
                            //设置了该权限授权
                            res.authSetting[scope] ? resolve() : reject();
                        },
                        fail: reject
                    });
                } else {
                    //向用户发起授权请求
                    wx.authorize({
                        scope,
                        success() {
                            resolve();
                        },
                        fail: reject
                    })
                }
            },
            fail: reject
        });
    })
}

//保存网络图片到相册
export const saveImageFormInternet = function(url) {
    //查看授权信息
    return new Promise((resolve, reject) => {
        wx.downloadFile({
            url,
            success: ({statusCode, tempFilePath}) => {
                if (statusCode !== 200) {
                    reject();
                    return;
                }

                wx.saveImageToPhotosAlbum({
                    filePath: tempFilePath,
                    success: ({ errMsg }) => {
                        if (errMsg !== 'saveImageToPhotosAlbum:ok') {
                            reject();
                        } else {
                            resolve();
                        }
                    },
                    fail: reject
                })
            },
            fail: reject
        })
    })
}
