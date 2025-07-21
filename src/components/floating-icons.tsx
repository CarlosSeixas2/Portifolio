import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiNestjs,
  SiPython,
  SiFlask,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiLinux,
  SiVite,
  SiVitest,
  SiFigma,
  SiPrisma,
  SiSass,
  SiPostman,
  SiVercel,
  SiJest,
  SiNginx,
  SiGunicorn,
} from "react-icons/si";

const icons = [
  { Icon: SiReact, style: "top-[10%] left-[8%] animate-float" },
  { Icon: SiTypescript, style: "top-[15%] left-[25%] animate-float-rev" },
  { Icon: SiJavascript, style: "top-[25%] right-[30%] animate-float-slow" },
  { Icon: SiHtml5, style: "top-[30%] left-[5%] animate-float" },
  { Icon: SiCss3, style: "top-[25%] right-[5%] animate-float-fast" },
  { Icon: SiTailwindcss, style: "top-[10%] left-[45%] animate-float" },
  { Icon: SiNodedotjs, style: "top-[40%] right-[35%] animate-float-slow" },
  { Icon: SiNestjs, style: "top-[45%] left-[20%] animate-float-rev" },
  { Icon: SiPython, style: "top-[75%] right-[24%] animate-float" },
  { Icon: SiFlask, style: "top-[65%] left-[60%] animate-float-slow" },
  { Icon: SiPostgresql, style: "top-[80%] right-[45%] animate-float" },
  { Icon: SiMongodb, style: "top-[75%] left-[15%] animate-float-rev" },
  { Icon: SiDocker, style: "bottom-[20%] right-[5%] animate-float-slow" },
  { Icon: SiGit, style: "bottom-[15%] left-[40%] animate-float" },
  { Icon: SiLinux, style: "bottom-[30%] right-[30%] animate-float-rev" },
  { Icon: SiVite, style: "bottom-[35%] left-[25%] animate-float" },
  { Icon: SiVitest, style: "bottom-[40%] right-[15%] animate-float-slow" },
  { Icon: SiFigma, style: "bottom-[45%] left-[5%] animate-float-fast" },
  { Icon: SiPrisma, style: "bottom-[50%] right-[25%] animate-float" },
  { Icon: SiSass, style: "top-[25%] left-[50%] animate-float-rev" },
  { Icon: SiPostman, style: "bottom-[60%] right-[10%] animate-float" },
  { Icon: SiVercel, style: "bottom-[65%] left-[35%] animate-float-slow" },
  { Icon: SiJest, style: "bottom-[70%] right-[20%] animate-float-fast" },
  { Icon: SiNginx, style: "bottom-[75%] left-[20%] animate-float-rev" },
  { Icon: SiGunicorn, style: "bottom-[80%] right-[40%] animate-float" },
];

const FloatingTechIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {icons.map(({ Icon, style }, index) => (
        <Icon
          key={index}
          size={28}
          //   className={`text-green-400/10 absolute ${style} animate-pulseStrong`}
          className={`text-green-400/30 drop-shadow-lg absolute ${style} animate-pulseStrong`}
        />
      ))}
    </div>
  );
};

export default FloatingTechIcons;
