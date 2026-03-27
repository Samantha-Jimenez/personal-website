/**
 * Calculate estimated reading time based on word count
 * Average reading speed: 200 words per minute
 */
export function calculateReadingTime(content: string): string {
  // Remove MDX/JSX components and special syntax
  const cleanContent = content
    .replace(/<[^>]*>/g, '') // Remove HTML/JSX tags
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]*`/g, '') // Remove inline code
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // Convert links to just text
    .replace(/[#*_~]/g, '') // Remove markdown formatting
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim();

  // Count words
  const words = cleanContent.split(/\s+/).filter(word => word.length > 0);
  const wordCount = words.length;

  // Calculate reading time (200 words per minute)
  const minutes = Math.ceil(wordCount / 200);

  if (minutes < 1) {
    return '1 min read';
  }

  return `${minutes} min read`;
}
