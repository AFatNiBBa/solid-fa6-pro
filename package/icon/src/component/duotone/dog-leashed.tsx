
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dog-leashed` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dog-leashed?s=duotone dog-leashed}
 * @preview ![dog-leashed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/dog-leashed.svg)
 */
const DogLeashed: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 16c0 4 1.5 7.9 4.4 11L256 190.4 256 384c0 8.8 7.2 16 16 16s16-7.2 16-16c0-2.2 0-4.4 0-6.6c0-56.4 0-112.8 0-169.3c42.7 18 85.3 35.9 128 53.9c.6 .3 1.2 .5 1.8 .8c8.1 3.4 17.5-.4 21-8.5s-.4-17.5-8.5-21c-3.2-1.4-6.5-2.7-9.7-4.1c-38.2-16.1-76.4-32.2-114.6-48.3l-24.6-10.3L123.6 5c-3.1-3.3-7.4-5-11.6-5c-4 0-7.9 1.5-11 4.4c-3.3 3.1-5 7.4-5 11.6z" />
        <path d="M256 192l-112 0-16 0-30 0c-14.7 0-27.5-10-31-24.2L63 152.2c-4.3-17.1-21.7-27.6-38.8-23.3S-3.3 150.6 1 167.8l3.9 15.5c7.8 31.2 30.4 55.6 59.2 66.5L64 480c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-115.2c24 12.3 51.2 19.2 80 19.2c5.4 0 10.7-.2 16-.7L256 192zm32 185.4c11.2-3.2 21.9-7.4 32-12.6L320 480c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-218L288 208.1l0 169.3zM420.5 229.2l6.2-37.2 21.3 0 16 0 32 0c44.2 0 80-35.8 80-80l0-24c0-13.3-10.7-24-24-24l-56 0L478.1 46.1c-9-9-21.2-14.1-33.9-14.1L392 32 375.1 9.5c-4.5-6-11.5-9.5-19-9.5c-11.6 0-21.5 8.4-23.4 19.8l-26.8 161 114.6 48.3zM432 80a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default DogLeashed;