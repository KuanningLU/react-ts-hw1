import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <header>
        <h1>歡迎來到盧冠寧的網站</h1>
        <h2>我的名字是盧冠寧</h2>
      </header>

      <main>
        <p>我有一個 YouTube 頻道，歡迎來訂閱！</p>
        <img src="頻道.png" alt="頻道照片" width="50%" />

          <h3>學歷</h3>
          <ul>
            <li>基隆市私立二信高級中學</li>
            <li>新北市立雙溪高中</li>
            <li>淡江大學資訊管理學系</li>
          </ul>

          <h3>人生中特別的經驗</h3>
          <ul>
            <li>擔任高中畢業歌MV導演</li>
            <li>在高三時拍[台灣偏鄉高中生一日VLOG]上了台灣達人秀</li>
            <li>考到駕照後開車環島</li>
            <li>戴安全帽被蜈蚣咬</li>
            <li>騎車時被毒蟲撞導致眼睛細菌感染</li>
          </ul>

          <h3>影音連結</h3>
          <table>
            <tr>
              <th>APP</th>
              <th>連結</th>
            </tr>
            <tr>
              <td>YouTube 頻道</td>
              <td><a href="https://www.youtube.com/@SharonLu2003">盧冠寧</a></td>
            </tr>
            <tr>
              <td>Instagram</td>
              <td><a href="https://www.instagram.com/?hl=zh-tw">mooiiia_</a></td>
            </tr>
          </table>

          <div>
            <strong>"喜歡拍影片記錄生活"</strong>
          </div>
      </main>


        </>
        )
}

        export default App
