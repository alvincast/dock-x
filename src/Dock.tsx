import React, { useCallback, useState } from "react";
import "./styles.css";
import { DockProps } from "./interfaces";

const Dock = ({
  options,
  showLabel = "Show",
  hideLabel = "Hide",
}: DockProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState<number | null>(null);

  const totalIcons = options.length;

  const toggleDockVisibility = () => {
    setIsVisible(!isVisible);
  };

  const toggleMenu = useCallback((index: number) => {
    setMenuVisible((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  return (
    <div>
      {!isVisible && (
        <button 
          onClick={toggleDockVisibility} 
          className="button-show" 
          aria-expanded={isVisible} 
          aria-label="Toggle dock visibility"
        >
          {showLabel}
          <span className="badge">{totalIcons}</span>
        </button>
      )}

      {isVisible && (
        <div className={`dock-container`} role="menu" aria-label="Dock menu">
          {options.map((option, index) => (
            <div key={index} className="dock-item">
              <div 
                onClick={() => toggleMenu(index)} 
                className="dock-item-icon" 
                role="button" 
                aria-haspopup="true" 
                aria-expanded={menuVisible === index}
                tabIndex={0} // Habilita el enfoque con el teclado
                onKeyDown={(e) => e.key === 'Enter' && toggleMenu(index)} // Maneja la entrada del teclado
              >
                <option.icon />
              </div>
              <span className="dock-item-label">{option.label}</span>

              {menuVisible === index && (
                <div className="menu">
                  <div className="border-bottom-gray">
                    <div className="text-gray-bold">{option.label}</div>
                  </div>

                  <div className="menu-action-container-dir">
                    {option.actions.map((action, idx) => (
                      <button
                        key={idx}
                        onClick={action.onSelect}
                        className="menu-button"
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>

                  <div className="actions-container-label">
                    <span className="actions-text">Actions</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {isVisible && (
        <button 
          onClick={toggleDockVisibility} 
          className="button-hide" 
          aria-label="Hide dock"
        >
          {hideLabel}
        </button>
      )}
    </div>
  );
};

export default Dock;
