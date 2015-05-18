//静态服务器配置，可同时配置多个，域名需host到127.0.0.1
exports.Server = {
    "8081": {
        //静态文件根目录
        "basePath": "/Users/xieyu/Desktop/frontEnd/Baidu/BiAdmin-FE/app"
        //忽略的静态文件请求，与此正则匹配的请求将直接走转发规则（可选配置）
        //,"ignoreRegExp":  /\/favicon.ico/g
    },
    "8082": {
        //静态文件根目录
       // "basePath": "/Users/xieyu/Desktop/frontEnd/Baidu/BIPortal/webapp"
       "basePath": "/Users/xieyu/Desktop/frontEnd/Baidu/talk-meeting"

        //忽略的静态文件请求，与此正则匹配的请求将直接走转发规则（可选配置）
        //,"ignoreRegExp":  /\/js\/urls\.js/g
    },
    "8008": {
        //静态文件根目录
        "basePath": "/Users/xieyu/Desktop/frontEnd/Baidu/Hi-webapp-backend"
    },

    "8009": {
        //静态文件根目录
        "basePath": "/Users/xieyu/Desktop/frontEnd/Baidu/Hi-wiki"
    },

    "8007": {
        //静态文件根目录
        "basePath": "/Users/xieyu/Desktop/frontEnd/Baidu/Hi-group-file"
    }
};
//转发规则——静态服务器没有响应的或者忽略的请求将根据一下规则转发
exports.TranspondRules = {
    "8081": {
        //目标服务器的ip和端口，域名也可，但注意不要被host了
        targetServer: {
            "host": "biqatest.baidu.com",
            "port": "80",
            "headers": {
                "cookie": "JSESSIONID=A9A8F7B2E425A62B0AD66794FA690BA5"}
        },
        //特殊请求转发，可选配置，内部的host、port和attachHeaders为可选参数
        regExpPath: {
            "/new_biadmin/adminRole/listApp": {
                //"host": "10.44.67.14",
                //"port": "8045",
                //"attachHeaders": {"app-id": 5},
                "path": "/new_biadmin/adminRole/listApp"
            }
        }
    },
    "8008": {
        //目标服务器的ip和端口，域名也可，但注意不要被host了
       targetServer: {
            "host": "cp01-hiserver-sandbox1-tc.cp01.baidu.com",
           //"host": "http://172.22.232.64"
            "port": "8279",
            "headers": {
                "cookie": "xplatform_ge=5f70cc588da43f6e16ce6f18b48423d1c92e9b7b36926ec7e689abb0e9bf0c6d"}
        }
    },

    "8009": {
        targetServer: {
            "host": "10.23.252.236",
            "port": "80",
            "headers": {
                "cookie": "JSESSIONID=3720A86C230BE88A104AE2335A9B10F8.236"
            }
        }
    },

    "8007": {
        targetServer: {
            "host": "10.44.88.49",
            "port": "80",
            "headers": {
                "cookie": "BDUSS=1JQcTNRbUZvM2dQRE0xclZxfnRZRWY2a1dYQ3FhSThIRDBtckhnUGFBb25rSlpVQVFBQUFBJCQAAAAAAAAAAAEAAADiOUIG0KG6xdfQXzl4WQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACcDb1QnA29Ua"
            }
        }
    },

    "8082": {
        //目标服务器的ip和端口，域名也可，但注意不要被host了
       targetServer: {
            "host": "corpass.im.baidu.com",
           //"host": "http://172.22.232.64"
            "port": "80",
            "headers": {
                "cookie": "BDUSS=1JQcTNRbUZvM2dQRE0xclZxfnRZRWY2a1dYQ3FhSThIRDBtckhnUGFBb25rSlpVQVFBQUFBJCQAAAAAAAAAAAEAAADiOUIG0KG6xdfQXzl4WQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACcDb1QnA29Ua"}
        }
    },
    // "8046": {
    //     //目标服务器的ip和端口，域名也可，但注意不要被host了
    //     targetServer: {
    //         "host": "10.44.67.14",
    //         "port": "8045"
    //     },
    //     //特殊请求转发，可选配置，内部的host、port和attachHeaders为可选参数
    //     regExpPath: {
    //         "/platform/rs": {
    //             "path": "/platform/rs"
    //         },
    //         "/platform": {
    //             "host": "127.0.0.1",
    //             "port": "8046",
    //             "path": "/"
    //         }
    //     }
    // },
    "ajaxOnly": false
};