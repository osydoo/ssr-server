import React from 'react';

export const App: React.FC = () => {

    const handleClick=()=>{
        console.log("client에서 링크 버튼 클릭")
    }

    return <a href="/page1" onClick={handleClick}>Hello</a>
}