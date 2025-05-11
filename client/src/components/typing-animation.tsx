import { useState, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";

interface TypingAnimationProps {
  text: string;
  delay?: number;
  className?: string;
  highlightWords?: string[];
  colorGradient?: boolean;
}

export default function TypingAnimation({ 
  text, 
  delay = 100, 
  className = "",
  highlightWords = [],
  colorGradient = false
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    let typingTimer: number;
    
    // Start typing after 0.8 second
    const startTimeout = setTimeout(() => {
      // Type out the text
      typingTimer = window.setInterval(() => {
        setDisplayText(text.substring(0, index + 1));
        index++;
        
        if (index === text.length) {
          clearInterval(typingTimer);
          setIsTypingComplete(true);
        }
      }, delay);
    }, 800);

    // Cursor blink effect
    const cursorTimer = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(typingTimer);
      clearInterval(cursorTimer);
    };
  }, [text, delay]);
  
  // Function to highlight specific words with color
  const renderHighlightedText = () => {
    if (!highlightWords.length) return displayText;
    
    let parts: React.ReactNode[] = [displayText];
    
    highlightWords.forEach(word => {
      let newParts: React.ReactNode[] = [];
      
      parts.forEach(part => {
        if (typeof part !== 'string') {
          newParts.push(part);
          return;
        }
        
        const splitText = part.split(new RegExp(`(${word})`, 'gi'));
        
        splitText.forEach((text, i) => {
          if (text.toLowerCase() === word.toLowerCase()) {
            newParts.push(
              <span 
                key={`highlight-${word}-${i}`} 
                className={colorGradient ? "font-bold animate-background-pan" : "font-bold text-primary"}
              >
                {text}
              </span>
            );
          } else if (text) {
            newParts.push(text);
          }
        });
      });
      
      parts = newParts;
    });
    
    return parts;
  };

  return (
    <motion.div
      className={`${className} relative`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.span
        animate={isTypingComplete ? {
          scale: [1, 1.02, 1],
          transition: { 
            duration: 0.5,
            ease: "easeInOut",
            repeat: 0
          }
        } : {}}
      >
        {renderHighlightedText()}
      </motion.span>
      <motion.span 
        className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity absolute`}
        animate={{ 
          opacity: cursorVisible ? 1 : 0 
        }}
      >
        |
      </motion.span>
    </motion.div>
  );
}
