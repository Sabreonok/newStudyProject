import './info.scss'


export default function Info() {
    return (
        <div>
            <div className="info-container">
                <div className="why_you_need_us">
                    <div className="top-block">
                        <h2>Зачем мы нужны?</h2>
                        <p>Есть несколько причин:
                        </p>
                    </div>
                    <div className="down-block">
                        <div class="down-block_img"><img src="images/1.svg" alt="1" width={80} height={90}/>
                        </div>

                        <div className="down-block_p">
                            <p>Потерявшиеся студенты всегда смогут найти решение проблемы.
                            </p>
                        </div>

                        <div className="down-block_img"><img src="images/2.svg" width={80} height={90} alt="2"/ ></div>
                        <div className="down-block_p">
                            <p>В стране улучшается процент умных и образованных людей.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
      
    )
  }