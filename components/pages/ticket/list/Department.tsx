export default function Department({ title } : { title: string }) {
    return (
        <span className="font-bold text-end">{title === 'financial' ? 'مالی' : title === 'sell' ? 'فروش' : title === 'technical' ? 'فنی' : 'روابط عمومی'}</span>
    )
}