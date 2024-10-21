
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scarf` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scarf?s=sharp-duotone-solid scarf}
 * @preview ![scarf](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/scarf.svg)
 */
const Scarf: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M4.7 388.7l112-112 22.6 22.6-112 112L4.7 388.7zm48 48l112-112 22.6 22.6-112 112L52.7 436.7zm48 48l112-112 22.6 22.6-112 112-22.6-22.6zM288 406.6l11.3-11.3c3.8-3.8 7.5-7.5 11.3-11.3L411.3 484.7l-22.6 22.6c-33.6-33.6-67.1-67.1-100.7-100.7zm48-48l11.3-11.3L358.6 336 459.3 436.7l-22.6 22.6L336 358.6zm48-48c3.8-3.8 7.5-7.5 11.3-11.3s7.5-7.5 11.3-11.3c33.6 33.6 67.1 67.1 100.7 100.7l-22.6 22.6L384 310.6z" />
        <path d="M175.3 0L184 0 328 0l8.7 0 4.7 7.3 72 112 2.5 4 0 4.7 0 80 0 6.6-4.7 4.7-14.1 14.1L278.6 114.7 297.4 96 256 96l-41.4 0L256 137.4 374.6 256l9.4 9.4 11.3 11.3L406.6 288l-11.3 11.3-48 48-48 48L288 406.6l-11.3-11.3-176-176L96 214.6l0-6.6 0-80 0-4.7 2.5-4 72-112L175.3 0z" />
    </Icon>
);

export default Scarf;