/**
 * Navigation context types
 */
export type NavigationContext = "SERVICE" | "PROJECT" | "NONE";

/**
 * Breadcrumb segment interface
 */
export interface BreadcrumbSegment {
  label: string;
  url: string;
  isCurrent: boolean;
}

/**
 * Detect navigation context based on current route
 */
export function detectNavigationContext(pathname: string): NavigationContext {
  if (pathname.startsWith("/comprehend/projects/")) {
    return "PROJECT";
  } else if (pathname.startsWith("/comprehend/")) {
    return "SERVICE";
  }
  return "NONE";
}

/**
 * Parse current path into breadcrumb segments
 */
export function parsePathToSegments(pathname: string): BreadcrumbSegment[] {
  if (!pathname) return [];

  // Split the path into segments and remove empty strings
  const pathParts = pathname.split("/").filter(Boolean);
  const segments: BreadcrumbSegment[] = [];
  let currentPath = "";

  // Build up the segments
  pathParts.forEach((part, index) => {
    currentPath += `/${part}`;

    // Format the label
    let label = part.charAt(0).toUpperCase() + part.slice(1);
    
    // Special cases for known paths
    switch (part) {
      case "comprehend":
        label = "Comprehend";
        break;
      case "projects":
        label = "Projects";
        break;
      case "conversations":
        label = "Conversations";
        break;
      case "settings":
        label = "Settings";
        break;
      case "integrations":
        label = "Integrations";
        break;
      case "help":
        label = "Help";
        break;
    }

    segments.push({
      label,
      url: currentPath,
      isCurrent: currentPath === pathname,
    });
  });

  return segments;
}
