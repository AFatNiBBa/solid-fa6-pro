
import { Icon, generic } from "../../index";

/**
 * A component that renders the `burger-soda` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/burger-soda?s=sharp-duotone-solid burger-soda}
 * @preview ![burger-soda](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/burger-soda.svg)
 */
const BurgerSoda: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 128l0 64 32 0 301.1 0c14.5-8.5 31.3-16 50.9-21.6l0-42.4-32 0-127.8 0L243 48l37 0 24 0 0-48L280 0 224 0 205 0l-4.4 18.5L174.9 128 32 128 0 128zm40 96L64 512l192 0 0-229.4c3-9.1 6.7-17.5 11.6-25.9c5.4-9.3 13.4-20.8 24.8-32.7L40 224z" />
        <path d="M640 319.8l0-32s-32-96-176-96s-176 96-176 96l0 32 352 0zm-272-64a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm96-32a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm64 32a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm-240 160l352 0 0-64-352 0 0 64zm0 96l352 0 0-64-352 0 0 64z" />
    </Icon>
);

export default BurgerSoda;