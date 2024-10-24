
import { Icon, generic } from "../../index";

/**
 * A component that renders the `landmark` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/landmark?s=duotone landmark}
 * @preview ![landmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/landmark.svg)
 */
const Landmark: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 480c0 3.1 .4 6.2 1.4 9.3C5.5 502.8 17.9 512 32 512l448 0c14.1 0 26.5-9.2 30.6-22.7c.9-3.1 1.4-6.2 1.4-9.3c0-10.5-5.2-20.6-14.2-26.6l-48-32c-.6-.4-1.2-.7-1.8-1.1L448 192l-64 0 0 224-40 0 0-224-64 0 0 224-48 0 0-224-64 0 0 224-40 0 0-224-64 0 0 228.3c-.6 .3-1.2 .7-1.7 1.1l-48 32C5.2 459.4 0 469.5 0 480z" />
        <path d="M271.9 4.2c-9.8-5.6-21.9-5.6-31.8 0l-224 128c-12.6 7.2-18.8 22-15.1 36S17.5 192 32 192l448 0c14.5 0 27.2-9.8 30.9-23.8s-2.5-28.8-15-36l-224-128z" />
    </Icon>
);

export default Landmark;