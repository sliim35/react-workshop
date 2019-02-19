// Core
import React, { useState } from 'react';

// Instruments
import './styles.css';

export const Search = () => {
    // 1. input контроллируемым
    // 2. высылать запрос к серверу

    const [ filter, setFilter ] = useState('');

    console.log('→ filter', filter);

    return (
        <section className = 'strange-search'>
            <span className = 'strange'>Странный</span>
            <input
                placeholder = 'Страна или континент'
                type = 'text'
                value = { filter }
                onChange = { (event) => setFilter(event.target.value) }
            />
            <span className = 'search'>поиск</span>
            <ul>
                <li>hello</li>
            </ul>
            <b />
        </section>
    );
};
