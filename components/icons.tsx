interface IconProps {
  className?: string
  size?: number
}

export function HomeIcon({ className = "w-5 h-5", size = 20 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      className={`${className} transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}
    >
      <path 
        d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="transition-all duration-300 group-hover:stroke-primary group-hover:fill-primary/10"
      />
      <path 
        d="M9 22V12H15V22" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="transition-all duration-300 group-hover:stroke-primary"
      />
    </svg>
  )
}

export function CodeIcon({ className = "w-5 h-5", size = 20 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      className={`${className} transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}
    >
      <polyline 
        points="16,18 22,12 16,6" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="transition-all duration-300 group-hover:stroke-primary"
      />
      <polyline 
        points="8,6 2,12 8,18" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="transition-all duration-300 group-hover:stroke-primary"
      />
    </svg>
  )
}

export function UserIcon({ className = "w-5 h-5", size = 20 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      className={`${className} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
    >
      <path 
        d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="transition-all duration-300 group-hover:stroke-primary"
      />
      <circle 
        cx="12" 
        cy="7" 
        r="4" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="transition-all duration-300 group-hover:stroke-primary group-hover:fill-primary/10"
      />
    </svg>
  )
}

export function BriefcaseIcon({ className = "w-5 h-5", size = 20 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      className={`${className} transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}
    >
      <rect 
        x="2" 
        y="7" 
        width="20" 
        height="14" 
        rx="2" 
        ry="2" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="transition-all duration-300 group-hover:stroke-primary group-hover:fill-primary/10"
      />
      <path 
        d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="transition-all duration-300 group-hover:stroke-primary"
      />
    </svg>
  )
}

export function MessageSquareIcon({ className = "w-5 h-5", size = 20 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      className={`${className} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
    >
      <path 
        d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="transition-all duration-300 group-hover:stroke-primary group-hover:fill-primary/10"
      />
    </svg>
  )
}

export function GithubIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor"
      className={`${className} transition-all duration-300 group-hover:scale-110`}
    >
      <path 
        d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
      />
    </svg>
  )
}

export function LinkedinIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      className={`${className} transition-all duration-300 group-hover:scale-125 group-hover:rotate-6`}
    >
      <path 
        d="M16 8C18.2091 8 20 9.79086 20 12V21H16V12C16 11.4696 15.7893 10.9609 15.4142 10.5858C15.0391 10.2107 14.5304 10 14 10C13.4696 10 12.9609 10.2107 12.5858 10.5858C12.2107 10.9609 12 11.4696 12 12V21H8V8H12V9.5C12.6566 8.5 13.6115 8 14.5 8C15.3885 8 16.3434 8.5 17 9.5V8H16Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="transition-all duration-300 group-hover:stroke-primary group-hover:fill-primary/10"
      />
      <rect 
        x="2" 
        y="9" 
        width="4" 
        height="12" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="transition-all duration-300 group-hover:stroke-primary group-hover:fill-primary/10"
      />
      <circle 
        cx="4" 
        cy="4" 
        r="2" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="transition-all duration-300 group-hover:stroke-primary group-hover:fill-primary/10"
      />
    </svg>
  )
}

export function TwitterIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      className={`${className} transition-all duration-300 group-hover:scale-125 group-hover:rotate-12`}
    >
      <path 
        d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.95718 14.8821 3.28445C14.0247 3.61172 13.2884 4.19439 12.773 4.95371C12.2575 5.71303 11.9877 6.61193 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39524C5.36074 6.60467 4.01032 5.43866 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="transition-all duration-300 group-hover:stroke-primary"
      />
    </svg>
  )
}

export function MailIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      className={`${className} transition-all duration-300 group-hover:scale-125 group-hover:rotate-6`}
    >
      <path 
        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="transition-all duration-300 group-hover:stroke-primary group-hover:fill-primary/10"
      />
      <polyline 
        points="22,6 12,13 2,6" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="transition-all duration-300 group-hover:stroke-primary"
      />
    </svg>
  )
}

export function CodeLogoIcon({ className = "w-7 h-7", size = 28 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      className={`${className} transition-all duration-300 hover:scale-110 hover:rotate-12`}
    >
      <path 
        d="M16 18L22 12L16 6" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="transition-all duration-300"
      />
      <path 
        d="M8 6L2 12L8 18" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="transition-all duration-300"
      />
    </svg>
  )
}
