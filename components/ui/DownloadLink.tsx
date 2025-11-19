import { FileChatProps, MessageProps } from "@/lib/types";
import { BiSolidDownload } from "react-icons/bi";

export const DownloadLink = ({ file, message } : { file:FileChatProps, message:MessageProps }) => {
    const handleDownload = () => {
        fetch(file.file_path)
            .then((response) => response.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.download = file.file_name;
                document.body.appendChild(link);

                link.click();

                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
            })
            .catch((error) => {
                console.error("Error fetching the file", error)
            })
    }
    return (
        <div className="flex gap-x-1">
            <button type="button" id="downloadFile" className={`button-modal w-9 flex-shrink-0 h-9 rounded-full flex items-center justify-center ${ message.from === 'user' ? 'bg-gray-100' : 'bg-zinc-900' }`} onClick={handleDownload}>
                <BiSolidDownload className={`text-xl ${message.from === 'user' ? 'text-zinc-900' : 'text-white' } `}/>
            </button>
            <span className={`pt-3 text-gray-200 text-[10px] ${ message.from === 'user' ? 'text-white' : 'text-black' }`}>فایل پیوست</span>
        </div>
    )        
}

