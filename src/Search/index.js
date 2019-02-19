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
    const [ countries, setCountries ] = useState([]);
    const [ isFetching, setIsFetching ] = useState(false);

    const getCountries = async () => {
        setIsFetching(true);
        const filteredCountries = await api.getCountries(filter.trim());
        setCountries(filteredCountries);
        setIsFetching(false);
    };

    console.log('→ countries', countries);

    useEffect(() => {
        getCountries();
    }, [ filter ]);

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
