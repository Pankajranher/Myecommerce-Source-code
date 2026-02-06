import React from 'react'
function Category({ finalCategory, setCatname }) {
  return (
    <div>
      <h2 className="font-bold mb-4 text-lg">Categories</h2>

      <ul>
        {finalCategory.map((cat) => (
          <li onClick={() => setCatname(cat.slug)}
            key={cat.slug}
            className="cursor-pointer p-2 border-b hover:bg-gray-100">
            {cat.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
