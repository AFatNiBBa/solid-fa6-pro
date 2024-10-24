
import { Icon, generic } from "../../index";

/**
 * A component that renders the `burger-glass` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/burger-glass?s=sharp-duotone-solid burger-glass}
 * @preview ![burger-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/burger-glass.svg)
 */
const BurgerGlass: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 0L5 64 40 512l216 0 0-229.4c3-9.1 6.7-17.5 11.6-25.9c6.6-11.3 17-25.9 32.7-40.4c17.2-15.9 40.1-31 70.1-41.6L379 64l5-64L319.8 0 64.2 0 0 0zM69.2 64l245.6 0-7.5 96L76.7 160 69.2 64z" />
        <path d="M640 319.8l0-32s-32-96-176-96s-176 96-176 96l0 32 352 0zm-272-64a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm96-32a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm64 32a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm-240 160l352 0 0-64-352 0 0 64zm0 96l352 0 0-64-352 0 0 64z" />
    </Icon>
);

export default BurgerGlass;