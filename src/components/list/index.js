/*
 * @Author: your name
 * @Date: 2020-06-15 22:49:52
 * @LastEditTime: 2020-06-15 23:00:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \cloud-music\src\components\list\index.js
 */ 
import React, { memo } from 'react'
import { ListWrapper, List, ListItem } from './style'
import { getCount } from '../../api/utils'

function RecommendList(props) {
    return (
        <div>
            <ListWrapper>
                <h1 className="title">推荐歌单</h1>
                <List>
        {
          props.recommendList.map ((item, index) => {
            return (
              <ListItem key={item.id + index}>
                <div className="img_wrapper">
                  <div className="decorate"></div>
                    {/* 加此参数可以减小请求的图片资源大小 */}
                    <img src={item.picUrl + "?param=300x300"} width="100%" height="100%" alt="music"/>
                  <div className="play_count">
                    <i className="iconfont play">&#xe614;</i>
                    <span className="count">{getCount (item.playCount)}</span>
                  </div>
                </div>
                <div className="desc">{item.name}</div>
              </ListItem>
            )
          })
        }
      </List>
            </ListWrapper>
        </div>
    )
}
export default memo(RecommendList)