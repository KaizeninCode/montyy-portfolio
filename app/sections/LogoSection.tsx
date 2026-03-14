import React from "react";
import { logoIconsList } from "../constants";

interface Icon {
  imgPath: string;
  name?: string;
}

interface LogoIconProps {
  icon: Icon;
}

const LogoIcon = ({ icon }: LogoIconProps) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  );
};

const LogoSection = () => {
  return (
    <div className="md:my-20 my-10 relative" id="skills">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((icon, i) => (
            <LogoIcon key={i} icon={icon} />
          ))}
          {/* duplicate the list to scroll seamlessly */}
          {logoIconsList.map((icon, i) => (
            <LogoIcon key={i} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
