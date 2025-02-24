/**
 * Navigation context types
 */
export type NavigationContext = "SERVICE" | "PROJECT" | "CHAT" | "NONE";

/**
 * Path segment interface
 */
export interface PathSegment {
  label: string;
  url: string;
  isCurrent: boolean;
  isClickable?: boolean;
}

/**
 * Detect navigation context based on current route
 */
export function detectNavigationContext(pathname: string): NavigationContext {
  const pathParts = pathname.split("/");
  
  if (pathname.startsWith("/comprehend/projects/") && pathParts.length > 3) {
    // Check if we're in a chat page
    if (pathParts.includes("chat")) {
      return "CHAT";
    }
    return "PROJECT";
  } else if (pathname.startsWith("/comprehend/")) {
    return "SERVICE";
  }
  return "NONE";
}

/**
 * Parse current path into path segments
 */
export function parsePathToSegments(pathname: string): PathSegment[] {
  if (!pathname) return [];

  // Split the path into segments and remove empty strings
  const pathParts = pathname.split("/").filter(Boolean);
  const segments: PathSegment[] = [];
  let currentPath = "";

  // Build up the segments
  pathParts.forEach((part, index) => {
    // Handle project ID in different contexts
    if (index === 2) { // This is the project ID position
      if (pathParts[index + 1] === "chat") {
        // In chat context, link to dashboard
        currentPath = `/${pathParts[0]}/${pathParts[1]}/${part}/dashboard`;
      } else if (pathParts[index + 1] === "dashboard") {
        // In dashboard context, make non-clickable
        currentPath += `/${part}`;
        segments.push({
          label: part.charAt(0).toUpperCase() + part.slice(1),
          url: currentPath,
          isCurrent: false,
          isClickable: false
        });
        return;
      } else {
        currentPath += `/${part}`;
      }
    } else {
      currentPath += `/${part}`;
    }

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
      case "chat":
        label = "Chat";
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
      case "dashboard":
        label = "Dashboard";
        break;
    }

    segments.push({
      label,
      url: currentPath,
      isCurrent: index === pathParts.length - 1,
      isClickable: true
    });
  });

  return segments;
}
