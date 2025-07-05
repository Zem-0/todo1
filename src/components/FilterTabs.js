import React from 'react';

const FilterTabs = ({ filter, setFilter, tasks }) => {
  const all = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = all - completed;

  return (
    <div className="filter-tabs">
      <button
        className={filter === 'all' ? 'active' : ''}
        onClick={() => setFilter('all')}
      >
        All ({all})
      </button>
      <button
        className={filter === 'completed' ? 'active' : ''}
        onClick={() => setFilter('completed')}
      >
        Completed ({completed})
      </button>
      <button
        className={filter === 'pending' ? 'active' : ''}
        onClick={() => setFilter('pending')}
      >
        Pending ({pending})
      </button>
    </div>
  );
};

export default FilterTabs; 