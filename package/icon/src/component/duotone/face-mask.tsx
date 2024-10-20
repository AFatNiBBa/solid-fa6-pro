
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-mask` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-mask?s=duotone face-mask}
 * @preview ![face-mask](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/face-mask.svg)
 */
const FaceMask: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 257.5c.3 47.9 13.7 92.7 36.9 131c2.9-2.8 6.8-4.5 11.1-4.5l64 0c0-25.6 0-51.1 0-76.7c-37.3-16.6-74.7-33.2-112-49.8zm2-33.4c1.5 .2 3.1 .6 4.5 1.3c38.1 16.9 76.2 33.9 114.4 50.8c8.7-12.2 23-20.2 39.1-20.2c64 0 128 0 192 0c16.2 0 30.4 8 39.1 20.2c38.1-16.9 76.2-33.9 114.4-50.8c.7-.3 1.5-.6 2.2-.8s1.5-.4 2.3-.5C526.3 97.8 418.6 0 288 0S49.7 97.8 34 224.1zM88.1 416c46.9 58.5 119 96 199.9 96s152.9-37.5 199.9-96l-58.6 0c-6.6 18.6-24.4 32-45.3 32l-192 0c-20.9 0-38.7-13.4-45.3-32l-58.6 0zm44.5-235.3C146.4 167 184.6 144 240 144c8.8 0 16 7.2 16 16s-7.2 16-16 16c-47 0-77.1 19.7-84.7 27.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6zM320 160c0-8.8 7.2-16 16-16c55.4 0 93.6 23 107.3 36.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0C413.1 195.7 383 176 336 176c-8.8 0-16-7.2-16-16zM432 307.3l0 76.7 64 0c.5 0 1.1 0 1.6 .1s1 .1 1.6 .2c1 .2 2 .5 2.9 .9c1.9 .8 3.6 1.9 5 3.3c23.2-38.2 36.6-83 36.9-131c-37.3 16.6-74.7 33.2-112 49.8z" />
        <path d="M38.5 225.4c-8.1-3.6-17.5 0-21.1 8.1s0 17.5 8.1 21.1L144 307.3l0 76.7-64 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l66.7 0c6.6 18.6 24.4 32 45.3 32l192 0c20.9 0 38.7-13.4 45.3-32l66.7 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0 0-76.7 118.5-52.7c8.1-3.6 11.7-13 8.1-21.1s-13-11.7-21.1-8.1L423.1 276.2C414.4 264 400.2 256 384 256l-192 0c-16.2 0-30.4 8-39.1 20.2L38.5 225.4zM208 304l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default FaceMask;