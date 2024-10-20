
import { Icon } from "../../index";

/**
 * A component that renders the `square-down` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-down?s=solid square-down}
 * @preview ![square-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/square-down.svg)
 */
const SquareDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480zm171.3-84.7l112-112c4.6-4.6 5.9-11.5 3.5-17.4s-8.3-9.9-14.8-9.9l-64 0 0-96c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32l0 96-64 0c-6.5 0-12.3 3.9-14.8 9.9s-1.1 12.9 3.5 17.4l112 112c6.2 6.2 16.4 6.2 22.6 0z" />
    </Icon>
);

export default SquareDown;