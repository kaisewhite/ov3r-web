"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { HelpCircle } from "lucide-react"

export default function FilesPage() {
  return (
    <div className="flex-1 h-full">
      <div className="bg-gray-50 rounded-lg">
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="w-[40px] p-4"><Checkbox /></TableHead>
              <TableHead className="font-medium text-gray-700">Job ID</TableHead>
              <TableHead className="font-medium text-gray-700">File name</TableHead>
              <TableHead className="font-medium text-gray-700">Size</TableHead>
              <TableHead className="font-medium text-gray-700">Characters</TableHead>
              <TableHead className="font-medium text-gray-700">Status</TableHead>
              <TableHead className="font-medium text-gray-700">Started</TableHead>
              <TableHead className="font-medium text-gray-700">Completed</TableHead>
              <TableHead className="font-medium text-gray-700">Error Message</TableHead>
              <TableHead className="w-[40px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="p-4"><Checkbox /></TableCell>
              <TableCell className="font-mono text-sm">job_23k4j23l4</TableCell>
              <TableCell className="font-medium">Kaise White.doc</TableCell>
              <TableCell>90 KB</TableCell>
              <TableCell>9,855</TableCell>
              <TableCell>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-700">
                  Pending
                  <HelpCircle className="w-4 h-4 ml-2 text-gray-500" />
                </div>
              </TableCell>
              <TableCell>Feb 25, 09:30 AM</TableCell>
              <TableCell>—</TableCell>
              <TableCell>—</TableCell>
              <TableCell>
                <button className="text-gray-400 hover:text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m-6 0h6M5 6v14a2 2 0 002 2h10a2 2 0 002-2V6H5z" />
                  </svg>
                </button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="p-4"><Checkbox /></TableCell>
              <TableCell className="font-mono text-sm">job_98h7g6f5</TableCell>
              <TableCell className="font-medium">Annual Report.pdf</TableCell>
              <TableCell>4.2 MB</TableCell>
              <TableCell>42,621</TableCell>
              <TableCell>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700">
                  Completed
                </div>
              </TableCell>
              <TableCell>Feb 24, 11:15 AM</TableCell>
              <TableCell>Feb 24, 11:20 AM</TableCell>
              <TableCell>—</TableCell>
              <TableCell>
                <button className="text-gray-400 hover:text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m-6 0h6M5 6v14a2 2 0 002 2h10a2 2 0 002-2V6H5z" />
                  </svg>
                </button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="p-4"><Checkbox /></TableCell>
              <TableCell className="font-mono text-sm">job_45t6y7u8</TableCell>
              <TableCell className="font-medium">Meeting Notes.txt</TableCell>
              <TableCell>12 KB</TableCell>
              <TableCell>1,548</TableCell>
              <TableCell>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                  Processing
                </div>
              </TableCell>
              <TableCell>Feb 25, 10:05 AM</TableCell>
              <TableCell>—</TableCell>
              <TableCell className="text-red-600">Failed to parse file format</TableCell>
              <TableCell>
                <button className="text-gray-400 hover:text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m-6 0h6M5 6v14a2 2 0 002 2h10a2 2 0 002-2V6H5z" />
                  </svg>
                </button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}