// Core
import React, { useState, useEffect } from 'react';

// Instruments
import './styles.css';
import { api } from '../API';
import { delay } from '../instruments';

// ↓ render()
export const Search = () => {
    // 1. input контроллируемым
    // 2. высылать запрос к серверу
    // 3. получаем страны
    // 4. вывести их на экран

    const [ filter, setFilter ] = useState('');
    const [ countries, setCountries ] = useState([]);
    const [ isFetching, setIsFetching ] = useState(false);

    const getCountries = async () => {
        setIsFetching(true);
        const filteredCountries = await api.getCountries(filter.trim());
        await delay(200);
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
                style = {{
                    '--inputBorderStyle': isFetching ? 'dashed' : 'solid',
                }}
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
