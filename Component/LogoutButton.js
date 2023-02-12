import LogoutIcon from '@mui/icons-material/Logout';
import Link from "next/link"


const LogoutButton = ({ handleLogout }) => {
    return (
      <div>
        <button className = "font-bold flex" onClick={handleLogout}>
            <div className = "max-md:hidden mr-2">LOGOUT</div> 
            <LogoutIcon/>
        </button>
        </div>
    )
}
export default LogoutButton
