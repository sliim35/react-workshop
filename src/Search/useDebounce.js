// Core
import { useState, useEffect } from 'react';

/**
 * Наш кастомный хук
 */
export const useDebounce = (value, delay) => {
    /**
     * Стейт и сеттер для нашего debounced-значения
     */
    const [ debouncedValue, setDebouncedValue ] = useState(value);

    useEffect(() => {
        /**
         * Обновлять debounced-значение спустя определённое время
         */
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearInterval(timer);
        };
    }, [ value ]);

    return debouncedValue;
};
