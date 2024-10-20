
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-envelope` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-envelope?s=duotone circle-envelope}
 * @preview ![circle-envelope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-envelope.svg)
 */
const CircleEnvelope: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128-64c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 9.3L264.7 255.6c-2.7 1.2-5.7 1.9-8.7 1.9s-5.9-.6-8.7-1.9L128 201.3l0-9.3zm0 44.5l106.1 48.3c6.9 3.1 14.4 4.8 21.9 4.8s15-1.6 21.9-4.8L384 236.5l0 83.5c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-83.5z" />
        <path d="M160 160c-17.7 0-32 14.3-32 32l0 9.3 119.3 54.3c2.7 1.2 5.7 1.9 8.7 1.9s5.9-.6 8.7-1.9L384 201.3l0-9.3c0-17.7-14.3-32-32-32l-192 0zm224 76.5L277.9 284.7c-6.9 3.1-14.3 4.8-21.9 4.8s-15-1.6-21.9-4.8L128 236.5l0 83.5c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32l0-83.5z" />
    </Icon>
);

export default CircleEnvelope;