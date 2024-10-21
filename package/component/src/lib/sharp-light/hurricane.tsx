
import { Icon } from "../../index";

/**
 * A component that renders the `hurricane` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hurricane?s=sharp-light hurricane}
 * @preview ![hurricane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/hurricane.svg)
 */
const Hurricane: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M216 16.2L216-.5 199.3 .2C88.5 4.7 0 96 0 208C0 309.2 72.3 393.5 168 412.2l0 83.1 0 16.7 16.7-.7C295.5 506.7 384 415.4 384 303.4c0-101.2-72.3-185.5-168-204.2l0-83.1zM32 208C32 118.9 98.2 45.3 184 33.6l0 79.3 0 14.1 14 1.7c86.8 10.8 154 84.9 154 174.6c0 89.1-66.2 162.7-152 174.4l0-79.3 0-14.1-14-1.8C99.2 371.8 32 297.7 32 208zm208 48a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm-48-80a80 80 0 1 0 0 160 80 80 0 1 0 0-160z" />
    </Icon>
);

export default Hurricane;