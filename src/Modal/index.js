import React from 'react';
import Tilt from 'react-vanilla-tilt';

export const Modal = ({ country, onClose }) => {
    return (
        <div className = 'modal'>
            <Tilt
                className = 'tilt'
                options = {{ scale: 2, max: 25 }}>
                <div className = 'content'>
                    <h1>
                        {`${country.name} ${country.emoji}`}
                    </h1>
                    <ul>
                        <li>
                            <span>
                                Столица:
                            </span>
                            <span>
                                {country.capital}
                            </span>
                        </li>
                        <li>
                            <span>
                                Континент:
                            </span>
                            <span>
                                {country.continent}
                            </span>
                        </li>
                        <li>
                            <span>
                                Народное имя страны:
                            </span>
                            <span>
                                {country.native}
                            </span>
                        </li>
                        <li>
                            <span>
                                Языки:
                            </span>
                            <span>
                                {
                                    country.languages
                                        .map((language) => language.native)
                                        .join(', ')
                                }
                            </span>
                        </li>
                        <li>
                            <span>
                                Валюты:
                            </span>
                            <span>
                                {
                                    country.currencies
                                        .map((currency) => currency)
                                        .join(', ')
                                }
                            </span>
                        </li>
                    </ul>
                </div>
                <div
                    className = 'close'
                    onClick = { () => onClose() }
                />
            </Tilt>
        </div>
    );
};

