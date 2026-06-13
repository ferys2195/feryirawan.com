import type { Project } from "@/types";

/**
 * Sort projects: pinned first, then by sort_order, then alphabetically by name.
 * Returns a new sorted array without mutating the original.
 */
export function sortProjects(projects: Project[]): Project[] {
  return [...projects].sort((a, b) => {
    // Pinned projects first
    if (a.is_pin && !b.is_pin) return -1;
    if (!a.is_pin && b.is_pin) return 1;
    // Then by sort_order
    const orderA = a.sort_order ?? 999;
    const orderB = b.sort_order ?? 999;
    if (orderA !== orderB) return orderA - orderB;
    // Finally by name (alphabetical ascending)
    return (a.name ?? "").localeCompare(b.name ?? "");
  });
}
