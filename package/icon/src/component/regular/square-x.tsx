
import { Icon } from "../../index";

/**
 * A component that renders the `square-x` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-x?s=regular square-x}
 * @preview ![square-x](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/square-x.svg)
 */
const SquareX: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm154.3 40.5L224 218.8l69.7-82.3c8.6-10.1 23.7-11.4 33.8-2.8s11.4 23.7 2.8 33.8L255.4 256l74.9 88.5c8.6 10.1 7.3 25.3-2.8 33.8s-25.3 7.3-33.8-2.8L224 293.2l-69.7 82.3c-8.6 10.1-23.7 11.4-33.8 2.8s-11.4-23.7-2.8-33.8L192.6 256l-74.9-88.5c-8.6-10.1-7.3-25.3 2.8-33.8s25.3-7.3 33.8 2.8z" />
    </Icon>
);

export default SquareX;