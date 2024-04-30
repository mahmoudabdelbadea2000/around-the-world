import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 font-semibold">
      <svg
        width="24"
        height="28"
        viewBox="0 0 24 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.0003 3.64359C5.45388 3.64359 0.127991 9.05838 0.127991 15.7139C0.127991 22.3695 5.45388 27.7843 12.0003 27.7843C18.5468 27.7843 23.8727 22.3696 23.8727 15.714C23.8727 9.05843 18.5468 3.64359 12.0003 3.64359Z"
          fill="#00D8E0"
        />
        <path
          d="M18.8236 11.4156L23.2225 11.7737C22.3323 9.1606 20.5827 6.95229 18.3188 5.49962L17.3259 9.38045C17.2065 9.84697 17.3286 10.3422 17.651 10.6999L17.8718 10.9449C18.1175 11.2175 18.4579 11.3858 18.8236 11.4156Z"
          fill="#006C71"
        />
        <path
          d="M3.62047 16.5128L0.647523 12.1802C0.310125 13.2984 0.127991 14.4849 0.127991 15.714C0.127991 20.1518 2.49618 24.0372 6.01474 26.1343L6.97731 21.5864C7.31377 19.9967 6.50618 18.3855 5.03109 17.7038C4.46232 17.441 3.975 17.0295 3.62047 16.5128Z"
          fill="#006C71"
        />
        <path
          d="M18.8921 16.1182L16.1109 16.856C15.5909 16.994 15.1696 17.3748 14.9801 17.8783L14.2021 19.9452C14.0798 20.2703 14.0622 20.6255 14.1519 20.9612L14.5309 22.3794C14.6992 23.0091 15.2195 23.4826 15.8622 23.5909C16.7488 23.7402 16.3124 24.9491 16.1906 25.8398L15.4922 27.2365C16.889 26.8874 22.1268 24.7922 23.5235 18.5069C23.6059 18.136 23.8979 16.7322 23.8727 16.4117L19.6499 16.0959C19.399 16.0449 19.1396 16.0525 18.8921 16.1182Z"
          fill="#006C71"
        />
        <path
          d="M13.4909 16.2519H10.5C9.76595 16.2519 9.17087 15.6567 9.17087 14.9228C9.17087 14.1888 9.76601 13.5936 10.5 13.5936H13.4909C14.2249 13.5936 14.82 14.1888 14.82 14.9228C14.82 15.6567 14.2249 16.2519 13.4909 16.2519Z"
          fill="#555559"
          fillOpacity="0.4"
        />
        <path
          d="M15.91 1.59269C14.8604 0.565382 13.4639 0 11.9766 0C11.9732 0 11.9696 0 11.9662 0H11.9661C8.88704 0.00555611 6.38641 2.515 6.39184 5.59417C6.39401 6.848 7.17832 8.6865 8.78927 11.2145C9.91026 12.9736 11.014 14.4059 11.0605 14.466C11.2831 14.7542 11.6266 14.9228 11.9905 14.9228C11.9922 14.9228 11.9938 14.9228 11.9955 14.9228C12.3612 14.9213 12.7055 14.7496 12.9267 14.4583C12.9729 14.3975 14.0708 12.9477 15.1851 11.171C16.7855 8.61893 17.5624 6.76958 17.5603 5.51735C17.5575 4.02524 16.9716 2.63136 15.91 1.59269Z"
          fill="#D83249"
        />
        <path
          d="M11.9771 8.49374C13.3071 8.49374 14.3853 7.41557 14.3853 6.08558C14.3853 4.75559 13.3071 3.67742 11.9771 3.67742C10.6472 3.67742 9.56898 4.75559 9.56898 6.08558C9.56898 7.41557 10.6472 8.49374 11.9771 8.49374Z"
          fill="#FAD52A"
        />
      </svg>
      Around the world
    </Link>
  );
}
