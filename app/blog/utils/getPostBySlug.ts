import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getPostBySlug = (slug: string) => {
  const mdxFilePath = path.join(process.cwd(), 'app/blog/posts', `${slug}.mdx`);
  const mdFilePath = path.join(process.cwd(), 'app/blog/posts', `${slug}.md`);

  let fileContents;
  let fileExists = false;

  // Check if the .mdx file exists
  if (fs.existsSync(mdxFilePath)) {
    fileContents = fs.readFileSync(mdxFilePath, 'utf8');
    fileExists = true;
  } 
  // Check if the .md file exists
  else if (fs.existsSync(mdFilePath)) {
    fileContents = fs.readFileSync(mdFilePath, 'utf8');
    fileExists = true;
  }

  if (!fileExists || !fileContents) {
    throw new Error(`Post not found: ${slug}`);
  }

  const { data, content } = matter(fileContents);
  
  return {
    data,
    content,
  };
}; 
