// Translate.js
import React from 'react';
import { useTranslation } from 'react-i18next';

function Translate({ children }) {
  const { t } = useTranslation();

  const translateChildren = (children) => {
    return React.Children.map(children, child => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          children: translateChildren(child.props.children)
        });
      } else if (typeof child === 'string') {
        return t(child); // Translate the string
      } else {
        return child;
      }
    });
  };

  return <>{translateChildren(children)}</>;
}

export default Translate;
