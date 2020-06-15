/*
 * @Author: qinsensen
 * @Date: 2020-06-15 17:48:00
 * @LastEditors: qinsensen
 * @LastEditTime: 2020-06-15 18:44:56
 * @Description: 
 */
import React from 'react'
import { renderRoutes } from 'react-router-config'
import { Top, Tab, TabItem } from './style'
import { NavLink } from 'react-router-dom'
function Home(props) {
    const { route } = props
    return (
        <div>
            <Top>
                <span className='iconfont menu'>&#xe64f;</span>
                <span className='title'>webApp</span>
                <span className='iconfont search'>&#xe652;</span>
            </Top>
            <Tab>
                <NavLink to='/recommend' activeClassName='selected'>
                    <TabItem>
                        <span>推荐</span>
                    </TabItem>
                </NavLink>
                <NavLink to='/singers' activeClassName='selected'>
                    <TabItem>
                        <span>歌手</span>
                    </TabItem>
                </NavLink>
                <NavLink to='/rank' activeClassName='selected'>
                    <TabItem>
                        <span>排行榜</span>
                    </TabItem>
                </NavLink>
            </Tab>
            { renderRoutes(route.routes) }
        </div>
    )
}
export default React.memo(Home);