"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database } from "lucide-react";
import { AddDataSourceDialog } from "./components/add-data-source-dialog";
import { useState } from "react";
import {
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
  PaginationEllipsis,
} from "@/components/ui/pagination";

export default function KnowledgeBasePage() {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;

  // Mock jobs data
  const mockJobs = [
    {
      id: "DOC001",
      type: "Document",
      name: "Quarterly Financial Report.pdf",
      status: "Completed",
      added: "Feb 26, 2025",
    },
    {
      id: "LINK001",
      type: "Link",
      name: "https://finance.example.com/market-analysis",
      status: "Completed",
      added: "Feb 26, 2025",
    },
    {
      id: "TXT001",
      type: "Text",
      name: "Revenue Forecast Notes",
      status: "Pending",
      added: "Feb 26, 2025",
    },
    {
      id: "DOC002",
      type: "Document",
      name: "Investment Strategy Guide.pdf",
      status: "Completed",
      added: "Feb 25, 2025",
    },
    {
      id: "LINK002",
      type: "Link",
      name: "https://finance.example.com/tax-regulations",
      status: "Failed",
      added: "Feb 25, 2025",
    },
    {
      id: "DOC003",
      type: "Document",
      name: "Risk Management Framework.pdf",
      status: "Processing",
      added: "Feb 25, 2025",
    },
    {
      id: "TXT002",
      type: "Text",
      name: "Compliance Updates",
      status: "Completed",
      added: "Feb 24, 2025",
    },
    {
      id: "DOC004",
      type: "Document",
      name: "Mergers & Acquisitions Report.pdf",
      status: "Completed",
      added: "Feb 24, 2025",
    },
    {
      id: "LINK003",
      type: "Link",
      name: "https://finance.example.com/market-trends",
      status: "Completed",
      added: "Feb 24, 2025",
    },
    {
      id: "DOC005",
      type: "Document",
      name: "Regulatory Compliance Handbook.pdf",
      status: "Completed",
      added: "Feb 24, 2025",
    },
    {
      id: "TXT003",
      type: "Text",
      name: "Investment Portfolio Adjustments",
      status: "Processing",
      added: "Feb 23, 2025",
    },
    {
      id: "DOC006",
      type: "Document",
      name: "Corporate Budgeting Guide.pdf",
      status: "Completed",
      added: "Feb 23, 2025",
    },
    {
      id: "DOC007",
      type: "Document",
      name: "Cost Reduction Strategies.pdf",
      status: "Completed",
      added: "Feb 23, 2025",
    },
    {
      id: "LINK004",
      type: "Link",
      name: "https://finance.example.com/economic-indicators",
      status: "Processing",
      added: "Feb 22, 2025",
    },
    {
      id: "DOC008",
      type: "Document",
      name: "Tax Optimization Strategies.pdf",
      status: "Failed",
      added: "Feb 22, 2025",
    },
    {
      id: "TXT004",
      type: "Text",
      name: "CFO Insights - Financial Projections",
      status: "Completed",
      added: "Feb 22, 2025",
    },
    {
      id: "DOC009",
      type: "Document",
      name: "Private Equity Overview.pdf",
      status: "Completed",
      added: "Feb 21, 2025",
    },
    {
      id: "LINK005",
      type: "Link",
      name: "https://finance.example.com/debt-management",
      status: "Completed",
      added: "Feb 21, 2025",
    },
    {
      id: "DOC010",
      type: "Document",
      name: "Economic Impact Assessment.pdf",
      status: "Completed",
      added: "Feb 20, 2025",
    },
    {
      id: "TXT005",
      type: "Text",
      name: "Market Sentiment Analysis",
      status: "Pending",
      added: "Feb 20, 2025",
    },
  ];


  // Pagination calculations
  const totalJobs = mockJobs.length;
  const totalPages = Math.ceil(totalJobs / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = mockJobs.slice(indexOfFirstJob, indexOfLastJob);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Get page numbers to display
  const getPageNumbers = () => {
    const delta = 2;
    const range = [];
    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      range.unshift("...");
    }
    if (currentPage + delta < totalPages - 1) {
      range.push("...");
    }

    range.unshift(1);
    if (totalPages !== 1) {
      range.push(totalPages);
    }

    return range;
  };

  return (
    <div className="flex-1 h-full pt-6 px-6">
      <div className="flex gap-4">
        {/* Left side: Jobs Table */}
        <div className="w-1/2">
          <Card className="border border-gray-200 shadow-md overflow-hidden">
            <CardHeader className="bg-gray-50 pb-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-gray-700" />
                  <CardTitle className="text-xl text-gray-900">Previous Jobs</CardTitle>
                </div>
                <AddDataSourceDialog />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {/* Pagination controls */}
              <div className="px-4 py-2 bg-white border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Showing {indexOfFirstJob + 1} to {Math.min(indexOfLastJob, totalJobs)} of {totalJobs} jobs
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

                    <div className="flex items-center gap-1">
                      {getPageNumbers().map((number, index) => (
                        typeof number === "number" ? (
                          <PaginationLink
                            key={index}
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
                        ) : (
                          <PaginationEllipsis key={index} />
                        )
                      ))}
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
              </div>

              <div className="max-h-[calc(100vh-14rem)] overflow-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50 border-t border-gray-200">
                      <TableHead className="w-[40px] p-4 sticky top-0 bg-gray-50 z-10 first:rounded-tl-lg"><Checkbox /></TableHead>
                      <TableHead className="font-medium text-gray-600 sticky top-0 bg-gray-50 z-10">ID</TableHead>
                      <TableHead className="font-medium text-gray-600 sticky top-0 bg-gray-50 z-10">Type</TableHead>
                      <TableHead className="font-medium text-gray-600 sticky top-0 bg-gray-50 z-10">Name/URL</TableHead>
                      <TableHead className="font-medium text-gray-600 sticky top-0 bg-gray-50 z-10">Status</TableHead>
                      <TableHead className="font-medium text-gray-600 sticky top-0 bg-gray-50 z-10">Added</TableHead>
                      <TableHead className="w-[40px] sticky top-0 bg-gray-50 z-10 last:rounded-tr-lg"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentJobs.map((job) => (
                      <TableRow key={job.id} className="border-t border-gray-200">
                        <TableCell className="p-4"><Checkbox /></TableCell>
                        <TableCell className="font-medium">{job.id}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1.5">
                            <Database className="h-4 w-4 text-gray-600" />
                            <span>{job.type}</span>
                          </div>
                        </TableCell>
                        <TableCell>{job.name}</TableCell>
                        <TableCell>
                          <div className={`inline-flex items-center px-3 py-1 rounded-full ${job.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : job.status === "Pending"
                                ? "bg-amber-100 text-amber-700"
                                : job.status === "Failed"
                                  ? "bg-red-100 text-red-700"
                                  : "bg-blue-100 text-blue-700"
                            }`}>
                            {job.status}
                          </div>
                        </TableCell>
                        <TableCell>{job.added}</TableCell>
                        <TableCell>
                          <button className="text-gray-400 hover:text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m-6 0h6M5 6v14a2 2 0 002 2h10a2 2 0 002-2V6H5z" />
                            </svg>
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right side: Knowledge Base Details */}
        <div className="w-1/2">
          <Card className="border border-gray-200 shadow-md">
            <CardHeader className="bg-gray-50 pb-4 rounded-t-lg">
              <div className="flex items-center gap-2">
                <Database className="h-5 w-5 text-gray-700" />
                <CardTitle className="text-xl text-gray-900">Knowledge Base Details</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">Knowledge Base Name</h3>
                  <p className="text-gray-600">Customer Support KB</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Description</h3>
                  <p className="text-gray-600">Knowledge base for customer support documentation and FAQs.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Statistics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Total Documents</p>
                      <p className="text-2xl font-semibold">156</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Last Updated</p>
                      <p className="text-2xl font-semibold">2h ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
