import { removeToken } from "@/app/actions";
import { useRouter } from "next/navigation";
import { BiLogInCircle} from "react-icons/bi";

export default function Logout() {
    const router = useRouter();

    const handleLogOut = () => {
        removeToken();
        router.push('/auth/sign_in')
    }

    return (
        <button type="button" className="flex items-center text-red-500" onClick={handleLogOut}>
            <BiLogInCircle className="text-xl"/>
            <span className="text-xs font-semibold rtl:mr-2 ltr:ml-2">خروج از حساب کاربری</span>
            <i className="icon icon-outline-arrow-left-2 rtl:mr-auto ltr:ml-auto"></i>
        </button>
    )
}