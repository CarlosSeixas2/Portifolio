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
  { Icon: SiReact, style: "top-[5%] left-[5%]" },
  { Icon: SiTypescript, style: "top-[15%] left-[20%]" },
  { Icon: SiJavascript, style: "top-[10%] right-[10%]" },
  { Icon: SiHtml5, style: "top-[25%] left-[10%]" },
  { Icon: SiCss3, style: "top-[30%] right-[5%]" },
  { Icon: SiTailwindcss, style: "top-[10%] left-[45%]" },
  { Icon: SiNodedotjs, style: "top-[40%] right-[30%]" },
  { Icon: SiNestjs, style: "top-[45%] left-[25%]" },
  { Icon: SiPython, style: "top-[55%] right-[20%]" },
  { Icon: SiFlask, style: "top-[60%] left-[60%]" },
  { Icon: SiPostgresql, style: "top-[70%] right-[40%]" },
  { Icon: SiMongodb, style: "top-[65%] left-[15%]" },
  { Icon: SiDocker, style: "bottom-[20%] right-[10%]" },
  { Icon: SiGit, style: "bottom-[25%] left-[40%]" },
  { Icon: SiLinux, style: "bottom-[30%] right-[30%]" },
  { Icon: SiVite, style: "bottom-[35%] left-[25%]" },
  { Icon: SiVitest, style: "bottom-[40%] right-[15%]" },
  { Icon: SiFigma, style: "bottom-[45%] left-[5%]" },
  { Icon: SiPrisma, style: "bottom-[50%] right-[25%]" },
  { Icon: SiSass, style: "top-[35%] left-[55%]" },
  { Icon: SiPostman, style: "bottom-[60%] right-[5%]" },
  { Icon: SiVercel, style: "bottom-[65%] left-[35%]" },
  { Icon: SiJest, style: "bottom-[70%] right-[20%]" },
  { Icon: SiNginx, style: "bottom-[75%] left-[20%]" },
  { Icon: SiGunicorn, style: "bottom-[80%] right-[40%]" },
];

const FloatingTechIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {icons.map(({ Icon, style }, index) => (
        <Icon
          key={index}
          size={24}
          className={`text-green-400/30 drop-shadow-lg absolute ${style} animate-pulseStrong
            md:size-7 sm:size-6 size-5
          `}
        />
      ))}
    </div>
  );
};

export default FloatingTechIcons;
