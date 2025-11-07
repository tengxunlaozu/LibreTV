const CUSTOMER_SITES = {
    maotai: {
        api: 'https://caiji.maotaizy.cc/api.php/provide/vod',
        name: '茅台资源',
    },
    guangsu: {
        api: 'https://cj.lziapi.com/api.php/provide/vod',
        name: '光速资源',   
    },
    douban: {
        api: 'https://caiji.dbzy5.com/api.php/provide/vod',
        name: '豆瓣资源',
    },
    liangzi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod',
        name: '量子资源',
    },
    hongniu: {
        api: 'https://www.hongniuzy2.com/api.php/provide/vod',
        name: '红牛资源',
    },
    uku: {
        api: 'https://api.ukuapi88.com',
        name: 'U酷资源',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
