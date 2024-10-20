
import { Icon, generic } from "../../index";

/**
 * A component that renders the `vest-patches` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vest-patches?s=sharp-duotone-solid vest-patches}
 * @preview ![vest-patches](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/vest-patches.svg)
 */
const VestPatches: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M136 416a40 40 0 1 1 -80 0 40 40 0 1 1 80 0zM128 0l7 0 13.3 0 6.9 11.1 .3 .4c.4 .6 1.2 1.5 2.3 2.8c2.3 2.6 6.1 6.3 11.5 10.1C179.9 31.8 197.4 40 224 40s44.1-8.2 54.7-15.6c5.4-3.8 9.2-7.5 11.5-10.1c1.1-1.3 1.9-2.3 2.3-2.8l.3-.4L299.6 0 313 0l7 0L296.8 69.7C279.3 79.8 255.3 88 224 88s-55.3-8.3-72.8-18.3C143.5 46.5 135.7 23.2 128 0zM304 280c0-13.3 10.7-24 24-24s24 10.7 24 24l0 8 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0-48 0 0-48 0-8z" />
        <path d="M128 0L64 0l0 160L0 256 0 512l192 0 0-224 0-5.2 1.6-4.9 13.5-40.5L128 0zm96 288l0 224 224 0 0-256-64-96L384 0 320 0 224 288zM56 416a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM80.5 255.5L96 271l15.5-15.5L120 247l17 17-8.5 8.5L113 288l15.5 15.5L137 312l-17 17-8.5-8.5L96 305 80.5 320.5 72 329 55 312l8.5-8.5L79 288 63.5 272.5 55 264l17-17 8.5 8.5zM304 280c0-13.3 10.7-24 24-24s24 10.7 24 24l0 8 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0-48 0 0-48 0-8z" />
    </Icon>
);

export default VestPatches;