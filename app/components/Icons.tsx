import type { ReactNode, SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

function Svg(props: P & { children: ReactNode }) {
  const { children, ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export function IconHome(p: P) {
  return (
    <Svg {...p}>
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" />
    </Svg>
  );
}
export function IconBriefcase(p: P) {
  return (
    <Svg {...p}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1M3 13h18" />
    </Svg>
  );
}
export function IconList(p: P) {
  return (
    <Svg {...p}>
      <path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01" />
    </Svg>
  );
}
export function IconDoc(p: P) {
  return (
    <Svg {...p}>
      <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </Svg>
  );
}
export function IconHelp(p: P) {
  return (
    <Svg {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.5a2.5 2.5 0 1 1 3.2 2.37c-.7.27-1.2.9-1.2 1.63V14" />
      <path d="M12 17h.01" />
    </Svg>
  );
}
export function IconMail(p: P) {
  return (
    <Svg {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </Svg>
  );
}
export function IconPhone(p: P) {
  return (
    <Svg {...p}>
      <path d="M7 3h3l1.5 4-2 1.5a12 12 0 0 0 6 6L17 13l4 1.5V18a2 2 0 0 1-2 2A15 15 0 0 1 5 5a2 2 0 0 1 2-2Z" />
    </Svg>
  );
}
export function IconWhatsApp(p: P) {
  return (
    <Svg {...p}>
      <path d="M5 19.5 6.2 15A8.2 8.2 0 1 1 9 18.7L5 19.5Z" />
      <path d="M9.2 9.6c.2-.5.4-.5.7-.5h.6c.2 0 .4.1.5.4l.7 1.6c.1.2 0 .4-.1.5l-.5.5c-.1.1-.1.3 0 .5a7 7 0 0 0 2.3 2.3c.2.1.4.1.5 0l.5-.5c.2-.2.4-.2.6-.1l1.6.7c.3.1.4.3.4.5v.6c0 .3 0 .5-.5.7-1 .4-3.2.4-6.2-2.6-2.7-2.7-2.8-4.8-2.5-5.9Z" />
    </Svg>
  );
}
export function IconMenu(p: P) {
  return (
    <Svg {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Svg>
  );
}
export function IconClose(p: P) {
  return (
    <Svg {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Svg>
  );
}
export function IconSend(p: P) {
  return (
    <Svg {...p}>
      <path d="M4 12h16M13 6l6 6-6 6" />
    </Svg>
  );
}
export function IconRecv(p: P) {
  return (
    <Svg {...p}>
      <path d="M20 12H4M11 18l-6-6 6-6" />
    </Svg>
  );
}
