// Core
import { useState, useEffect } from 'react';

/**
 * Наш кастомный хук
 */
export const useDebounce = (value, delay) => {
    const [ debouncedValue, setDebouncedValue ] = useState(value);

    return debouncedValue;
};
