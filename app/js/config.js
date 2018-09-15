require.config({
    baseUrl:"/",
    paths:{
        "jquery" : "libs/jquery.min",
        "template" : "libs/template-web",
        'cookie' : "libs/jquery.cookie",
        "header" : "module/head",
        "footer" : "module/foot",
        "kefu" : "module/kefu",
        'nav' : "module/nav",
        'login_mo' : "module/login_mo",
        'fade' : "module/fade",
        'daojishi' : "module/daojishi",
        'huaDong' : "module/huaDong",
        "gunDong" : "module/gunDong",
        'register_check' : "module/register_check",
        'login_check' : "module/login_check",
        'fenYe' : "module/fenYe",
        'gun' : "module/gun"
    },
    shim:{
        header:{
            deps:['jquery','cookie']
        },
        footer:{
            deps:['jquery']
        },
        kefu:{
            deps:['jquery']
        },
        nav:{
            deps:['jquery']
        },
        register_check:{
            deps:['jquery']
        },
        login_mo:{
            deps:['jquery']
        },
        login_check:{
            deps:['jquery']
        },
        cookie:{
            deps:['jquery']
        },
        fenYe:{
        	deps:['jquery']
        },
        gun:{
        	deps:['jquery']
        }
    }
})