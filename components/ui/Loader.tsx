export default function Loader({ addClass, parentClass } : { addClass?: string, parentClass?:string }) {
    return (
        <div className={`flex justify-center mt-10 ${parentClass}`}> 
            <div className={`loader ${addClass}`}></div>
        </div>
    )
}