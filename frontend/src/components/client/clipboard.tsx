'use client'
import { Toast } from '@douyinfe/semi-ui';
export default function CopyToClipboard({ website }: { website: string }) {
    return (<>
        <div>
            <span className="text-sm" onClick={() => {
                navigator.clipboard.writeText(website);
                Toast.success({
                    content: '已复制到剪贴板',
                });
            }}>分享</span>
        </div>
    </>)
}