
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-k` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-k?s=sharp-duotone-solid circle-k}
 * @preview ![circle-k](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-k.svg)
 */
const CircleK: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM160 128l48 0 0 24 0 83.8L222.1 220l82.5-92 64.5 0-1 1.1L270.3 238.3 362 376.7l4.8 7.3-57.6 0L237.1 275.2 208 307.7l0 52.3 0 24-48 0 0-24 0-61.5L160 152l0-24z" />
        <path d="M304.6 128l64.5 0-1 1.1L270.3 238.3 362 376.7l4.8 7.3-57.6 0L237.1 275.2 208 307.7l0 52.3 0 24-48 0 0-24 0-61.5L160 152l0-24 48 0 0 24 0 83.8L222.1 220l82.5-92z" />
    </Icon>
);

export default CircleK;