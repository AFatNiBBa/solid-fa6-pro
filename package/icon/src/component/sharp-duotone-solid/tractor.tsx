
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tractor` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tractor?s=sharp-duotone-solid tractor}
 * @preview ![tractor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tractor.svg)
 */
const Tractor: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 288l0 96 40.2 0c1.7 4.8 3.7 9.5 5.8 14.1L17.6 426.5l67.9 67.9L113.9 466c4.6 2.2 9.3 4.1 14.1 5.8l0 40.2 96 0 0-40.2c4.8-1.7 9.5-3.7 14.1-5.8l28.4 28.4 67.9-67.9L306 398.1c2.2-4.6 4.1-9.3 5.8-14.1l40.2 0 0-32 0-64-40.2 0c-1.7-4.8-3.7-9.5-5.8-14.1l28.4-28.4-67.9-67.9L238.1 206c-4.6-2.2-9.3-4.1-14.1-5.8l0-40.2-64 0-32 0 0 40.2c-4.8 1.7-9.5 3.7-14.1 5.8L96 188.1 85.5 177.6 17.6 245.5 46 273.9c-2.2 4.6-4.1 9.3-5.8 14.1L0 288zm256 48A80 80 0 1 1 96 336a80 80 0 1 1 160 0zm184 88a88 88 0 1 0 176 0 88 88 0 1 0 -176 0zm112 0a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M128 0L96 0l0 32 0 128 0 28.1L113.9 206c4.6-2.2 9.3-4.1 14.1-5.8l0-40.2 32 0 0-96 106.3 0 38.4 96L224 160l0 40.2c4.8 1.7 9.5 3.7 14.1 5.8l28.4-28.4 67.9 67.9L306 273.9c2.2 4.6 4.1 9.3 5.8 14.1l40.2 0 0 64 80 0c21.9-29.1 56.7-48 96-48c16.3 0 31.9 3.3 46.1 9.2L640 272l0-112-96 0 0-56.4 12.6-25.2 14.3-28.6L513.7 21.1 499.4 49.7l-16 32L480 88.4l0 7.6 0 64-106.3 0-56-139.9L309.7 0 288 0 128 0z" />
    </Icon>
);

export default Tractor;