
import { Icon } from "../../index";

/**
 * A component that renders the `wand` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wand?s=sharp-light wand}
 * @preview ![wand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/wand.svg)
 */
const Wand: typeof Icon = x => (
    <Icon {...x}>
        <path d="M376 160l14.3 0 25.7 0 0-32.5 0-12.2 8.2-9.1 43.8-49L454.8 44 191.2 279.8l-9.1 8.2-12.2 0L128 288l0 34.1 0 14.3L117.3 346 46.5 409.3l56.2 56.2L366.5 170.7 376 160zM125.4 488.1L104 512 81.3 489.3 22.7 430.7 0 408l23.9-21.4L96 322.1 96 288l0-32 32 0 41.9 0L456 0l56 56-64 71.5 0 32.5 0 32-32 0-25.7 0L125.4 488.1z" />
    </Icon>
);

export default Wand;