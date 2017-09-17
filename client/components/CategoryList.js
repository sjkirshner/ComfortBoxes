import React from 'react';
import { Link } from 'react-router-dom';

/**
 * CategoryList component:
 *   renders Links of categories
 */
export default function CategoryList ({categories}) {

  return (
    <div className='categoryList'>
      {
        categories.map((category, i) =>
          <Link
            key={i}
            to={`/buildbox/${category.title}`}>
            {category.title}
          </Link>
        )
      }
    </div>
  );
}
