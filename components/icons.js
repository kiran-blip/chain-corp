export const Logo = ({ size = 16, ...props }) => (
<svg
  width={size}
  height={size}
  viewBox="0 0 30 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
<text
  dominantBaseline="middle"
  textAnchor="middle"
  fontSize="25"
  fontFamily="Arial, sans-serif"
  fill="grey"
  y="12"
  x="-7"
>
  ChainCORP
</text>
</svg>
);


export const ArrowRight = ({ size = 16, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.0823 7.94511L14.9309 7.94511"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.3427 9.45591C17.6761 8.68611 17.6761 6.76161 16.3427 5.99181L11.7228 3.3245C10.3895 2.5547 8.72282 3.51696 8.72282 5.05656V10.3912C8.72282 11.9308 10.3895 12.893 11.7228 12.1232L16.3427 9.45591Z"
      fill="white"
    />
  </svg>
);

export const Medium = ({ size = 16, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 30 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.46162 5.41296C4.46162 5.03851 4.33679 4.78886 4.08717 4.5392L1.46595 1.41871V0.919434H9.57924L15.8202 14.6496L21.3123 0.919434H29.0511V1.41871L26.8044 3.54066C26.5547 3.66549 26.5547 3.9151 26.5547 4.16476V19.8921C26.5547 20.1417 26.5547 20.3913 26.8044 20.5162L28.9263 22.6381V23.1374H17.9422V22.6381L20.189 20.3914C20.4386 20.1417 20.4386 20.1417 20.4386 19.7673V7.03564L14.1976 23.0126H13.3239L5.95951 7.03564V17.7702C5.95951 18.2694 6.08433 18.6439 6.33395 19.0183L9.32962 22.6381V23.1374H0.966675V22.6381L3.96234 19.0183C4.33679 18.6439 4.46162 18.2694 4.33679 17.7702V5.41296H4.46162Z"
      fill="white"
    />
  </svg>
);

export const Discord = ({ size = 16, ...props }) => (
  <svg
    viewBox="0 0 30 30"
    width={size}
    height={size}
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M25.12,6.946c-2.424-1.948-6.257-2.278-6.419-2.292c-0.256-0.022-0.499,0.123-0.604,0.357 c-0.004,0.008-0.218,0.629-0.425,1.228c2.817,0.493,4.731,1.587,4.833,1.647c0.478,0.278,0.638,0.891,0.359,1.368 C22.679,9.572,22.344,9.75,22,9.75c-0.171,0-0.343-0.043-0.501-0.135C21.471,9.598,18.663,8,15.002,8 C11.34,8,8.531,9.599,8.503,9.615C8.026,9.892,7.414,9.729,7.137,9.251C6.86,8.775,7.021,8.164,7.497,7.886 c0.102-0.06,2.023-1.158,4.848-1.65c-0.218-0.606-0.438-1.217-0.442-1.225c-0.105-0.235-0.348-0.383-0.604-0.357 c-0.162,0.013-3.995,0.343-6.451,2.318C3.564,8.158,1,15.092,1,21.087c0,0.106,0.027,0.209,0.08,0.301 c1.771,3.11,6.599,3.924,7.699,3.959c0.007,0.001,0.013,0.001,0.019,0.001c0.194,0,0.377-0.093,0.492-0.25l1.19-1.612 c-2.61-0.629-3.99-1.618-4.073-1.679c-0.444-0.327-0.54-0.953-0.213-1.398c0.326-0.443,0.95-0.541,1.394-0.216 C7.625,20.217,10.172,22,15,22c4.847,0,7.387-1.79,7.412-1.808c0.444-0.322,1.07-0.225,1.395,0.221 c0.324,0.444,0.23,1.066-0.212,1.392c-0.083,0.061-1.456,1.048-4.06,1.677l1.175,1.615c0.115,0.158,0.298,0.25,0.492,0.25 c0.007,0,0.013,0,0.019-0.001c1.101-0.035,5.929-0.849,7.699-3.959c0.053-0.092,0.08-0.195,0.08-0.301 C29,15.092,26.436,8.158,25.12,6.946z M11,19c-1.105,0-2-1.119-2-2.5S9.895,14,11,14s2,1.119,2,2.5S12.105,19,11,19z M19,19 c-1.105,0-2-1.119-2-2.5s0.895-2.5,2-2.5s2,1.119,2,2.5S20.105,19,19,19z" />
  </svg>
);

export const Twitter = ({ size = 16, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 29 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.31761 18.3738C6.45085 18.2435 4.62657 16.1586 4.10535 14.4646C4.8872 14.5949 5.66904 14.5949 6.45085 14.3343C6.45085 14.3343 6.45085 14.3343 6.58117 14.3343C5.01747 13.9434 3.71441 13.1616 2.9326 11.7282C2.41138 10.816 2.15075 9.77359 2.15075 8.73113C2.9326 9.12206 3.71445 9.38267 4.62657 9.38267C3.45382 8.47053 2.67197 7.42807 2.28107 5.9947C2.02044 4.56133 2.15075 3.25827 2.9326 1.9552C5.92963 5.47347 9.83883 7.55838 14.5299 7.81899C14.5299 7.55838 14.3996 7.42807 14.3996 7.16746C14.2692 5.8644 14.5299 4.56133 15.1814 3.51888C16.0936 2.08551 17.3966 1.30367 18.9603 1.04305C20.9149 0.782444 22.4786 1.30366 23.9119 2.60673C24.0422 2.73703 24.0422 2.73703 24.1725 2.73703C25.3453 2.47642 26.3878 2.0855 27.4302 1.43397C27.4302 1.43397 27.4302 1.43397 27.5605 1.43397C27.1696 2.73703 26.2574 3.77949 25.215 4.43102C26.2574 4.30071 27.2999 4.04009 28.3424 3.64918C28.0817 3.90979 27.9515 4.17041 27.6908 4.43102C27.0393 5.21285 26.3878 5.86439 25.6059 6.38561L25.4756 6.51592C25.4756 7.29775 25.4756 8.20991 25.3453 8.99174C25.0847 10.6857 24.6938 12.3797 23.9119 13.9434C23.1301 15.6374 22.0876 17.0707 20.9149 18.3738C18.83 20.589 16.2238 22.0224 13.2268 22.6739C12.1844 22.9345 11.1419 23.0649 10.0995 23.0649C6.84179 23.1952 3.84476 22.4133 1.10832 20.589C1.10832 20.589 0.978004 20.589 0.978004 20.4587C2.9326 20.7193 4.75688 20.4587 6.58117 19.6769C7.62364 19.5466 8.53576 19.0253 9.31761 18.3738Z"
      fill="white"
    />
  </svg>
);

export const Telegram = ({ size = 16, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 29 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.3592 22.1328C11.4898 20.8273 11.4898 19.6523 11.6203 18.3468C11.6203 17.694 11.7509 16.9107 11.7509 16.2579C11.7509 15.8663 11.8815 15.6052 12.1426 15.2135C15.9286 11.8191 19.7146 8.42477 23.5007 5.03043C23.6312 4.89987 23.7618 4.89987 23.7618 4.76931C23.8923 4.50819 23.8923 4.37767 23.6312 4.37767C23.3701 4.37767 22.9784 4.50823 22.8479 4.63879C21.5423 5.42211 20.3674 6.20544 19.0618 6.98872C15.5369 9.20813 12.012 11.4275 8.48707 13.6469C8.22597 13.7775 8.09541 13.7775 7.70374 13.7775C5.74545 13.1247 3.78716 12.6025 1.82887 11.9497C1.69831 11.9497 1.43721 11.8192 1.30667 11.6886C0.653907 11.297 0.653907 10.7747 1.17611 10.3831C1.43721 10.122 1.82887 9.99146 2.22054 9.8609C4.30939 9.07757 6.26768 8.29425 8.35651 7.51096C14.4925 5.16103 20.6285 2.81106 26.7644 0.461127C27.0256 0.330566 27.4172 0.330566 27.6783 0.330566C28.5922 0.330566 28.8533 1.11389 28.7227 1.89721C28.4616 3.20274 28.2005 4.50827 27.9394 5.8138C27.1561 9.73038 26.2422 13.5164 25.4589 17.433C25.0673 19.1301 24.8062 20.6968 24.4145 22.394V22.5245C24.0228 23.9606 22.9784 23.9606 22.0645 23.3078C20.4979 22.1329 18.9313 20.9579 17.3646 19.7829C16.973 19.3913 16.4508 19.1301 16.0591 18.7385C15.9286 18.6079 15.798 18.6079 15.6674 18.7385C14.623 19.7829 13.5786 20.6968 12.6647 21.7412C12.1425 22.0022 11.7509 22.1328 11.3592 22.1328Z"
      fill="white"
    />
  </svg>
);

export const Github = ({ size = 16, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.0375 0.578613C7.32788 0.578613 0.201874 7.70462 0.201874 16.4142C0.201874 23.4082 4.68862 29.3466 11.0229 31.458C11.8147 31.59 12.0786 31.0621 12.0786 30.6662V27.763C7.72379 28.6868 6.80004 25.9155 6.80004 25.9155C6.14022 24.0681 5.08453 23.5402 5.08453 23.5402C3.63293 22.6164 5.2165 22.6164 5.2165 22.6164C6.80008 22.7484 7.59182 24.2 7.59182 24.2C9.04343 26.5753 11.2868 25.9155 12.2105 25.5197C12.3425 24.464 12.7384 23.8042 13.2662 23.4082C9.7032 23.0124 6.00825 21.6927 6.00825 15.6224C6.00825 13.9069 6.66806 12.4553 7.59182 11.3996C7.45985 11.0037 6.93201 9.42013 7.72379 7.17673C7.72379 7.17673 9.04343 6.78086 12.0786 8.76031C13.3982 8.36444 14.7178 8.23246 16.0375 8.23246C17.3571 8.23246 18.6767 8.36444 19.9964 8.76031C23.0315 6.64889 24.3511 7.17673 24.3511 7.17673C25.2749 9.42013 24.6151 11.0037 24.4831 11.3996C25.5388 12.4553 26.0667 13.9069 26.0667 15.6224C26.0667 21.6927 22.3717 23.0124 18.8087 23.4082C19.3365 23.9361 19.8644 24.8598 19.8644 26.3114V30.6662C19.8644 31.0621 20.1283 31.59 20.9201 31.458C27.2543 29.3466 31.7411 23.4082 31.7411 16.4142C31.8731 7.70462 24.747 0.578613 16.0375 0.578613Z"
      fill="white"
    />
  </svg>
);
