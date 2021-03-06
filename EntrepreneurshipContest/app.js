const koa = require('koa');
const koaRouter = require('koa-router');
const path = require('path');
const reactview = require('./app/plugin/reactview/app.js');
const Static = require('./app/middleware/static.js');
const VERSION = require('./app/assets/package.json').version;
var newsData = require('./app/assets/api/news.json');
var tabsData = require('./app/assets/api/homeTabs.json');
var selectionData = require('./app/assets/api/selection.json');
var changePostData = require('./app/assets/api/post1.json');
var pagePostData = require('./app/assets/api/post2.json');
var postData = require('./app/assets/api/post.json');
var recommendData = require('./app/assets/api/recommend.json');
var answersData = require('./app/assets/api/postInfo.json');
var answersPageChangeData = require('./app/assets/api/postInfoChange.json');
var competitionsData = require('./app/assets/api/competitions.json');


const App = () => {
    let app = koa();
    let router = koaRouter();
    let microdata = {
        styleDomain: "//localhost:8080",
        styleVersion: VERSION,
    };
    
    // 初始化 /home 路由 dispatch 的 generator
    router.get(['/','/home'] , function* () {
        // 执行 view 插件
        var isLogged = this.cookies.get("isLogged");
        this.body = this.render('Index', {
            userInfo : {
                isLogged: isLogged
            },
            homeData: {
                newsData: newsData,
                tabsData: tabsData
            },
            competitionsData: {
                competitionsData: []
            },
            forumData: {
                selectionData: [],
                postData: []
            },
            answerData: [],
            recommendData: [],
            microdata: microdata
        }, true);
    });
    
    router.get('/api/newsList.json', function* () {
        this.body = {
            newsList: newsData
        }
    });
    
    router.get('/api/tabsList.json', function* () {
        this.body = {
            tabsList: tabsData
        }
    });

    router.get('/logIn', function* () {
        this.cookies.set("isLogged", "logged");
        this.body = {
            isLogged: "ceshiceshi"
        }
    });

    router.get('/logOut', function* () {
        this.cookies.set("isLogged", "logout");
        this.body = {
            isLogged: "zhendeshiceshi"
        }
    });

    router.get('/user', function* () {
        var isLogged = this.cookies.get("isLogged");
        this.body = this.render('Index', {
            userInfo : {
                isLogged: isLogged
            },
            homeData: {
                newsData: [],
                tabsData: []
            },
            competitionsData: {
                competitionsData: competitionsData
            },
            forumData: {
                selectionData: [],
                postData: []
            },
            answerData: [],
            recommendData: [],
            microdata: microdata
        }, true);
    });
    
    router.get('/personal', function* () {
        var isLogged = this.cookies.get("isLogged");
        this.body = this.render('Index', {
            userInfo : {
                isLogged: isLogged
            },
            homeData: {
                newsData: [],
                tabsData: []
            },
            competitionsData: {
                competitionsData: competitionsData
            },
            forumData: {
                selectionData: [],
                postData: []
            },
            answerData: [],
            recommendData: [],
            microdata: microdata
        }, true);
    });

    router.get('/forum', function* () {
        var isLogged = this.cookies.get("isLogged");
        this.body = this.render('Index', {
            userInfo : {
                isLogged: isLogged
            },
            homeData: {
                newsData: [],
                tabsData: []
            },
            competitionsData: {
                competitionsData: competitionsData
            },
            forumData: {
                selectionData: selectionData,
                postData: postData
            },
            answerData: [],
            recommendData: recommendData,
            microdata: microdata
        }, true);
    });
    
    
    router.get('/post', function* () {
        var isLogged = this.cookies.get("isLogged");
        this.body = this.render('Index', {
            userInfo : {
                isLogged: isLogged
            },
            homeData: {
                newsData: [],
                tabsData: []
            },
            competitionsData: {
                competitionsData: []
            },
            forumData: {
                selectionData: [],
                postData: []
            },
            answerData: answersData,
            recommendData: recommendData,
            microdata: microdata
        }, true);
    });
    
    router.get('/api/postAnswers.json', function* () {
        this.body = {
            answerList: answersData
        }
    });
    
    router.get('/api/postAnswersChange.json', function* () {
        this.body = {
            answerList: answersPageChangeData
        }
    });
    
    router.get('/api/selections.json', function* () {
        this.body = {
            selectionData: selectionData
        }
    });

    router.get('/api/selectionChange.json', function* () {
        this.body = {
            postData: changePostData
        }
    });

    router.get('/api/postPageChange.json', function* () {
        this.body = {
            postData: pagePostData
        }
    });
    
    router.get('/api/posts.json', function* () {
        this.body = {
            postData: postData
        }
    });

    router.get('/competitions', function* () {
        var isLogged = this.cookies.get("isLogged");
        this.body = this.render('Index', {
            userInfo : {
                isLogged: isLogged
            },
            homeData: {
                newsData: [],
                tabsData: []
            },
            competitionsData: {
                competitionsData: competitionsData  
            },
            answerData: [],
            recommendData: recommendData,
            microdata: microdata
        }, true);
    });

    router.get('/api/competitions.json', function* () {
        var id = this.query.id;
        if(id == 0) id = '';
        var data = require('./app/assets/api/competitions'+id+'.json');
        this.body =  {
            competitionsData: {
                competitionsData: data
            }
        }
    });
    
    router.get('/api/changePage.json', function* () {
        var id = this.query.id;
        var data = require('./app/assets/api/changePage.json');
        this.body = {
            pageData: data,
            id: id
        }
    });
    
    router.get('/api/recommend.json', function* () {
        this.body = {
            recommendData: recommendData
        }
    });

    router.get('/competitions/signup', function* () {
        var isLogged = this.cookies.get("isLogged");
        this.body = this.render('Index', {
            userInfo : {
                isLogged: isLogged
            },
            homeData: {
                newsData: [],
                tabsData: []
            },
            competitionsData: {
                competitionsData: competitionsData
            },
            forumData: {
                selectionData: [],
                postData: []
            },
            answerData: [],
            recommendData: [],
            microdata: microdata
        }, true);
    });
    
    app.use(router.routes()).use(router.allowedMethods());
    
    // 静态资源托管
    app.use(Static({
        staticOpts: {
            router: '/assets',               // 路由映射
            dir: `${__dirname}/app/assets`,  // 托管的目录
            maxage: 3,        // 设置 maxage，默认缓存一天
        },
        app: app,
    }));
    
    // 注入 reactview
    const viewpath = path.join(__dirname, 'app/views');
    
    app.config = {
        reactview: {
            viewpath: viewpath,             // the root directory of view files
            doctype: '<!DOCTYPE html>',
            extname: '.js',                 // view 层直接渲染文件名后缀
            beautify: true,                 // 是否需要对 DOM 结构进行格式化
            writeResp: false,               // 是否需要在 view 层直接输出
        }
    };
    reactview(app);
    
    return app;
};
const createApp = () => {
    const app = App();
    
    app.listen(3000, () => {
         console.log('3000 is listening!');
    });
    
    return app;
};

createApp();
