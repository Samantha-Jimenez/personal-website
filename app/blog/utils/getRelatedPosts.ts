import { getAllPosts, Post } from './getAllPosts';

/**
 * Get related posts based on shared tags
 * Returns up to 3 posts that share the most tags with the current post
 */
export function getRelatedPosts(currentSlug: string, currentTags: string[], limit: number = 3): Post[] {
  const allPosts = getAllPosts();
  
  // Filter out the current post and calculate relevance score
  const postsWithScore = allPosts
    .filter(post => post.slug !== currentSlug)
    .map(post => {
      // Count how many tags match
      const sharedTags = post.tags.filter((tag: string) => currentTags.includes(tag));
      return {
        post,
        score: sharedTags.length,
      };
    })
    // Only include posts with at least one shared tag
    .filter(item => item.score > 0)
    // Sort by score (most shared tags first), then by date (newest first)
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
    });

  // Return only the posts (without scores), limited to the requested number
  return postsWithScore.slice(0, limit).map(item => item.post);
}
