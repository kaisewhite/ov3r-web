# OV3R Comprehend Navigation Architecture Requirements

## Overview

Implement an AWS-style navigation architecture for the OV3R Comprehend service that follows intuitive console patterns with clear hierarchy, contextual navigation, and seamless transitions between service and project views.

## Background

OV3R is a comprehensive platform offering various services, with Comprehend being a flagship RAG (Retrieval-Augmented Generation) service built with TypeScript and Node.js. Comprehend allows users to create knowledge bases by uploading documents or crawling websites, then interact with this data through an AI chatbot.

## Current Issues

1. **Double Sidebar Problem**: When navigating from service level to project level, both sidebars sometimes appear simultaneously
2. **Navigation Trapping**: Users can become trapped in project views without clear path back to the projects list
3. **Inconsistent Context Switching**: The UI doesn't clearly transition between service and project contexts
4. **Generic Project Labeling**: Projects are sometimes labeled generically rather than with their specific names
5. **Broken Layout Rendering**: Some views show incomplete or incorrectly rendered navigation elements

## Navigation Requirements

### 1. Breadcrumb-Based Navigation

- **Complete Path Display**: Implement comprehensive breadcrumb trails showing the full hierarchy:
  ```
  OV3R > Comprehend > Projects > [Project Name] > [Current Section]
  ```
- **Clickable Breadcrumbs**: Each segment should be independently clickable to navigate to that level
- **Visual Styling**: Use clear chevron separators (>) between segments with appropriate hover effects
- **Current Location**: Highlight the current location within the breadcrumb trail

### 2. Context-Aware Sidebar Management

- **Complete Context Switching**: When moving between service and project contexts, completely replace one sidebar with another
- **Service Context Sidebar**: When at the Comprehend service level, show:
  - Link
  - Text
  - FAQ
  - Document
  - Zoho
- **Project Context Sidebar**: When in a project view, show project-specific navigation:
  - Dashboard
  - Conversations
  - Settings
  - Integrations (GitHub, API)
  - Help (Documentation)
- **No Overlap**: Never display both sidebars simultaneously

### 3. URL and Routing Structure

- **Consistent URL Patterns**: Implement a consistent URL hierarchy:
  - `/comprehend/projects` - Projects list view
  - `/comprehend/projects/[project-id]/[section]` - Project-specific views
- **Default Landing Page**: Set Dashboard as the default landing page when entering a project
- **Context Detection**: Implement state management to detect context based on current route

### 4. Project Identity and Navigation

- **Use Actual Project Names**: Always display the specific project name (e.g., "Legal Research Assistant") in all UI elements:
  - Window title
  - Breadcrumbs
  - Page headers
  - Navigation elements
- **Project Switching**: Provide a mechanism to switch between projects without returning to the projects list

### 5. Back Navigation

- **Primary Back via Breadcrumbs**: Implement breadcrumb navigation as the primary way to move back up the hierarchy
- **Supplementary Back Button**: Include an explicit back button at the project level for additional clarity

## Implementation Guidelines

### Layout Structure

The application should consistently manage layouts to ensure proper context switching:

```jsx
<AppLayout>
  <GlobalHeader /> {/* Persistent across all views */}
  <Breadcrumbs currentPath={currentPath} /> {/* Dynamic based on context */}
  <div className='content-wrapper'>
    {isProjectContext ? <ProjectSidebar projectId={projectId} /> : <ServiceSidebar />}
    <MainContent />
  </div>
</AppLayout>
```

### Context Detection Logic

```javascript
// Determine context based on route
function detectNavigationContext(route) {
  if (route.includes("/comprehend/projects/") && route.split("/").length > 3) {
    return "PROJECT";
  }
  return "SERVICE";
}
```

### AWS-Style Breadcrumb Component

```jsx
function Breadcrumbs({ currentPath }) {
  const pathSegments = parsePathToSegments(currentPath);

  return (
    <nav className='breadcrumb-navigation'>
      {pathSegments.map((segment, index) => (
        <>
          <a href={segment.url} className={index === pathSegments.length - 1 ? "current" : ""}>
            {segment.label}
          </a>
          {index < pathSegments.length - 1 && <span className='separator'>›</span>}
        </>
      ))}
    </nav>
  );
}
```

## Visual Design Requirements

1. **Breadcrumb Styling**:

   - Use subtle visual separators between breadcrumb items
   - Current location should be visually distinct (weight, color)
   - Previous levels should be clickable with appropriate hover states

2. **Sidebar Consistency**:

   - Maintain visual consistency between service and project sidebars
   - Use clear section headers and icons
   - Highlight active/selected items
   - Allow collapsible sections for better organization

3. **Layout Transitions**:
   - Implement subtle animations for context transitions
   - Ensure the user understands when context changes occur

## Example Navigation Flows

### Project Entry Flow:

1. User is at `/comprehend/projects` viewing the projects list
2. User clicks on "Legal Research Assistant" project
3. System navigates to `/comprehend/projects/legal-Research-assistant/dashboard`
4. Service sidebar is completely replaced by project sidebar
5. Breadcrumb updates to "OV3R > Comprehend > Projects > Legal Research Assistant > Dashboard"

### Return to Projects Flow:

1. User is in project view at `/comprehend/projects/legal-Research-assistant/conversations`
2. User clicks "Projects" in the breadcrumb
3. System navigates to `/comprehend/projects`
4. Project sidebar is completely replaced by service sidebar
5. Breadcrumb updates to "OV3R > Comprehend > Projects"

## Success Criteria

1. No dual sidebars visible in any navigation state
2. Users can navigate to any level of the hierarchy via breadcrumbs
3. Project context always shows the specific project name
4. Users never become trapped in a view without obvious navigation out
5. Consistent visual design across all navigation elements
6. Navigation experience matches AWS console patterns for familiarity
