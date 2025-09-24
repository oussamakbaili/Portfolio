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
      fill="none" 
      className={`${className} transition-all duration-300 group-hover:scale-125 group-hover:rotate-12`}
    >
      <path 
        d="M9 19C4 20.5 4 16.5 2 16M22 16V19C22.0013 19.8642 21.8038 20.7147 21.4251 21.4759C21.0463 22.2371 20.4998 22.8848 19.827 23.3653C19.1542 23.8458 18.3773 24.1446 17.5601 24.2347C16.7429 24.3248 15.9124 24.2034 15.158 23.8819C14.4036 23.5604 13.7512 23.0488 13.27 22.4C12.7888 21.7512 12.4942 20.9904 12.42 20.2C12.3458 19.4096 12.4942 18.6184 12.85 17.9L15 12L9 9L12.85 4.1C12.4942 3.3816 12.3458 2.5904 12.42 1.8C12.4942 1.0096 12.7888 0.2488 13.27 -0.4C13.7512 -1.0488 14.4036 -1.5604 15.158 -1.8819C15.9124 -2.2034 16.7429 -2.3248 17.5601 -2.2347C18.3773 -2.1446 19.1542 -1.8458 19.827 -1.3653C20.4998 -0.8848 21.0463 -0.2371 21.4251 0.5241C21.8038 1.2853 22.0013 2.1358 22 3V6" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="transition-all duration-300 group-hover:stroke-primary"
      />
      <path 
        d="M15 22V18C15.0013 17.1358 14.8038 16.2853 14.4251 15.5241C14.0463 14.7629 13.4998 14.1152 12.827 13.6347C12.1542 13.1542 11.3773 12.8554 10.5601 12.7653C9.7429 12.6752 8.9124 12.7966 8.158 13.1181C7.4036 13.4396 6.7512 13.9512 6.27 14.6C5.7888 15.2488 5.4942 16.0096 5.42 16.8C5.3458 17.5904 5.4942 18.3816 5.85 19.1L8 15L2 12L5.85 7.1C5.4942 6.3816 5.3458 5.5904 5.42 4.8C5.4942 4.0096 5.7888 3.2488 6.27 2.6C6.7512 1.9512 7.4036 1.4396 8.158 1.1181C8.9124 0.7966 9.7429 0.6752 10.5601 0.7653C11.3773 0.8554 12.1542 1.1542 12.827 1.6347C13.4998 2.1152 14.0463 2.7629 14.4251 3.5241C14.8038 4.2853 15.0013 5.1358 15 6V10" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="transition-all duration-300 group-hover:stroke-primary"
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
