export const categoryIcons: Record<string, string> = {
  training: 'fas fa-graduation-cap',
  fun: 'fas fa-face-grin',
  informative: 'fas fa-lightbulb',
  business: 'fas fa-building',
  external: 'fas fa-person-walking-arrow-right',
  special: 'fas fa-face-grin-stars',
};

export function getCategoryIcon(category: string): string {
  return categoryIcons[category] || 'fas fa-question';
}
