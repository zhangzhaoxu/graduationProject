import React, { Component } from 'react';
import Card from '../Forum/PostItem';

let arr = [
    {
        "title": "测试测试测试",
        "des": "测试测试测试测试测试测试测试测试测试",
        "urls": [
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495126284380&di=9442ab21d379cc68297b63c1fe774b8c&imgtype=0&src=http%3A%2F%2Fwww.ysg88.com%2FUploadFiles%2FFCK%2F2014-08%2F201408110V06J8L4J4.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495126284380&di=9442ab21d379cc68297b63c1fe774b8c&imgtype=0&src=http%3A%2F%2Fwww.ysg88.com%2FUploadFiles%2FFCK%2F2014-08%2F201408110V06J8L4J4.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495126284380&di=9442ab21d379cc68297b63c1fe774b8c&imgtype=0&src=http%3A%2F%2Fwww.ysg88.com%2FUploadFiles%2FFCK%2F2014-08%2F201408110V06J8L4J4.jpg"
        ],
        "avatar": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495126343935&di=f2a3a1ab698a4b37eacfec61aa8a526d&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%253D580%2Fsign%3D65cd7d1e5a82b2b7a79f39cc01accb0a%2Fb6cc7b899e510fb3cbad928dda33c895d1430c71.jpg",
        "name": "小新"
    },
    {
        "title": "测试测试测试",
        "des": "测试测试测试测试测试测试测试测试测试",
        "urls": [
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495126284380&di=9442ab21d379cc68297b63c1fe774b8c&imgtype=0&src=http%3A%2F%2Fwww.ysg88.com%2FUploadFiles%2FFCK%2F2014-08%2F201408110V06J8L4J4.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495126284380&di=9442ab21d379cc68297b63c1fe774b8c&imgtype=0&src=http%3A%2F%2Fwww.ysg88.com%2FUploadFiles%2FFCK%2F2014-08%2F201408110V06J8L4J4.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495126284380&di=9442ab21d379cc68297b63c1fe774b8c&imgtype=0&src=http%3A%2F%2Fwww.ysg88.com%2FUploadFiles%2FFCK%2F2014-08%2F201408110V06J8L4J4.jpg"
        ],
        "avatar": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495126343935&di=f2a3a1ab698a4b37eacfec61aa8a526d&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%253D580%2Fsign%3D65cd7d1e5a82b2b7a79f39cc01accb0a%2Fb6cc7b899e510fb3cbad928dda33c895d1430c71.jpg",
        "name": "小新"
    },
    {
        "title": "测试测试测试",
        "des": "测试测试测试测试测试测试测试测试测试",
        "urls": [
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495126284380&di=9442ab21d379cc68297b63c1fe774b8c&imgtype=0&src=http%3A%2F%2Fwww.ysg88.com%2FUploadFiles%2FFCK%2F2014-08%2F201408110V06J8L4J4.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495126284380&di=9442ab21d379cc68297b63c1fe774b8c&imgtype=0&src=http%3A%2F%2Fwww.ysg88.com%2FUploadFiles%2FFCK%2F2014-08%2F201408110V06J8L4J4.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495126284380&di=9442ab21d379cc68297b63c1fe774b8c&imgtype=0&src=http%3A%2F%2Fwww.ysg88.com%2FUploadFiles%2FFCK%2F2014-08%2F201408110V06J8L4J4.jpg"
        ],
        "avatar": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495126343935&di=f2a3a1ab698a4b37eacfec61aa8a526d&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%253D580%2Fsign%3D65cd7d1e5a82b2b7a79f39cc01accb0a%2Fb6cc7b899e510fb3cbad928dda33c895d1430c71.jpg",
        "name": "小新"
    },
    {
        "title": "测试测试测试",
        "des": "测试测试测试测试测试测试测试测试测试",
        "urls": [
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495126284380&di=9442ab21d379cc68297b63c1fe774b8c&imgtype=0&src=http%3A%2F%2Fwww.ysg88.com%2FUploadFiles%2FFCK%2F2014-08%2F201408110V06J8L4J4.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495126284380&di=9442ab21d379cc68297b63c1fe774b8c&imgtype=0&src=http%3A%2F%2Fwww.ysg88.com%2FUploadFiles%2FFCK%2F2014-08%2F201408110V06J8L4J4.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495126284380&di=9442ab21d379cc68297b63c1fe774b8c&imgtype=0&src=http%3A%2F%2Fwww.ysg88.com%2FUploadFiles%2FFCK%2F2014-08%2F201408110V06J8L4J4.jpg"
        ],
        "avatar": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495126343935&di=f2a3a1ab698a4b37eacfec61aa8a526d&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%253D580%2Fsign%3D65cd7d1e5a82b2b7a79f39cc01accb0a%2Fb6cc7b899e510fb3cbad928dda33c895d1430c71.jpg",
        "name": "小新"
    }
];

export default class PersonalPost extends Component {
    render() {
        return (
            <div>
                {
                    arr.map((item, index) => (
                        <Card postInfo={item} index={index} push={this.props.push} />
                    ))
                }
            </div>
        )
    }
}