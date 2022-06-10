
import {  useAuth, useTheme } from "../../context";
import {  Footer, Navbar } from "../../components";
import { useNavigate} from "react-router-dom";
import "./profile.css"
const Profile = () => {
  const { theme } = useTheme();
 const {setIsLogin} = useAuth();
 const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div
        className={
          theme === "dark"
            ? "homepage-container dark"
            : "homepage-container light"
        }
      >
          <h1 className="Homepage-title">Profile Page</h1>
          <div className={theme ==='dark'?'profile-page border':'profile-page dark-border'}>
          <img src="https://w7.pngwing.com/pngs/613/636/png-transparent-computer-icons-user-profile-male-avatar-avatar-heroes-logo-black-thumbnail.png" alt="avatar" className='profile-icon'/>
         <h1 className='rules-heading'>{localStorage.getItem('user')[0].toUpperCase()+localStorage.getItem('user').substring(1)}</h1>
         <h3>{localStorage.getItem('email')}</h3> 
   
          <button className={theme === "dark"?'rules-button light':'rules-button dark'} onClick={()=>{
              return(
                    localStorage.removeItem("token"),
                    localStorage.removeItem("user"),
                    setIsLogin(false),
                    navigate("/login")
              )
          }
             
          }>Logout</button>
          </div>
        <Footer />
      </div>
    </>
  );
};

export default Profile;