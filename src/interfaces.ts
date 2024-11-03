export interface IDockAction {
    label: string;
    onSelect: () => Promise<void> | void;
  }
  
  export interface IDockOption {
    icon: IconType;
    label: string;
    extra?: any;
    actions: IDockAction[];
  }
  
  export interface DockProps {
    options: IDockOption[];
    showLabel?: string;
    hideLabel?: string;
  }
  export type IconType = (props: IconBaseProps) => JSX.Element;
  export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    children?: React.ReactNode;
    size?: string | number;
    color?: string;
    title?: string;
  }