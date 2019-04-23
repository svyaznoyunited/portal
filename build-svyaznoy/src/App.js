import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <header className='header'>
        <img src="http://portal.euroset.lan/euroset.ru~customize~portal~afp/img/logo2.png" />
      </header>
      <nav className="nav">
        <div>
          <a href="#"><img src={require('')} /></a>
        </div>
        <div>
          <a href="#">Мой карьерный рост</a>
        </div>
        <div>
          <a href="#">ОИП-Обучение</a>
        </div>
        <div>
          <a href="#">Отчеты</a>
        </div>
        <div>
          <a href="#">Очное обучение</a>
        </div>
        <div>
          <a href="#">Тестирование</a>
        </div>
        <div>
          <a href="#">Справочная информация</a>
        </div>
        <div>
          <a href="#">Стандарты продаж</a>
        </div>
        <div>
          <a href="#">Для стажеров</a>
        </div>
        <div>
          <a href="#">Карьерный рост</a>
        </div>
        <div>
          <a href="#">Карьерный рост</a>
        </div>
        <div>
          <a href="#">Обучение стажеров</a>
        </div>
        <div>
          <a href="#">Для ТД/ДПР</a>
        </div>
        <div>
          <a href="#">Для тренеров УЦ</a>
        </div>
        <div>
          <a href="#">Календарь вебинаров</a>
        </div>
        <div>
          <a href="#">Администирование</a>
        </div>
        <div>
          <a href="#">ФОРУМ: ЛУЧШИЕ. РЕШЕНИЯ</a>
        </div>
        <div>
          <a href="#">Заявки на внешнее обучение</a>
        </div>
        <div>
          <a href="#">Помощь</a>
        </div>
      </nav>
      <div className="content">
        <img src="http://sdo.maxus.ru/xhttp_res?doc_url=x-local://wt_data/objects/54EC45427A3F75/39.xml&elem_path=document.text_area&res_id=35884.png" />
      </div>
    </div>
  );
}

export default App;