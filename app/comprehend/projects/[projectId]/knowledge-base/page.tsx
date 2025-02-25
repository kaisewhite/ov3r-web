"use client";

/* import { useParams } from "next/navigation"; */
import { Button } from "@/components/ui/button";
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

export default function KnowledgeBasePage() {
  /* const params = useParams(); */
  /* const projectId = params.projectId as string; */

  return (
    <div className="flex-1 h-full pt-6 px-6">
      <div className="flex gap-6">
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
                    {/* Document entry */}
                    <TableRow className="border-t border-gray-200">
                      <TableCell className="p-4"><Checkbox /></TableCell>
                      <TableCell className="font-medium">DOC001</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1.5">
                          <Database className="h-4 w-4 text-gray-600" />
                          <span>Document</span>
                        </div>
                      </TableCell>
                      <TableCell>Kaise White.doc</TableCell>
                      <TableCell>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-700">
                          Pending
                        </div>
                      </TableCell>
                      <TableCell>Feb 25, 2025</TableCell>
                      <TableCell>
                        <button className="text-gray-400 hover:text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m-6 0h6M5 6v14a2 2 0 002 2h10a2 2 0 002-2V6H5z" />
                          </svg>
                        </button>
                      </TableCell>
                    </TableRow>

                    {/* Link entry */}
                    <TableRow className="border-t border-gray-200">
                      <TableCell className="p-4"><Checkbox /></TableCell>
                      <TableCell className="font-medium">LINK001</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1.5">
                          <Database className="h-4 w-4 text-gray-600" />
                          <span>Link</span>
                        </div>
                      </TableCell>
                      <TableCell>https://example.com/page1</TableCell>
                      <TableCell>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700">
                          Completed
                        </div>
                      </TableCell>
                      <TableCell>Feb 24, 2025</TableCell>
                      <TableCell>
                        <button className="text-gray-400 hover:text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m-6 0h6M5 6v14a2 2 0 002 2h10a2 2 0 002-2V6H5z" />
                          </svg>
                        </button>
                      </TableCell>
                    </TableRow>

                    {/* Text entry */}
                    <TableRow className="border-t border-gray-200">
                      <TableCell className="p-4"><Checkbox /></TableCell>
                      <TableCell className="font-medium">TXT001</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1.5">
                          <Database className="h-4 w-4 text-gray-600" />
                          <span>Text</span>
                        </div>
                      </TableCell>
                      <TableCell>Meeting Notes.txt</TableCell>
                      <TableCell>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                          Processing
                        </div>
                      </TableCell>
                      <TableCell>Feb 25, 2025</TableCell>
                      <TableCell>
                        <button className="text-gray-400 hover:text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m-6 0h6M5 6v14a2 2 0 002 2h10a2 2 0 002-2V6H5z" />
                          </svg>
                        </button>
                      </TableCell>
                    </TableRow>

                    {/* More entries to demonstrate scrolling */}
                    {[...Array(7)].map((_, i) => (
                      <TableRow key={i} className="border-t border-gray-200">
                        <TableCell className="p-4"><Checkbox /></TableCell>
                        <TableCell className="font-medium">{`DOC00${i + 4}`}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1.5">
                            <Database className="h-4 w-4 text-gray-600" />
                            <span>Document</span>
                          </div>
                        </TableCell>
                        <TableCell>{`Sample Document ${i + 1}.pdf`}</TableCell>
                        <TableCell>
                          <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700">
                            Completed
                          </div>
                        </TableCell>
                        <TableCell>Feb 23, 2025</TableCell>
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

        {/* Right side: Knowledge Base Info */}
        <div className="w-1/2 flex flex-col gap-6">
          {/* What is Knowledge Base Card */}
          <Card className="border border-gray-200 shadow-md overflow-hidden">
            <CardHeader className="bg-gray-50 pb-6 rounded-t-lg">
              <div className="flex items-center gap-3 mb-2">
                <Database className="h-6 w-6 text-gray-700" />
                <CardTitle className="text-xl text-gray-900">What is the Knowledge Base?</CardTitle>
              </div>
              <p className="text-base text-gray-600">
                Learn about the Knowledge Base and how it works.
              </p>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-gray-700 text-sm leading-relaxed">
                The Knowledge Base is where you&apos;ll find all your AI&apos;s training data. You can add data from various sources like &quot;Website&quot;, &quot;Documents&quot;, &quot;Text&quot;, and more.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mt-4">
                When a user asks a question, the AI searches the Knowledge Base for relevant information and
                returns the best answer based on the data it finds.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mt-4 font-medium">
                If your chatbot&apos;s &quot;Response Source&quot; is set to &quot;Knowledge Base&quot;,
                it&apos;s essential to populate it with information for the AI to use.
              </p>
            </CardContent>
          </Card>

          {/* Data Source Types */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-gray-600" />
                  <CardTitle className="text-lg text-gray-900">Website URL</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Enter the URL of a website to crawl. The crawler will fetch all the pages on your website.</p>
                <p className="text-sm text-gray-500 mt-2">Note: maximum number of pages that can be crawled is 1,000. If there are more pages, use the Sitemap or URL</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-gray-600" />
                  <CardTitle className="text-lg text-gray-900">Documents</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Upload and train the chatbot on your documents.</p>
                <p className="text-sm text-gray-500 mt-2">Supported files: PDF, TXT, Microsoft Word</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-gray-600" />
                  <CardTitle className="text-lg text-gray-900">Text</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Enter the text that you want to train the chatbot on. Ideally, this would be the information you want the chatbot to learn, which may not be available via other sources such as your website.</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-gray-600" />
                  <CardTitle className="text-lg text-gray-900">Sitemap URL</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Enter a sitemap URL. The crawler will visit all the URLs listed in the sitemap and ingest their content to train the chatbot.</p>
              </CardContent>
            </Card>
          </div>


        </div>
      </div>
    </div>
  );
}
