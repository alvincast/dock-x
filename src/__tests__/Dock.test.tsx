import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Dock from "../Dock"; // Ajusta la ruta de importación según sea necesario
import { IDockOption } from "../interfaces"; // Ajusta la ruta de importación según sea necesario

describe("Dock Component", () => {
  const options: IDockOption[] = [
    {
      icon: () => <svg data-testid="icon" />, // Componente de icono simulado
      label: "Test Option 1",
      actions: [
        { label: "Action 1", onSelect: jest.fn() },
        { label: "Action 2", onSelect: jest.fn() },
      ],
    },
    {
      icon: () => <svg data-testid="icon" />, // Otro ícono simulado
      label: "Test Option 2",
      actions: [
        { label: "Action 3", onSelect: jest.fn() },
        { label: "Action 4", onSelect: jest.fn() },
      ],
    },
  ];
  test("toggles dock visibility", () => {
    // Renderiza el componente Dock
    render(<Dock options={options} />);
  
    // El dock debería estar oculto inicialmente
    expect(screen.queryByText("Test Option 1")).not.toBeInTheDocument(); // Debería estar oculto
  
    // Haz clic en el botón de mostrar dock
    fireEvent.click(screen.getByText("Show"));
  
    // Ahora el dock debería ser visible
    expect(screen.getByText("Test Option 1")).toBeInTheDocument(); // Ahora debería ser visible
  
    // Haz clic para ocultar el dock
    fireEvent.click(screen.getByText("Hide"));
  
    // El dock debería estar oculto de nuevo
    expect(screen.queryByText("Test Option 1")).not.toBeInTheDocument(); // Debería estar oculto
  });
  

  test("displays menu actions on icon click", () => {
    // Renderiza el componente Dock
    render(<Dock options={options} />);
  
    // Haz clic en el botón para mostrar el dock
    fireEvent.click(screen.getByText("Show"));
  
    // Ahora el dock debería ser visible
    expect(screen.getByText("Test Option 1")).toBeInTheDocument();
  
    // Busca el elemento dock-item para la opción 1
    const dockItem1 = screen.getByText("Test Option 1").closest('.dock-item');
  
    // Asegúrate de que dockItem1 no sea null
    if (!dockItem1) {
      throw new Error("dockItem1 no fue encontrado");
    }
  
    const icon1 = dockItem1.querySelector('.dock-item-icon');
  
    // Verifica que el ícono existe antes de hacer clic
    expect(icon1).toBeInTheDocument();
  
    // Haz clic en el ícono de la opción 1 para mostrar el menú
    fireEvent.click(icon1!); // Usa el operador de aserción no nula aquí si estás seguro que icon1 existe
  
    // Verifica que el menú de acciones de la opción 1 se muestra
    expect(screen.getByText("Action 1")).toBeInTheDocument();
    expect(screen.getByText("Action 2")).toBeInTheDocument();
  });
  
  
});
