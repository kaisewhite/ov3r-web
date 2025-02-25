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
    if (index === 2) {
      // This is the project ID position
      currentPath += `/${part}`;
      segments.push({
        label: part.charAt(0).toUpperCase() + part.slice(1),
        url: `${currentPath}/dashboard`,  // Always link to dashboard
        isCurrent: false,
        isClickable: true,
      });
      return;
    }

    // Skip adding the dashboard segment if we're on a dashboard page
    // since it's already handled by the project ID segment
    if (part === "dashboard" && index === 3) {
      return;
    }

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

    // Make the current segment non-clickable if it's the chat page
    const isCurrentSegment = index === pathParts.length - 1;
    const isChatPage = part === "chat" && pathParts[index - 1] && !pathParts[index + 1];

    segments.push({
      label,
      url: currentPath,
      isCurrent: isCurrentSegment,
      isClickable: !(isCurrentSegment && isChatPage),
    });
  });

  return segments;
}
