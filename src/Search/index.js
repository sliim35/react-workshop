// Core
import React from 'react';

// Instruments
import './styles.css';

export const Search = () => {
    // 1. input контроллируемым
    // 2. высылать запрос к серверу
    return (
        <section className = 'strange-search'>
            <span className = 'strange'>Странный</span>
            <input
                placeholder = 'Страна или континент'
                type = 'text'
            />
            <span className = 'search'>поиск</span>
            <ul>
                <li>hello</li>
            </ul>
            <b />
        </section>
    );
};
