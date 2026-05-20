type TechIconProps = {
  path: string;
  color: string;
  label: string;
  size?: "sm" | "md";
};

export default function TechIcon({ path, color, label, size = "md" }: TechIconProps) {
  const dim = size === "sm" ? "h-5 w-5" : "h-6 w-6";
  return (
    <svg
      viewBox="0 0 24 24"
      fill={color}
      className={dim}
      role="img"
      aria-label={label}
    >
      <path d={path} />
    </svg>
  );
}
