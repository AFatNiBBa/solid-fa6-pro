
import { Icon, generic } from "../../index";

/**
 * A component that renders the `recycle` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/recycle?s=duotone recycle}
 * @preview ![recycle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/recycle.svg)
 */
const Recycle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 351.6c0 .2 0 .4 0 .6C0 405.1 42.9 448 95.8 448l32.2 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32.2 0c-17.6 0-31.9-14.4-31.8-32c0-5.9 1.7-11.7 4.8-16.7l51.5-82.4c-18.5-10.7-37-21.3-55.5-32L14.6 301.4C5.1 316.5 .1 333.9 0 351.6zM157.2 73.1c-9.5 15.2-4.7 35.2 10.7 44.4c15 9 34.4 4.3 43.6-10.5L229 79c5.8-9.3 16-15 27-15s21.2 5.7 27 15l37.4 59.8 55.5-32L337.3 45.1C319.8 17 289.1 0 256 0S192.2 17 174.7 45.1l-17.5 28zM320 384l0 64 96.2 0c53.1 0 96.1-43.2 95.8-96.4c-.1-17.8-5.1-35.1-14.6-50.2l-24.4-39.1c-9.2-14.8-28.6-19.5-43.6-10.5c-15.3 9.2-20.2 29.2-10.7 44.4l24.4 39.1c3.1 5 4.8 10.8 4.8 16.7c.1 17.6-14.2 32-31.8 32L320 384z" />
        <path d="M292 155.2c-8.4 4.9-13.1 14.3-11.8 23.9s8.2 17.5 17.6 20l87.4 23.4c12.8 3.4 26-4.2 29.4-17L438 118.2c2.5-9.4-.9-19.3-8.6-25.3s-18.2-6.6-26.6-1.7L292 155.2zM320 352c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2l-64 64c-9.4 9.4-9.4 24.6 0 33.9l64 64c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2l0-128zM173.5 266.5c7.7-5.9 11.1-15.9 8.6-25.3l-23.4-87.4c-3.4-12.8-16.6-20.4-29.4-17L41.8 160.2c-9.4 2.5-16.3 10.4-17.6 20s3.4 19.1 11.8 23.9l110.9 64c8.4 4.9 18.9 4.2 26.6-1.7z" />
    </Icon>
);

export default Recycle;