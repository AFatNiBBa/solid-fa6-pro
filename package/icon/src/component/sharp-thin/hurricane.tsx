
import { Icon } from "../../index";

/**
 * A component that renders the `hurricane` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hurricane?s=sharp-thin hurricane}
 * @preview ![hurricane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/hurricane.svg)
 */
const Hurricane: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 208C0 93.1 93.1 0 208 0l8 0 0 8 0 91.2c95.7 18.7 168 103 168 204.2c0 114.9-93.1 208-208 208l-8 0 0-8 0-91.2C72.3 393.5 0 309.2 0 208zM200 16.2C97.7 20.4 16 104.6 16 208c0 95.6 69.8 174.9 161.3 189.6l6.7 1.1 0 6.8 0 89.8c102.3-4.2 184-88.5 184-191.8c0-95.6-69.8-174.9-161.3-189.6l-6.7-1.1 0-6.8 0-89.8zM192 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-176a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm16 96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-48 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default Hurricane;