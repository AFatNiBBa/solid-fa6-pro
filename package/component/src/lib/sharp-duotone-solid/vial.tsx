
import { Icon, generic } from "../../index";

/**
 * A component that renders the `vial` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vial?s=sharp-duotone-solid vial}
 * @preview ![vial](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/vial.svg)
 */
const Vial: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 410.5L0 416c0 53 43 96 96 96l5.5 0c25.5 0 49.9-10.1 67.9-28.1L448 205.3l18.6 18.6 45.3-45.3-22.6-22.6-18.6-18.6-96-96c-6.2-6.2-12.4-12.4-18.6-18.6L333.4 .2 288.2 45.4 306.7 64 28.1 342.6C10.1 360.6 0 385 0 410.5zm64 0c0-8.5 3.4-16.6 9.4-22.6L205.3 256c48.9-48.9 97.8-97.8 146.7-146.7L402.7 160c-32 32-64 64-96 96C245.9 316.9 185 377.7 124.1 438.6c-6 6-14.1 9.4-22.6 9.4L96 448c-17.7 0-32-14.3-32-32l0-5.5z" />
        <path d="M306.7 256l-101.5 0L73.4 387.9c-6 6-9.4 14.1-9.4 22.6l0 5.5c0 17.7 14.3 32 32 32l5.5 0c8.5 0 16.6-3.4 22.6-9.4L306.7 256z" />
    </Icon>
);

export default Vial;