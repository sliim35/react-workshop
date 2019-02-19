// Core
import React, { useState, useEffect } from 'react';

// Instruments
import './styles.css';
import { api } from '../API';

// ↓ render()
export const Search = () => {
    // 1. input контроллируемым
    // 2. высылать запрос к серверу

    const [ filter, setFilter ] = useState('');

    const getCountries = async () => {
        const filteredCountries = await api.getCountries(filter);

        console.log('→ filteredCountries', filteredCountries);
    };

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
