
import { Icon, generic } from "../../index";

/**
 * A component that renders the `volume-low` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-low?s=duotone volume-low}
 * @preview ![volume-low](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/volume-low.svg)
 */
const VolumeLow: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M378.8 185c4.7-5.8 11.7-8.9 18.6-8.9c5.3 0 10.7 1.8 15.1 5.4C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-4.5 3.6-9.8 5.4-15.1 5.4c-7 0-13.9-3-18.6-8.9c-8.4-10.3-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8z" />
        <path d="M320 64c0-12.6-7.4-24-18.9-29.2s-25-3.1-34.4 5.3L131.8 160 64 160c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l67.8 0L266.7 471.9c9.4 8.4 22.9 10.4 34.4 5.3S320 460.6 320 448l0-384z" />
    </Icon>
);

export default VolumeLow;