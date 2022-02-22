import React from 'react';

const SuggestionsBrowser = ({suggestions, query}) => {
    const suggestionsRender = suggestions.map((suggest, index) => {
        return (
            <li className="suggestionsBrowser__item" key={index}>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="icon icon-tabler icon-tabler-arrow-forward-up" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    strokeWidth="1.5" 
                    stroke="#ffffff" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M15 13l4 -4l-4 -4m4 4h-11a4 4 0 0 0 0 8h1" />
                </svg>
                <a
                    className="suggestionsBrowser__link"
                    href={`https://google.com?q=${query}${suggest}`}
                    target="_blank"
                >
                    {query}{suggest}
                </a>
            </li>
        );
    });

    return (
        <div className="suggestionsBrowser">
            <ul className="suggestionsBrowser__list">
                {suggestionsRender}
            </ul>
        </div>
    );
};

export default SuggestionsBrowser;
