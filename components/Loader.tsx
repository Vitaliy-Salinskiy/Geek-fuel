import React, {useState, useEffect} from "react";

const Loader: React.FC = (): JSX.Element => {
    const [text, setText] = useState<string>('');
  
    useEffect(() => {
      const fullText = 'Geek Fuel';
      let index = -1;
  
      const intervalId = setInterval(() => {
        index += 1;
        setText((prevText) => prevText + fullText[index]);
  
        if (index === fullText.length - 1) {
          clearInterval(intervalId);
        }
      }, 150);
  
      return () => clearInterval(intervalId);
    }, []);
  
    const isLastWord = text.endsWith('Fuel');
  
    return (
      <div className='w-full h-screen flex items-center justify-center'>
        <h2 className='transition-all duration-500 text-[52px] font-din sm:text-[64px] md:text-[76px] lg:text-[90px]' style={isLastWord ? { transform: 'scale(1.3)' } : {}}>
          {isLastWord ? (
            <>
              {text.slice(0, -4)}
              <span className='text-main-red'>{text.slice(-4)}</span>
            </>
          ) : (
            text
          )}
        </h2>
      </div>
    );
};
  
export default Loader;