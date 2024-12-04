import { FC } from "react";

interface CustomProps {
  text: string;
  color?: string;
}

const ComponentWithCustomProps: FC<CustomProps> = ({ text, color = "text-primary" }) => {
  return (
    <div className={color}>
      {text}
    </div>
  )
}

export default ComponentWithCustomProps
