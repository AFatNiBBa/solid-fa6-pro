
import { Icon, generic } from "../../index";

/**
 * A component that renders the `leaf-maple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/leaf-maple?s=sharp-duotone-solid leaf-maple}
 * @preview ![leaf-maple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/leaf-maple.svg)
 */
const LeafMaple: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16 56L64 240 16 272l122.2 67.9L274.3 203.7c5.7-5.7 11.3-11.3 17-17l33.9 33.9-17 17c-13.4 13.4-26.8 26.8-40.3 40.3c-32 32-63.9 63.9-95.9 95.9L240 496l32-48 184 48-8-64 56-48-56-48 16-64-80 0 128-96-64-32L480 32 368 64 336 0 240 128l0-80L176 64 128 8 80 64 16 56z" />
        <path d="M7.3 470.7l17-17 250-250 17-17 33.9 33.9-17 17-250 250-17 17L7.3 470.7z" />
    </Icon>
);

export default LeafMaple;