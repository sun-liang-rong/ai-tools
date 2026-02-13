'use client'
import { Toast } from '@douyinfe/semi-ui';
export default function CopyToClipboard({ website }: { website: string }) {
    return (<>
        <button className="px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300">
            <span className="text-sm" onClick={() => {
                navigator.clipboard.writeText(website);
                Toast.success({
                    content: '已复制到剪贴板',
                });
            }}>分享</span>
        </button>
    </>)
}