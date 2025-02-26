"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ChevronRight } from "lucide-react";
import { CreateProjectDialog } from "./components/create-project-dialog";

// Mock data for demonstration
const mockProjects = [
  {
    id: "legal-research",
    name: "Legal Research Assistant",
    description: "AI-powered legal document analysis and research tool",
    documents: 156,
    lastUpdated: "2024-02-24",
  },
  {
    id: "financial-analytics",
    name: "Financial Analytics Suite",
    description: "Advanced financial modeling and risk analysis platform",
    documents: 210,
    lastUpdated: "2024-02-22",
  },
  {
    id: "market-insights",
    name: "Market Insights AI",
    description: "AI-driven market trends and investment research tool",
    documents: 189,
    lastUpdated: "2024-02-21",
  },
  {
    id: "portfolio-optimizer",
    name: "Portfolio Optimization Engine",
    description: "AI-powered investment portfolio risk and return analysis",
    documents: 342,
    lastUpdated: "2024-02-20",
  },
  {
    id: "credit-risk-ai",
    name: "Credit Risk AI",
    description: "Machine learning-based creditworthiness assessment tool",
    documents: 265,
    lastUpdated: "2024-02-19",
  },
  {
    id: "corporate-budgeting",
    name: "Corporate Budgeting & Forecasting",
    description: "Financial planning and cash flow management tool",
    documents: 290,
    lastUpdated: "2024-02-18",
  },
  {
    id: "regulatory-compliance",
    name: "Regulatory Compliance Tracker",
    description: "Automated tracking of financial regulations and compliance",
    documents: 198,
    lastUpdated: "2024-02-17",
  },
  {
    id: "expense-management",
    name: "Expense Management Suite",
    description: "Enterprise-wide expense tracking and approval system",
    documents: 176,
    lastUpdated: "2024-02-16",
  },
  {
    id: "payroll-automation",
    name: "Payroll Automation System",
    description: "Streamlined payroll processing and tax compliance tool",
    documents: 243,
    lastUpdated: "2024-02-15",
  },
  {
    id: "revenue-optimization",
    name: "Revenue Optimization Engine",
    description: "AI-driven revenue forecasting and dynamic pricing tool",
    documents: 312,
    lastUpdated: "2024-02-14",
  },
  {
    id: "fraud-detection",
    name: "Fraud Detection & Prevention AI",
    description: "Real-time transaction fraud monitoring and prevention system",
    documents: 290,
    lastUpdated: "2024-02-13",
  },
  {
    id: "talent-acquisition-ai",
    name: "AI Talent Acquisition",
    description: "AI-powered candidate sourcing and hiring analytics",
    documents: 221,
    lastUpdated: "2024-02-12",
  },
  {
    id: "performance-metrics",
    name: "Employee Performance Metrics",
    description: "HR analytics for productivity and engagement tracking",
    documents: 179,
    lastUpdated: "2024-02-11",
  },
  {
    id: "diversity-equity",
    name: "Diversity & Inclusion Analytics",
    description: "HR data-driven insights on workplace diversity",
    documents: 158,
    lastUpdated: "2024-02-10",
  },
  {
    id: "compensation-benchmarking",
    name: "Compensation Benchmarking Tool",
    description: "Salary analysis and competitive compensation insights",
    documents: 201,
    lastUpdated: "2024-02-09",
  },
  {
    id: "succession-planning",
    name: "Succession Planning AI",
    description: "HR analytics for leadership pipeline development",
    documents: 175,
    lastUpdated: "2024-02-08",
  },
  {
    id: "employee-retention",
    name: "Employee Retention Predictor",
    description: "AI-based analysis of workforce turnover risk",
    documents: 222,
    lastUpdated: "2024-02-07",
  },
  {
    id: "benefits-optimization",
    name: "Benefits Optimization System",
    description: "Data-driven employee benefits management",
    documents: 195,
    lastUpdated: "2024-02-06",
  },
  {
    id: "cfo-dashboard",
    name: "CFO Financial Insights Dashboard",
    description: "Executive-level financial reporting and KPIs",
    documents: 325,
    lastUpdated: "2024-02-05",
  },
  {
    id: "mergers-acquisitions",
    name: "M&A Deal Flow Tracker",
    description: "Data-driven insights into mergers and acquisitions",
    documents: 267,
    lastUpdated: "2024-02-04",
  },
  {
    id: "customer-lifetime-value",
    name: "Customer Lifetime Value Predictor",
    description: "AI-based revenue forecasting from customer retention data",
    documents: 280,
    lastUpdated: "2024-02-03",
  },
  {
    id: "medical-knowledge",
    name: "Medical Knowledge Base",
    description: "Comprehensive medical research and documentation system",
    documents: 324,
    lastUpdated: "2024-02-23",
  },
  {
    id: "financial-analytics",
    name: "Financial Analytics Suite",
    description: "Advanced financial modeling and risk analysis platform",
    documents: 210,
    lastUpdated: "2024-02-22",
  },
  {
    id: "market-insights",
    name: "Market Insights AI",
    description: "AI-driven market trends and investment research tool",
    documents: 189,
    lastUpdated: "2024-02-21",
  },
  {
    id: "customer-engagement",
    name: "Customer Engagement Platform",
    description: "AI-driven CRM to enhance customer interactions and retention",
    documents: 275,
    lastUpdated: "2024-02-20",
  },
  {
    id: "supply-chain-optimizer",
    name: "Supply Chain Optimizer",
    description: "Predictive logistics and inventory management system",
    documents: 132,
    lastUpdated: "2024-02-19",
  },
  {
    id: "cybersecurity-ai",
    name: "Cybersecurity AI Guard",
    description: "Threat detection and prevention system using AI",
    documents: 198,
    lastUpdated: "2024-02-18",
  },
  {
    id: "hr-talent-ai",
    name: "HR Talent AI",
    description: "Automated talent acquisition and employee analytics",
    documents: 157,
    lastUpdated: "2024-02-17",
  },
  {
    id: "real-estate-valuation",
    name: "Real Estate Valuation Engine",
    description: "AI-driven property pricing and market analysis tool",
    documents: 245,
    lastUpdated: "2024-02-16",
  },
  {
    id: "climate-data-lab",
    name: "Climate Data Lab",
    description: "AI-powered climate change and environmental impact analysis",
    documents: 315,
    lastUpdated: "2024-02-15",
  },
];

