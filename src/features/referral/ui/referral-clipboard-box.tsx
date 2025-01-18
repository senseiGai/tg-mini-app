import { useClipboardStore } from '../model/clipboard-store';

import { Check, Copy } from 'lucide-react';

export const ReferralClipboardBox = () => {
    const { copied, copyToClipboard } = useClipboardStore();
    const url = "https://example.com";


    return (
        <div
            onClick={() => copyToClipboard(url)}
            className='w-full h-[50px] border border-primary rounded-[4px] flex items-center justify-between px-4 mt-8 cursor-pointer'
        >
            <span className="text-light_gray text-[18px]">{url}</span>
            {copied ?
                <Check className="w-5 h-5 text-primary" /> :
                <Copy className="w-5 h-5 text-light_gray" />
            }
        </div>
    )
}
