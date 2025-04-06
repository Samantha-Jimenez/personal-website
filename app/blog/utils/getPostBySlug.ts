import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getPostBySlug = (slug: string) => {
  const filePath = path.join(process.cwd(), 'app/blog/posts', `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    data,
    content,
  };
}; 