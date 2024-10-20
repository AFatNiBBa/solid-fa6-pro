
import { Icon, generic } from "../../index";

/**
 * A component that renders the `magnifying-glass-arrow-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass-arrow-right?s=sharp-duotone-solid magnifying-glass-arrow-right}
 * @preview ![magnifying-glass-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/magnifying-glass-arrow-right.svg)
 */
const MagnifyingGlassArrowRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 208a208 208 0 1 0 416 0A208 208 0 1 0 0 208zm96-24c8 0 16 0 24 0c39.4 0 78.7 0 118.1 0c-10.3-10.3-20.7-20.7-31-31c-5.7-5.7-11.3-11.3-17-17c11.3-11.3 22.6-22.6 33.9-33.9c5.7 5.7 11.3 11.3 17 17c24 24 48 48 72 72c5.7 5.7 11.3 11.3 17 17c-5.7 5.7-11.3 11.3-17 17c-24 24-48 48-72 72c-5.7 5.7-11.3 11.3-17 17c-11.3-11.3-22.6-22.6-33.9-33.9c5.7-5.7 11.3-11.3 17-17c10.3-10.3 20.7-20.7 31-31c-39.4 0-78.7 0-118.1 0c-8 0-16 0-24 0l0-48z" />
        <path d="M241 119l-17-17L190.1 136l17 17 31 31L120 184l-24 0 0 48 24 0 118.1 0-31 31-17 17L224 313.9l17-17 72-72 17-17-17-17-72-72zM441.4 486.6L464 509.3 509.3 464l-22.6-22.6L376 330.7C363.3 348 348 363.3 330.7 376L441.4 486.6z" />
    </Icon>
);

export default MagnifyingGlassArrowRight;