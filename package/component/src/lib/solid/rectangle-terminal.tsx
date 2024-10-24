
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-terminal` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-terminal?s=solid rectangle-terminal}
 * @preview ![rectangle-terminal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/rectangle-terminal.svg)
 */
const RectangleTerminal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm102.3 55.8c-9 9.8-8.3 25 1.5 33.9L180.5 256l-76.7 70.3c-9.8 9-10.4 24.1-1.5 33.9s24.1 10.4 33.9 1.5l96-88c5-4.5 7.8-11 7.8-17.7s-2.8-13.1-7.8-17.7l-96-88c-9.8-9-25-8.3-33.9 1.5zM248 336c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z" />
    </Icon>
);

export default RectangleTerminal;