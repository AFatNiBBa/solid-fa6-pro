
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gears` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gears?s=sharp-duotone-solid gears}
 * @preview ![gears](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/gears.svg)
 */
const Gears: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M296 317.6l0 68.7 47.8 9.8c4.9 13.4 12 25.8 20.9 36.7l-15 44.8L410.3 512l30.9-34c7.4 1.3 15 2 22.7 2s15.4-.7 22.7-2l30.9 34 60.6-34.4-15-44.8c8.9-10.9 16-23.3 20.9-36.7l47.8-9.8 0-68.7-47.8-9.8c-4.9-13.4-12.1-25.8-20.9-36.7l15-44.8L517.7 192l-30.9 34c-7.4-1.3-15-2-22.7-2s-15.4 .7-22.7 2l-30.9-34-60.6 34.4 15 44.8c-8.9 10.9-16 23.3-20.9 36.7L296 317.6zM512 352a48 48 0 1 1 -96 0 48 48 0 1 1 96 0z" />
        <path d="M195 8L125 8 115 56.1c-13.8 5.2-26.5 12.7-37.5 22L34.4 64 0 123.4l33.9 30.3C32.7 160.9 32 168.4 32 176s.7 15.1 1.9 22.3L0 228.6 34.4 288l43.1-14.2c11.1 9.3 23.7 16.8 37.5 22L125 344l70 0 10-48.1c13.8-5.2 26.5-12.7 37.5-22L285.6 288 320 228.6l-33.9-30.3c1.3-7.3 1.9-14.7 1.9-22.3s-.7-15.1-1.9-22.3L320 123.4 285.6 64 242.5 78.2c-11.1-9.3-23.7-16.8-37.5-22L195 8zM160 128a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default Gears;