
import { Icon } from "../../index";

/**
 * A component that renders the `up-to-line` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-to-line?s=regular up-to-line}
 * @preview ![up-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/up-to-line.svg)
 */
const UpToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M82.2 288L192 178 301.8 288 248 288c-13.3 0-24 10.7-24 24l0 120-64 0 0-120c0-13.3-10.7-24-24-24l-53.8 0zM192 128c-11.5 0-22.5 4.6-30.6 12.7L45.6 256.8C36.9 265.5 32 277.3 32 289.6C32 315.2 52.8 336 78.4 336l33.6 0 0 96c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-96 33.6 0c25.6 0 46.4-20.8 46.4-46.4c0-12.3-4.9-24.1-13.6-32.8L222.6 140.7c-8.1-8.1-19.1-12.7-30.6-12.7zM24 80l336 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 32C10.7 32 0 42.7 0 56S10.7 80 24 80z" />
    </Icon>
);

export default UpToLine;