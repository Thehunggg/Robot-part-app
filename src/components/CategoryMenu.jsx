function CategoryMenu() {
  const categories = [
    "すべて",
    "モーター",
    "センサー",
    "マイコン",
    "バッテリー",
  ];

  return (
    <section>
      <h2 className="section-title">カテゴリー</h2>

      <div className="category-menu">
        {categories.map((category) => (
          <button key={category}>
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}

export default CategoryMenu;