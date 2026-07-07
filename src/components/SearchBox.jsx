function SearchBox() {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="部品名を検索..."
      />
      <button>検索</button>
    </div>
  );
}

export default SearchBox;