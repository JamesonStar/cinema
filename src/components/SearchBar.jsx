import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

const SearchBar = ({ placeholder = 'Search...', onSearch, className = '' }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
      <Input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1"
      />
      <Button type="submit" size="md">Search</Button>
    </form>
  );
};

export default SearchBar;
