/**
 * Navigation context types
 */
export type NavigationContext = "SERVICE" | "PROJECT";

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
  if (pathname.includes("/comprehend/projects/") && pathname.split("/").length > 3) {
    return "PROJECT";
  }
  return "SERVICE";
}

/**
 * Parse current path into breadcrumb segments
 */
export function parsePathToSegments(pathname: string): BreadcrumbSegment[] {
  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs: BreadcrumbSegment[] = [];
  let currentPath = "";

  // Add root
  breadcrumbs.push({
    label: "OV3R",
    url: "/",
    isCurrent: segments.length === 0
  });

  // Build segments
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    
    // Handle project ID segment
    const label = segment.startsWith("[") ? "Project Name" : segment.charAt(0).toUpperCase() + segment.slice(1);
    
    breadcrumbs.push({
      label,
      url: currentPath,
      isCurrent: index === segments.length - 1
    });
  });

  return breadcrumbs;
}
