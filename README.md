# Dock X

A customizable menu options dock for React applications.

## Installation

You can install Dock X via npm:

```bash
npm install dock-x
```

## Usage
```bash
import Dock from 'dock-x';
```

## Props

The `Dock` component accepts the following props:

| Prop         | Type               | Description                                                                                      |
|--------------|--------------------|--------------------------------------------------------------------------------------------------|
| `options`    | `IDockOption[]`    | An array of options to display in the dock. Each option should implement the `IDockOption` interface. |
| `hideInRoute`| `string` (optional)| A route path to hide the dock. If the current path starts with this route, the dock will be hidden. |
| `showLabel`  | `string` (optional)| Label for the button to show the dock (default: "Show Pending").                                |
| `hideLabel`  | `string` (optional)| Label for the button to hide the dock (default: "Hide Pending").                                |

## Interfaces

### IDockAction

```typescript
interface IDockAction {
  label: string;
  onSelect: () => Promise<void> | void;
}
```

### IDockOption

```typescript
interface IDockOption {
  icon: IconType; 
  label: string;
  extra?: any; // Optional extra data
  actions: IDockAction[];
}
```
### IconType

```typescript
type IconType = (props: IconBaseProps) => JSX.Element; 
```
### IconBaseProps

```typescript
interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  title?: string;   
}
```

# Example

Here's an example of how to use the Dock component:

```tsx
import React from 'react';
import Dock from 'dock-x';

const App: React.FC = () => {
   const options:IDockOption[] = [
    {
      icon: () => <FaAccusoft/>,
      label: 'Attend',
      actions:[
        {
          label:"a",
          onSelect: ()=>console.log("a")
        }
      ]
    },
  
  ];

  return (
    <div>
      <h1>My Application</h1>
      <Dock options={options}  />
    </div>
  );
};

export default App;
```

# License
This project is licensed under the MIT License.