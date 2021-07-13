const BooksForm = () => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  return (
    <form>
      <div>
        <label htmlFor="title">
          Title:
          <input type="text" name="title" id="title" />
        </label>
      </div>
      <div>
        <label htmlFor="categories">
          Categories:
          <select name="categories" id="categories">
            <option defaultValue>Choose a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <button type="submit">Add book</button>
      </div>
    </form>
  );
};

export default BooksForm;
