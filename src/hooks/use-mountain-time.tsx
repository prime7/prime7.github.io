'use client';

import { useState, useEffect } from 'react';

const useMountainTime = () => {
    const [mountainTime, setMountainTime] = useState<string>('');

    useEffect(() => {
        const updateTime = () => {
            const options: Intl.DateTimeFormatOptions = {
                timeZone: 'America/Denver',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true,
            };

            const formatter = new Intl.DateTimeFormat('en-US', options);
            setMountainTime(formatter.format(new Date()));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return mountainTime;
};

export default useMountainTime;