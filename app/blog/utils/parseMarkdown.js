import { remark } from 'remark';
import html from 'remark-html';

export const parseMarkdown = (markdown) => {
  const result = remark().use(html).processSync(markdown);
  return result.toString();
};
