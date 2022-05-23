import React from "react";

export const Page1: React.FC = () => {
    
    const handleClick=()=>{
        console.log("page1에서 링크 버튼 클릭")
    }
    
    return <a onClick={handleClick} href="/">page1</a>;
}
