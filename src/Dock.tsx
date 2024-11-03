import React, { useState } from "react";
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

  const toggleMenu = (index: number) => {
    setMenuVisible(menuVisible === index ? null : index);
  };

  return (
    <div>
      {!isVisible  && (
        <button onClick={toggleDockVisibility} className="button-show">
          {showLabel}
          <span className="badge">{totalIcons}</span>
        </button>
      )}

     {
      isVisible && (
        <div
        className={`dock-container `}
      >
        {options.map((option, index) => (
          <div key={index} className="dock-item">
            <div onClick={() => toggleMenu(index)} className="dock-item-icon">
              <option.icon />
            </div>
            <span className="dock-item-label">{option.label}</span>

            {menuVisible === index && (
              <div className="menu">
                <div className="p-3 border-b border-gray-200 flex flex-col">
                  <div className="font-bold text-lg text-gray-700 mb-2">
                    {option.label}
                  </div>
                </div>

                <div className="flex flex-col mt-3">
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

                <div className="mt-2 flex justify-end items-center">
                  <span className="text-gray-400 text-xs">
                    Seleccione una acción
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      )
     }

      {isVisible  && (
        <button onClick={toggleDockVisibility} className="button-hide">
          {hideLabel}
        </button>
      )}

    </div>
  );
};

export default Dock;
