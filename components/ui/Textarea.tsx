import { TextareaProps } from "@/types";

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
                className={`p-3 placeholder:text-xs placeholder:text-muted-foreground w-full rounded-[6px] bg-background px-4 focus:border focus:border-secondary-foreground focus:outline-none ${props.CustomClass}`}
                placeholder={props.placeholder}
            />
        </div>
    )
}