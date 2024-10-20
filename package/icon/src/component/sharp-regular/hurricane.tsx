
import { Icon } from "../../index";

/**
 * A component that renders the `hurricane` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hurricane?s=sharp-regular hurricane}
 * @preview ![hurricane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/hurricane.svg)
 */
const Hurricane: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M216 24.7l0-26.2L189.9 .8C83.5 9.9 0 99.2 0 208C0 309.2 72.3 393.5 168 412.2l0 74.6 0 26.2 26.1-2.2C300.5 501.5 384 412.2 384 303.4c0-101.2-72.3-185.5-168-204.2l0-74.6zM48 208C48 133.4 99 70.8 168 53l0 67 0 22 21.9 1.9C271.8 151 336 219.7 336 303.4c0 74.5-51 137.2-120 155l0-67 0-22-21.9-1.9C112.2 360.4 48 291.7 48 208zm128 48a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm80 0a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
    </Icon>
);

export default Hurricane;