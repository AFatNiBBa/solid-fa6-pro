
import { Icon, generic } from "../../index";

/**
 * A component that renders the `swatchbook` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/swatchbook?s=duotone swatchbook}
 * @preview ![swatchbook](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/swatchbook.svg)
 */
const Swatchbook: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 64l64 0 0 64-64 0 0-64zm0 128l64 0 0 64-64 0 0-64zM173.1 473.1c.8-1.1 1.7-2.3 2.5-3.5c5.2-7.7 9.3-16.1 12.1-25.1c1.4-4.5 2.5-9.2 3.2-13.9c.4-2.4 .6-4.8 .8-7.2c.1-1.2 .2-2.4 .2-3.7s.1-2.5 .1-3.7l0-230L299.4 78.6c12.5-12.5 32.8-12.5 45.3 0l90.5 90.5c12.5 12.5 12.5 32.8 0 45.3L189.7 459.9c-5.1 5.1-10.7 9.5-16.5 13.2zm9.7 38.9l192-192L480 320c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-297.2 0z" />
        <path d="M32 0C14.3 0 0 14.3 0 32L0 416c0 53 43 96 96 96s96-43 96-96l0-384c0-17.7-14.3-32-32-32L32 0zm96 64l0 64-64 0 0-64 64 0zM64 192l64 0 0 64-64 0 0-64zM96 392a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Swatchbook;