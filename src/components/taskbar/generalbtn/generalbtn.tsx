import React from "react";
import "./generalbtn.css"

type StartProps = {  
    isOpen: boolean;  
    onClose: () => void;  
};  

const GeneralButton: React.FC<StartProps> = ({ isOpen}) => {  
    if (!isOpen) return null;  
    return (  
        <div className="startbtn">  
            <div className="startbtn-content">  
                <h2>Stay Strange</h2>  
                <p>в разработке...</p>  
            </div>  
        </div>  
    );  
};  
export default GeneralButton;  