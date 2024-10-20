
import { Icon, generic } from "../../index";

/**
 * A component that renders the `eject` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eject?s=duotone eject}
 * @preview ![eject](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/eject.svg)
 */
const Eject: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 432c0-26.5 21.5-48 48-48l352 0c26.5 0 48 21.5 48 48s-21.5 48-48 48L48 480c-26.5 0-48-21.5-48-48z" />
        <path d="M259.4 47.6C250.3 37.6 237.5 32 224 32s-26.3 5.6-35.4 15.6l-176 192c-12.9 14-16.2 34.3-8.6 51.8S29 320 48 320l352 0c19 0 36.3-11.2 43.9-28.7s4.3-37.7-8.6-51.8l-176-192z" />
    </Icon>
);

export default Eject;