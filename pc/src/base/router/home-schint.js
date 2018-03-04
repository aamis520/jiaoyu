/**
 * 家校互联
 * */

export default { 
            path: '/homeSchint',
            component: resolve=>require(["@page/home-schint/index"],resolve),
          redirect: '/homeSchint/schoolPropaganda',
            children: [
              {
                path: '/homeSchint/schoolPropaganda',
                component: resolve=>require(["@page/home-schint/schoolPropaganda/schoolPropaganda"],resolve)
            },
//              {
//                  path: '/homeSchint/InformationNotification',
//                  componentList: resolve=>require(["@/views/homeSchint/InformationNotification"],resolve)
//              },
//              {
//                  path: '/homeSchint/eventCompetition',
//                  componentList: resolve=>require(["@/views/homeSchint/eventCompetition"],resolve)
//              },
                {
                    path: '/homeSchint/campusTopic',
                    component: resolve=>require(["@page/home-schint/campusTopic/campusTopic"],resolve)
                },
                {
                    path: '/homeSchint/campusCircle',
                    component: resolve=>require(["@page/home-schint/CampusCircle/CampusCircle"],resolve)
                },
//              {
//                  path: '/homeSchint/carouselFigure',
//                  componentList: resolve=>require(["@/views/homeSchint/carouselFigure"],resolve)
//              }
          ] 
}
