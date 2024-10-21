
import { Icon, generic } from "../../index";

/**
 * A component that renders the `explosion` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/explosion?s=duotone explosion}
 * @preview ![explosion](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/explosion.svg)
 */
const Explosion: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M34.4 333.5c-5.2 10.7-1.8 23.5 7.9 30.3l87.4 60.5c-1.2 7.7-1.8 15.7-1.8 23.7c21.3 0 42.7 0 64 0c0-53 43-96 96-96s96 43 96 96c21.3 0 42.7 0 64 0c0-9.4-.8-18.7-2.4-27.7L537 329c8.5-8.5 9.4-21.9 2.2-31.5s-20.4-12.3-30.9-6.4l-97.2 54.7c-2-2.4-4.1-4.8-6.3-7.1L541.9 33.9c1.4-3.2 2.1-6.5 2.1-9.8c0-8.6-4.7-16.9-12.7-21.2c-11.2-5.9-25-2.2-31.7 8.5L325.4 291.6 311.9 149.7C310.7 137.4 300.4 128 288 128s-22.7 9.4-23.9 21.7L250.5 292.4c-1.5 .4-3 .7-4.5 1.1L143.6 205.8c-8.9-7.7-22.1-7.7-31.1-.1s-11.2 20.6-5.1 30.7l62.3 103.9c-3.3 3.6-6.4 7.4-9.4 11.3L63.2 321.1c-11.3-3.5-23.5 1.7-28.7 12.4zM264 24l0 48c0 13.3 10.7 24 24 24s24-10.7 24-24l0-48c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
        <path d="M0 480c0-17.7 14.3-32 32-32l512 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default Explosion;