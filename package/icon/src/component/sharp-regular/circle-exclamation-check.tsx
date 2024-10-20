
import { Icon } from "../../index";

/**
 * A component that renders the `circle-exclamation-check` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-exclamation-check?s=sharp-regular circle-exclamation-check}
 * @preview ![circle-exclamation-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-exclamation-check.svg)
 */
const CircleExclamationCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 256C48 141.1 141.1 48 256 48c84.1 0 156.7 50 189.4 121.9l43.7-19.9C448.8 61.6 359.6 0 256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c72.9 0 138.8-30.5 185.4-79.4l-34.8-33.1C368.7 439.2 315.3 464 256 464C141.1 464 48 370.9 48 256zM280 152l0-24-48 0 0 24 0 112 0 24 48 0 0-24 0-112zm0 216l0-48-48 0 0 48 48 0zM633.9 192L600 158.1l-17 17-111 111-47-47-17-17L374.1 256l17 17 64 64 17 17 17-17L617 209l17-17z" />
    </Icon>
);

export default CircleExclamationCheck;