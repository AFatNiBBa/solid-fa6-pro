
import { Icon, generic } from "../../index";

/**
 * A component that renders the `saxophone-fire` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/saxophone-fire?s=sharp-duotone-solid saxophone-fire}
 * @preview ![saxophone-fire](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/saxophone-fire.svg)
 */
const SaxophoneFire: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 208l0 48 16.9 0L4.4 309.4C1.5 321.8 0 334.4 0 347.1l0 3.1C0 439.6 72.4 512 161.8 512c49.4 0 96.1-22.6 126.8-61.4L544 128l96 0 0-32L592 64l-80 0-63 63c-11.3 11.3-22.6 22.6-33.9 33.9c-4.7 4.7-9.4 9.4-14.1 14.1c-11.3 11.3-22.6 22.6-33.9 33.9c-4.7 4.7-9.4 9.4-14.1 14.1c-11.3 11.3-22.6 22.6-33.9 33.9c-39.7 39.7-79.3 79.3-119 119l-32-32 50.9-88 13.1 0 24 0 0-48-24 0L24 208 0 208zM112 368a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm32-88a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M0 153.6C0 81.9 68.3 21.3 102.4 0l51.2 51.2 25.6-25.6c61.4 51.2 76.8 106.7 76.8 128c0 7.6-.7 15.1-2 22.4l-77.6 0c-10.6-32.3-48.4-60.7-48.4-60.7s-37.8 28.3-48.4 60.7L2 176c-1.3-7.3-2-14.8-2-22.4zM353 223L319 257l-8-8-17-17L328 198.1l17 17 8 8zm48-48L367 209l-8-8-17-17L376 150.1l17 17 8 8zm48-48L415 161l-8-8-17-17L424 102.1l17 17 8 8zM120 256a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM88 344a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default SaxophoneFire;