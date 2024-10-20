
import { Icon, generic } from "../../index";

/**
 * A component that renders the `transporter-6` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/transporter-6?s=duotone transporter-6}
 * @preview ![transporter-6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/transporter-6.svg)
 */
const Transporter_6: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 48c0 4.1 2.7 7.6 6.6 8.7L32 64l7.3 25.4C40.4 93.3 43.9 96 48 96s7.6-2.7 8.7-6.6L64 64l25.4-7.3C93.3 55.6 96 52.1 96 48s-2.7-7.6-6.6-8.7L64 32 56.7 6.6C55.6 2.7 52.1 0 48 0s-7.6 2.7-8.7 6.6L32 32 6.6 39.3C2.7 40.4 0 43.9 0 48zM96 272c0 8.8 7.2 16 16 16l288 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-288 0c-8.8 0-16 7.2-16 16zM208 16c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L224 0c-8.8 0-16 7.2-16 16zM416 400c0 4.1 2.7 7.6 6.6 8.7L448 416l7.3 25.4c1.1 3.9 4.7 6.6 8.7 6.6s7.6-2.7 8.7-6.6L480 416l25.4-7.3c3.9-1.1 6.6-4.7 6.6-8.7s-2.7-7.6-6.6-8.7L480 384l-7.3-25.4c-1.1-3.9-4.7-6.6-8.7-6.6s-7.6 2.7-8.7 6.6L448 384l-25.4 7.3c-3.9 1.1-6.6 4.7-6.6 8.7z" />
        <path d="M96 480c0-17.7 14.3-32 32-32H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default Transporter_6;