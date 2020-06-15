/*
 * @Author: qinsensen
 * @Date: 2020-06-15 17:43:29
 * @LastEditors: qinsensen
 * @LastEditTime: 2020-06-15 18:27:28
 * @Description: 
 */
import React from 'react'
import {
    Redirect
} from 'react-router-dom'
import Home from '../application/Home/Home.js'
import Recommend from '../application/Recommend/Recommend.js'
import Singers from '../application/Singers/Singers.js'
import Rank from '../application/Rank/Rank.js'
export default [{
    path: "/",
    component: Home,
    routes: [{
        path: "/",
        exact: true,
        render: () => (<
            Redirect to={
                "/recommend"
            }
        />
        )
    },
    {
        path: "/recommend",
        component: Recommend
    },
    {
        path: "/singers",
        component: Singers
    },
    {
        path: "/rank",
        component: Rank
    }
    ]
}]