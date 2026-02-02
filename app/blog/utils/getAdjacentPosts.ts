import { getAllPosts, Post } from './getAllPosts';

export interface AdjacentPosts {
  previousPost: Post | null;
  nextPost: Post | null;
}

/**
 * Get the previous and next posts relative to the current post
 * Posts are ordered by date (newest first), so:
 * - "Previous" = older post (next in the array)
 * - "Next" = newer post (previous in the array)
 */
export function getAdjacentPosts(currentSlug: string): AdjacentPosts {
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex(post => post.slug === currentSlug);

  if (currentIndex === -1) {
    return { previousPost: null, nextPost: null };
  }

  // Previous post = older = next index in array (posts are sorted newest first)
  const previousPost = currentIndex < allPosts.length - 1 
    ? allPosts[currentIndex + 1] 
    : null;

  // Next post = newer = previous index in array
  const nextPost = currentIndex > 0 
    ? allPosts[currentIndex - 1] 
    : null;

  return { previousPost, nextPost };
}
