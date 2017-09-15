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
        ['Box', 'Sights', 'Tastes', 'Smells', 'Touch', 'Sound'].map((title, i) =>
          <Link
            key={i}
            to={`/buildbox/${title}`}>
            {title}
          </Link>
        )
      }
    </div>
  );
}
