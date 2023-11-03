// Without "classnames" library.

<div className={`item${className ? ' ' + className : ''}`}></div>;

// With "classnames" library.
import c from 'classnames';

<div className={c('item', className)}></div>;
