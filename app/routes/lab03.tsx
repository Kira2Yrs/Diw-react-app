//Filename: lab03.tsx
import Profile from "./components/Profile"
import Contact from "./components/Contact";

export default function Myprofile(){
    return(
    <>
    <div>
        <Profile />
        <h2 className="text-2xl text-fuchsia-400 text-center bg-purple-700">Contact</h2>
        <Contact 
          label="Virawat Lueasap  FB" 
          link="https://www.facebook.com/virawat.lueasap" 
          icon="/image/Facebook_icon.png"  
        />
        <Contact 
          label="kxra.dx IG" 
          link="https://www.instagram.com/kxra.dx" 
          icon="/image/Instagram_logo.png"
         />
        </div>
        <div>
    </div>
    <div className="p-5 pe-5 pt-3 pb-3 bg-purple-600 rounded-xl w-20 flex justify-center mt-5">
                <a href="/">Back</a>
</div>
        </>
    );
}