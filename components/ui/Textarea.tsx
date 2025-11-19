import { TextareaProps } from "@/lib/types";

export default function Textarea({ ...props }: TextareaProps) {
    return (
        <div className={`flex flex-col ${props.containerClass}`}>
            <label htmlFor={props.name} className="label mb-2">{props.label}</label>
            <textarea 
                name={props.name}
                id={props.name}
                rows={props.rows}
                cols={props.cols}
                value={props.value}
                onChange={props.onChange}
                className={`w-full rounded-xl bg-zinc-100 text-zinc-900 p-4 focus:outline-zinc-300 ${props.CustomClass}`}
                placeholder={props.placeholder}
            />
        </div>
    )
}