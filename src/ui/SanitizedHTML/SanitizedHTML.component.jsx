import React from 'react';
import sanitizeHtml from 'sanitize-html';

const SanitizedHTML = ({ html }) => {
  return <span dangerouslySetInnerHTML={{ __html: sanitizeHtml(html) }} />;
};

export default SanitizedHTML;
