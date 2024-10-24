
import { Icon, generic } from "../../index";

/**
 * A component that renders the `walker` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/walker?s=duotone walker}
 * @preview ![walker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/walker.svg)
 */
const Walker: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M448 448.1A64 64 0 1 1 320 448a64 64 0 1 1 128 .1z" />
        <path d="M194 64l126 0c17.7 0 32 14.3 32 32l0 64-207 0 17.9-71.8C166.5 74 179.3 64 194 64zM63 487.8L129 224l223 0 0 168.6c9.4-5.4 20.3-8.6 32-8.6s22.6 3.1 32 8.6L416 96c0-53-43-96-96-96L194 0c-44.1 0-82.4 30-93.1 72.7L1 472.2c-4.3 17.1 6.1 34.5 23.3 38.8s34.5-6.1 38.8-23.3z" />
    </Icon>
);

export default Walker;