
import { Icon } from "../../index";

/**
 * A component that renders the `square-y` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-y?s=regular square-y}
 * @preview ![square-y](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/square-y.svg)
 */
const SquareY: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm138.1 56.3L224 251.4l85.9-99.1c8.7-10 23.8-11.1 33.9-2.4s11.1 23.8 2.4 33.9L248 297l0 79c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-79L101.9 183.7c-8.7-10-7.6-25.2 2.4-33.9s25.2-7.6 33.9 2.4z" />
    </Icon>
);

export default SquareY;