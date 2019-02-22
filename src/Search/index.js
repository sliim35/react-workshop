// Core
import React, { useState, useEffect } from 'react';

import { Modal } from '../Modal';

// Instruments
import './styles.css';
import { api } from '../API';
import { delay } from '../instruments';

// Hooks
import { useDebounce } from './useDebounce';

// ↓ render()
export const Search = () => {
    // 1. ✓ input контроллируемым
    // 2. ✓ высылать запрос к серверу
    // 3. ✓ получаем страны
    // 4. вывести результат на экран

    const [ filter, setFilter ] = useState('');
    const [ countries, setCountries ] = useState([]);
    const [ isFetching, setIsFetching ] = useState(false);
    const [ isModalOpen, setModalOpen ] = useState(false);
    const [ country, setSelectedCountry ] = useState({});

    const getCountries = async () => {
        setIsFetching(true);
        const filteredCountries = await api.getCountries(filter.trim());
        await delay(200);
        setCountries(filteredCountries);
        setIsFetching(false);
    };

    const getCountry = (country) => {
        setFilter(country.name);
        setSelectedCountry(country);
        setModalOpen(true);
    };

    const onClose = () => {
        setModalOpen(false);
    };

    // debounce

    /**
     * dangerouslySetInnerHtml — ❌
     * dangerouslySetInnerHtml — ✅
     * 1. Рассмотрим юзкейс
     * 2. Годится для временных рамок формата воркшоп
     */
    const regexp = new RegExp(filter, 'gi');
    const countriesJSX = countries.map((country) => {
        const name = country.name.replace(
            regexp,
            `<span class='highlight'>${filter}</span>`,
        ).toLowerCase();

        const continent = country.continent.replace(
            regexp,
            `<span class='highlight'>${filter}</span>`,
        ).toLowerCase();

        return (
            <li
                key = { country.emoji }
                onClick = { () => getCountry(country) }>
                <span
                    className = 'country'
                    dangerouslySetInnerHTML = {{
                        __html: `${name}, ${continent}`,
                    }}
                />
                <span className = 'flag'>{country.emoji}</span>
            </li>
        );
    });

    const debouncedFilter = useDebounce(filter, 200);
    useEffect(() => {
        getCountries();
    }, [ debouncedFilter ]);

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
            <ul>{countriesJSX}</ul>
            <b />
            {isModalOpen && (
                <Modal
                    country = { country }
                    onClose = { onClose }
                />
            )
            }
        </section>
    );
};