export default function ProjectsPage() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 10;
  const totalPages = Math.ceil(mockProjects.length / projectsPerPage);

  // Get current projects
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = mockProjects.slice(indexOfFirstProject, indexOfLastProject);

  // Change page
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Generate page numbers
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    // Adjust start page if we're near the end
    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header with title and create button */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <CreateProjectDialog />
      </div>

      {/* Pagination info and controls */}
      <div className="flex items-center justify-between mb-6">
        <div className="text-sm text-muted-foreground">
          Showing {indexOfFirstProject + 1} to {Math.min(indexOfLastProject, mockProjects.length)} of {mockProjects.length} projects
        </div>
        <div className="flex items-center gap-2">
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) handlePageChange(currentPage - 1);
            }}
            className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
          />
          
          <div className="flex items-center">
            {getPageNumbers().map((number) => (
              <PaginationLink
                key={number}
                href="#"
                isActive={currentPage === number}
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(number);
                }}
                className="px-3 py-1"
              >
                {number}
              </PaginationLink>
            ))}

            {currentPage + 2 < totalPages && (
              <PaginationEllipsis />
            )}
          </div>

          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) handlePageChange(currentPage + 1);
            }}
            className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Documents</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentProjects.map((project) => (
              <TableRow
                key={project.id}
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => router.push(`/comprehend/projects/${project.id}/dashboard`)}
              >
                <TableCell className="font-medium">{project.name}</TableCell>
                <TableCell>{project.description}</TableCell>
                <TableCell>{project.documents}</TableCell>
                <TableCell>{project.lastUpdated}</TableCell>
                <TableCell>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {mockProjects.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-semibold">No projects yet</h3>
          <p className="text-muted-foreground mt-2">Create your first project to get started.</p>
        </div>
      )}
    </div>
  );
}
