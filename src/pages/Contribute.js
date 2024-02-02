import React from 'react'

function Contribute() {
  return (
    <div>
      <h3>Project Files and Contribute to Project</h3>
      <p>
        You can download full project from <a href = "https://github.com/anti-pc/reactapp">this</a> github page
        Also, you can contribute to this project.
      </p>
      <h4>Some usefull commands and tips</h4>
      <p>
         - npm run build <br/>
         - npm run start <br/>
         - npm install [Package - Name] | npm install [ axios / uniqid / react-pose / react-router-dom ] <br/>
         - ngx json-server --port 3004 api/db.json <br/>

      </p>
    </div>
  )
}
export default Contribute;