import React from 'react';

export default class DescriptionBox extends React.Component{

	render(){ 
		return <div className="description-box">
                <p className="short-descr"><span>ServiceStations</span> - лучшая сеть сервисных центров!</p>
                <div className="adv-list">
                    <div className="adv-item clearfix">
                        <div className="adv-item_img"><img src="./logo.png"/></div>
                        <div className="adv-item_text">
                            <h4 className="adv-title">Экономьте время</h4>
                            <p className="adv-def">В нашей сети работают профессионалы, которые выполняют работу качественно и в кратчайшие сроки!</p>
                        </div>
                    </div>
                   <div className="adv-item clearfix">
                        <div className="adv-item_img"><img src="./logo.png"/></div>
                        <div className="adv-item_text">
                            <h4 className="adv-title">Высшее качеcтво</h4>
                            <p className="adv-def">Наши сотрудники работают на совесть и предоставляют гарантию на проделанные работы.</p>
                        </div>
                    </div>
                    <div className="adv-item clearfix">
                        <div className="adv-item_img"><img src="./logo.png"/></div>
                        <div className="adv-item_text">
                            <h4 className="adv-title">Персональный подход</h4>
                            <p className="adv-def">Особенный подход не только к каждой проблеме, но и к каждому клиенту!</p>
                        </div>
                    </div>
                    
                </div>
                {this.props.children}
            </div> 
	}
}