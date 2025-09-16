import IconCloud from "../components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "coffeescript",
  "react",
  "mysql",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "linux",
  "cloudways",
  "postgresql",
  "firebase",
  "reactbootstrap",
  "vercel",
  "testinglibrary",
  "jest",
  "sass",
  "docker",
  "git",
  "reactquery",
  "github",
  "gitlab",
  "bootstrap",
  "androidstudio",
  "gnubash",
  "figma",
  "mongodb",
];

function IconCloudDemo() {
  return (
    <div
      className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent"
      style={{ justifyContent: "center" }}
    >
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
