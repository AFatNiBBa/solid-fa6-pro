
import { Icon, generic } from "../../index";

/**
 * A component that renders the `socks` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/socks?s=sharp-duotone-solid socks}
 * @preview ![socks](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/socks.svg)
 */
const Socks: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 416c0 53 43 96 96 96c20.8 0 41-6.7 57.6-19.2l21.6-16.2c-9.7-18-15.2-38.7-15.2-60.6c0-40.3 19-78.2 51.2-102.4L288 256l0-96-160 0 0 112L38.4 339.2C14.2 357.3 0 385.8 0 416zM128 0l0 64 160 0 0-64L128 0zm0 96l0 32 160 0 0-32L128 96zM320 64l0 32 192 0 0-32L320 64zm0 64l0 32 192 0 0-32-192 0z" />
        <path d="M320 128l192 0 0-32L320 96l0 32zm0 32l0 112-89.6 67.2C206.2 357.3 192 385.8 192 416c0 53 43 96 96 96c20.8 0 41-6.7 57.6-19.2L512 368l0-208-192 0zM512 64l0-64L320 0l0 64 192 0zM128 64l0 32 160 0 0-32L128 64zm160 64l-160 0 0 32 160 0 0-32z" />
    </Icon>
);

export default Socks;