
import { Icon } from "../../index";

/**
 * A component that renders the `down-from-line` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-from-line?s=regular down-from-line}
 * @preview ![down-from-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/down-from-line.svg)
 */
const DownFromLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M82.2 320L192 430 301.8 320 248 320c-13.3 0-24-10.7-24-24l0-120-64 0 0 120c0 13.3-10.7 24-24 24l-53.8 0zM192 480c-11.5 0-22.5-4.6-30.6-12.7L45.6 351.2C36.9 342.5 32 330.7 32 318.4C32 292.8 52.8 272 78.4 272l33.6 0 0-96c0-26.5 21.5-48 48-48l64 0c26.5 0 48 21.5 48 48l0 96 33.6 0c25.6 0 46.4 20.8 46.4 46.4c0 12.3-4.9 24.1-13.6 32.8L222.6 467.3c-8.1 8.1-19.1 12.7-30.6 12.7zM24 80C10.7 80 0 69.3 0 56S10.7 32 24 32l336 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 80z" />
    </Icon>
);

export default DownFromLine;