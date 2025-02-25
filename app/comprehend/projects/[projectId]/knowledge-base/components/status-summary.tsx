"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function StatusSummary({
    sourcesCount = 3,
    processedCount = 2,
    pendingCount = 1,
    processingCount = 0,
    errorCount = 0,
}) {
    return (
        <div className="w-full bg-gray-100 rounded-lg p-4">
            <Card className="shadow-none border-0 bg-transparent">
                <CardContent className="p-0">
                    <div className="flex items-center justify-between divide-x divide-gray-200">
                        <div className="flex-1 flex flex-col items-center justify-center py-3 px-4">
                            <span className="text-2xl font-semibold text-gray-900">{sourcesCount}</span>
                            <span className="text-sm text-gray-600">Total Sources</span>
                        </div>
                        <div className="flex-1 flex flex-col items-center justify-center py-3 px-4">
                            <span className="text-2xl font-semibold text-green-600">{processedCount}</span>
                            <span className="text-sm text-gray-600">Processed</span>
                        </div>
                        <div className="flex-1 flex flex-col items-center justify-center py-3 px-4">
                            <span className="text-2xl font-semibold text-amber-600">{pendingCount}</span>
                            <span className="text-sm text-gray-600">Pending</span>
                        </div>
                        <div className="flex-1 flex flex-col items-center justify-center py-3 px-4">
                            <span className="text-2xl font-semibold text-blue-600">{processingCount}</span>
                            <span className="text-sm text-gray-600">Processing</span>
                        </div>
                        <div className="flex-1 flex flex-col items-center justify-center py-3 px-4">
                            <span className="text-2xl font-semibold text-red-600">{errorCount}</span>
                            <span className="text-sm text-gray-600">Errors</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}