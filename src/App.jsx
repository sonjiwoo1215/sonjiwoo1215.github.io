import { useState } from 'react'
import JiwooImage from './assets/손지우.jpg'
import './App.css'

function App() {
  return (
    <>
      <div id="hello">
          <img src={JiwooImage} className="JiwooImage" alt="JiwooImage" />
          <div>
            <h1>안녕하세요, <br />
                풀스택 개발자 <br />
                손지우입니다.
            </h1>
            <div>
              <a href='jiwoo211500@gmail.com'>Email</a>
              <a href='https://github.com/sonjiwoo1215'>Github</a>
              <a href='https://velog.io/@sonjiwoo1215/posts'>Velog</a>
            </div>
          </div>
      </div>  
      <ul>
        <li>저는 프론트엔드와 백엔드 모두 가능한 풀스택 개발자가 되어, 웹 개발의 전반적인 프로세스를 이해하며 작업할 수 있습니다.</li>
        <li>다양한 개발 기술을 다루며 효율적인 개발을 진행하고, 문제를 해결할 수 있는 능력을 갖추고자 합니다.</li>
        <li>소통 능력이 뛰어나 협업을 통해 프로젝트를 원활하게 이끌어가는 개발자가 되고 싶습니다. </li>
      </ul>
    </>
  )
}

export default App
