import React, { useEffect } from 'react';
export const GoogleTranslateContext = React.createContext();

const GoogleTranslateProvider = ({ children }) => {
    useEffect(() => {
        // Function to initialize the Google Translate element
        function googleTranslateElementInit() {
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: 'en',
                    layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                },
                'google_translate_element'
            );
        }

        // Check if the script is already loaded to avoid duplicating script tags
        if (!window.googleTranslateElementInit) {
            // Load the Google Translate script
            const script = document.createElement('script');
            script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            script.async = true;
            document.body.appendChild(script);

            // Define the callback function globally
            window.googleTranslateElementInit = googleTranslateElementInit;
        } else {
            // If script is already loaded, just initialize the Google Translate element
            googleTranslateElementInit();
        }

    }, []); // Pass the current path as a dependency

    return (
        <>
            {children}
        </>
    );
};

export default GoogleTranslateProvider;
