import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match'
import AutosuggestHighlightParse from 'autosuggest-highlight/parse'

// match suggestions for input value.
const getSuggestions = (value, truckList) => {
  const trimValue = value.trim()
  const escapedValue = trimValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  if (escapedValue === '') {
    return [];
  }
  const regex = new RegExp('\\b' + escapedValue, 'i');
  return truckList.filter(truck => regex.test(getSuggestionValue(truck)));
};

// When suggestion is clicked, populate the input based on the clicked suggestion
const getSuggestionValue = (suggestion) => {
  return suggestion.name;
}

const renderSuggestion = (suggestion, { query }) => {
  const suggestionText = suggestion.name;
  const matches = AutosuggestHighlightMatch(suggestionText, query);
  const parts = AutosuggestHighlightParse(suggestionText, matches);

  return (
    <span className="suggestion-content">
      <span className="name">
        { parts.map((part, idx) => {
            const className = part.highlight ? 'highlight' : null;
            return (
              <span className={className} key={idx}>{part.text}</span>
            );
          })
        }
        <div className="address">{suggestion.address}</div>
      </span>
    </span>
  );
}


const SearchTruck = ({ trucks, searchTruck, radius, truckList }) => {

  const [ value, setValue ] = useState('')
  const [suggestions, setSuggestion] = useState([])

  const onChange = (event, { newValue }) => {
    setValue(newValue)
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestion(getSuggestions(value, truckList))
  };

  const onSuggestionsClearRequested = () => {
      setSuggestion([])
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    searchTruck(trucks, value.toLowerCase(), radius)
  }

  const handleClear = () => {
    setValue('')
  }

  const inputProps = {
    placeholder: 'Enter food or truck name',
    value,
    onChange: onChange
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
        <button type="submit">Search</button>
        <button onClick={handleClear}>X</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    trucks: state.map.trucks,
    radius: state.map.radius,
    truckList: state.map.truckList
    };
};

export default connect( mapStateToProps, actions )(SearchTruck);
