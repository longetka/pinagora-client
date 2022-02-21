import React from 'react';

const SuggestionsBrowser = ({suggestions}) => {
    const suggestionsRender = suggestions.map((suggest, index) => {
        return (
            <li className="suggestionsBrowser__item" key={index}>
                {suggest}
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
