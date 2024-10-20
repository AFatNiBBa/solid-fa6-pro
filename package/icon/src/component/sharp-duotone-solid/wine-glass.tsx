
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wine-glass` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wine-glass?s=sharp-duotone-solid wine-glass}
 * @preview ![wine-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/wine-glass.svg)
 */
const WineGlass: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M14.5 192.7L32 0 288 0l17.5 192.7c.4 4.5 .6 9 .6 13.4c0 68.9-48.4 127.7-114.1 142.4l0 99.5 80 0 0 64-112 0L48 512l0-64 80 0 0-99.5C58 332.9 7.7 267.3 14.5 192.7zm63.7 5.8C73.9 246.5 111.7 288 160 288s86.1-41.5 81.8-89.5c-2.1-23.5-4.3-47-6.4-70.5c-1.9-21.3-3.9-42.7-5.8-64L90.4 64l-5.8 64c-2.1 23.5-4.3 47-6.4 70.5z" />
        <path d="M84.6 128l-6.4 70.5C73.9 246.5 111.7 288 160 288s86.1-41.5 81.8-89.5L235.4 128 84.6 128z" />
    </Icon>
);

export default WineGlass;