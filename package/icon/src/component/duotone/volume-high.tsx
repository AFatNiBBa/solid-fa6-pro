
import { Icon, generic } from "../../index";

/**
 * A component that renders the `volume-high` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-high?s=duotone volume-high}
 * @preview ![volume-high](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/volume-high.svg)
 */
const VolumeHigh: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M378.8 185c8.4-10.3 23.5-11.8 33.8-3.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.5 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8zm60.5-74.5c8.4-10.3 23.5-11.8 33.8-3.5c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8zM499.9 36c8.4-10.3 23.5-11.8 33.8-3.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-4.5 3.6-9.8 5.4-15.1 5.4c-7 0-13.9-3-18.6-8.9c-8.4-10.3-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8z" />
        <path d="M320 64c0-12.6-7.4-24-18.9-29.2s-25-3.1-34.4 5.3L131.8 160 64 160c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l67.8 0L266.7 471.9c9.4 8.4 22.9 10.4 34.4 5.3S320 460.6 320 448l0-384z" />
    </Icon>
);

export default VolumeHigh;