/*
 * @Author: your name
 * @Date: 2020-06-15 22:55:06
 * @LastEditTime: 2020-06-15 22:55:28
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \cloud-music\src\api\utils.js
 */
export const getCount = (count) => {
    if (count < 0) return;
    if (count < 10000) {
        return count;
    } else if (Math.floor(count / 10000) < 10000) {
        return Math.floor(count / 1000) / 10 + "万";
    } else {
        return Math.floor(count / 10000000) / 10 + "亿";
    }
}