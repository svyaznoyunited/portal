import React from 'react';
import s from './Content.module.css';
import Post from './Posts/Post'

const Content = () => {
    return <div className = {s.content}>
      <div>
        <a href="#">
          <img src="http://sdo.maxus.ru/xhttp_res?doc_url=x-local://wt_data/objects/54EC45427A3F75/39.xml&elem_path=document.text_area&res_id=35884.png" />
        </a>
      </div>
      <Post />
    </div>
}

export default Content;