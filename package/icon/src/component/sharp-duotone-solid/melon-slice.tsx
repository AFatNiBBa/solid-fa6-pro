
import { Icon, generic } from "../../index";

/**
 * A component that renders the `melon-slice` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/melon-slice?s=sharp-duotone-solid melon-slice}
 * @preview ![melon-slice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/melon-slice.svg)
 */
const MelonSlice: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M34.6 384.6c2.1 2.1 4.3 4.3 6.4 6.4c72.9 72.9 179.6 91.1 269.3 54.4c3.6-1.5 7.2-3.1 10.8-4.7c3.6-1.7 7.1-3.5 10.7-5.3c1.7-.9 3.3-1.8 5-2.7c.5-.3 1-.6 1.5-.9c.7-.4 1.5-.8 2.2-1.3c11.2-6.5 22-13.9 32.3-22.3c3.2-2.6 6.4-5.3 9.5-8.2c3.1-2.8 6.2-5.7 9.2-8.7c3-3 5.9-6 8.7-9.2c2.8-3.1 5.5-6.3 8.2-9.5c.1-.1 .2-.2 .3-.4c2.5-3.1 5-6.3 7.4-9.5c2.6-3.5 5-7 7.4-10.6c2.2-3.3 4.3-6.6 6.2-10c2-3.4 4-7 5.9-10.5c.9-1.7 1.8-3.4 2.6-5.1c.8-1.7 1.7-3.4 2.5-5.1C483.5 229.6 467 116.9 391 41c-2.1-2.1-4.3-4.3-6.2-6.6c-22.4 22.4-44.6 44.5-66.7 66.7c1.2 8.8 1.9 17.8 1.9 26.9c0 106-86 192-192 192c-9.1 0-18.1-.6-26.9-1.9c-22.2 22.2-44.3 44.3-66.5 66.5z" />
        <path d="M34.6 384.6L41 391s0 0 0 0c96.9 96.9 253.6 97.1 350.4 .3s96.6-253.5-.3-350.4l-6.4-6.4L418.6 .6 425 7c115.6 115.6 116 302.6 .3 418.3S122.6 540.5 7 425c0 0 0 0 0 0L.6 418.6l33.9-33.9z" />
    </Icon>
);

export default MelonSlice;