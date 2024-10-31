
import { Icon } from "../../index";

/**
 * A component that renders the `circle-exclamation-check` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-exclamation-check?s=regular circle-exclamation-check}
 * @preview ![circle-exclamation-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-exclamation-check.svg)
 */
const CircleExclamationCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 256C48 141.1 141.1 48 256 48c84.1 0 156.7 50 189.4 121.9c5.5 12.1 19.7 17.4 31.8 11.9s17.4-19.7 11.9-31.8C448.8 61.6 359.6 0 256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c72.9 0 138.8-30.5 185.4-79.4c9.1-9.6 8.8-24.8-.8-33.9s-24.8-8.8-33.9 .8C368.7 439.2 315.3 464 256 464C141.1 464 48 370.9 48 256zM280 152c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112zM256 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM625 175c-9.4-9.4-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L625 209c9.4-9.4 9.4-24.6 0-33.9z" />
    </Icon>
);

export default CircleExclamationCheck;