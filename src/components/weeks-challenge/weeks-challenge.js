import React from 'react';
import './weeks-challenge.scss';

const WeeksChallenge = () => {
    return (
        <section className="weeks-challenge">
            <header className="weeks-challenge__header">
                <div className="time-left">
                    <img src="#" alt="time"/>
                    <span>6d kvar</span>
                </div>
                <h3>Veckans uppdrag</h3>
            </header>
            <div className="weeks-challenge__progress">
                <ul className="weeks-challenge__progress-list">
                    <li className="weeks-challenge__progress-item weeks-challenge__progress-item--active">
                        <div className="weeks-challenge__progress-image-task"></div>
                    </li>
                    <li className="weeks-challenge__progress-item">
                         <span className="weeks-challenge__progress-task-complete">
                            <p className="weeks-challenge__progress-xp">+300px</p>
                        </span>
                        <div className="weeks-challenge__progress-image-task"></div>

                    </li>
                    <li className="weeks-challenge__progress-item">
                         <span className="weeks-challenge__progress-task-complete">
                            <p className="weeks-challenge__progress-xp">+300px</p>
                        </span>
                        <div className="weeks-challenge__progress-image-task"></div>
                        <span className="weeks-challenge__progress-task-complete-last">
                            <p className="weeks-challenge__progress-xp">+300px</p>
                        </span>
                    </li>
                </ul>
                <ol className="weeks-challenge__check-list">
                    <li className="weeks-challenge__check-item">
                        <p>Utför veckans uppgifter</p>
                        <img src="#" alt="done"/>
                    </li>
                    <li className="weeks-challenge__check-item">
                        <p>Utför veckans uppgifter</p>
                        <img src="#" alt="done"/>
                    </li>
                </ol>
                <div className="seasonal-rewards">
                    <h3>Seasonal Rewards:</h3>
                    <ul className="seasonal-rewards__list">
                       <li className="seasonal-rewards__item">
                           <div className="icon"><img src="#" alt="complate"/></div>
                           <img src="" alt=""/>
                           <p>Avatar item</p>
                           <p>level 1</p>
                       </li>
                       <li className="seasonal-rewards__item">
                           <div className="icon"><img src="#" alt="complate"/></div>
                           <img src="" alt=""/>
                           <p>Avatar item</p>
                           <p>level 2</p>
                       </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default WeeksChallenge;