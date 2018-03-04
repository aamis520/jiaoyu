export default {
    path: '/moni',
    component: resolve => require(["@/page/moni"], resolve),
    // redirect: '/moni/one',
    children: [{
            path: 'one',
            redirect: 'one/a',
            component: resolve => require(["@/page/moni/one"], resolve),
            children: [{
                path: 'a',
                component: resolve => require(["@/page/moni/one/1"], resolve),
            }, {
                path: 'b',
                component: resolve => require(["@/page/moni/one/2"], resolve),
            }]
        },
        {
            path: 'two',
            redirect: 'two/a',
            component: resolve => require(["@page/moni/two"], resolve),
            children: [{
                path: 'a',
                component: resolve => require(["@/page/moni/two/1"], resolve),
            }, {
                path: 'b',
                component: resolve => require(["@/page/moni/two/2"], resolve),
            }]
        }
    ]
}
