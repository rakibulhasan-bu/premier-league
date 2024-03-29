/* eslint-disable @next/next/no-async-client-component */
'use client';

// import React, { useEffect } from 'react';
import Script from 'next/script';
export default function Widget() {

    // useEffect(() => {
    //     // Function to dynamically load the external script
    //     const loadScript = () => {
    //         const script = document.createElement('script');
    //         script.src = 'https://widgets.api-sports.io/2.0.3/widgets.js';
    //         script.type = 'module';
    //         // script.async = true;
    //         document.body.appendChild(script);
    //     };

    //     loadScript();
    // }, []);

    return (
        <>
            <Script
                src="https://widgets.api-sports.io/2.0.3/widgets.js"
                strategy="beforeInteractive"
            />
            <div
                id="wg-api-football-games"
                data-host="api-football-v1.p.rapidapi.com"
                data-key="o7sjBtY7kTZlMse12Zd4m6AgwybNyTIM"
                data-date=""
                data-league="39"
                data-season="2023"
                data-theme="grey"
                data-refresh=""
                data-show-toolbar="true"
                data-show-errors="false"
                data-show-logos="true"
                data-modal-game="true"
                data-modal-standings="true"
                data-modal-show-logos="true"
            ></div>
        </>
    );
}