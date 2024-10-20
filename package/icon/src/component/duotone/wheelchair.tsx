
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wheelchair` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wheelchair?s=duotone wheelchair}
 * @preview ![wheelchair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/wheelchair.svg)
 */
const Wheelchair: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 352c0 88.4 71.6 160 160 160s160-71.6 160-160l-48 0c0 61.9-50.1 112-112 112S48 413.9 48 352s50.1-112 112-112c5.3 0 10.5 .4 15.6 1.1c-3.3-16.3-6.5-32.6-9.8-49c-1.9-.1-3.8-.1-5.8-.1C71.6 192 0 263.6 0 352z" />
        <path d="M240 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm19.8 128l-1.9-9.7c-4.5-22.3-24-38.3-46.8-38.3c-30.1 0-52.7 27.5-46.8 57l23.1 115.5c6 29.9 32.2 51.4 62.8 51.4l5.1 0c.4 0 .8 0 1.3 0l94.1 0c6.7 0 12.6 4.1 15 10.4L402 459.2c6 16.1 23.8 24.6 40.1 19.1l48-16c16.8-5.6 25.8-23.7 20.2-40.5s-23.7-25.8-40.5-20.2l-18.7 6.2-25.5-68c-11.7-31.2-41.6-51.9-74.9-51.9l-68.5 0-9.6-48 63.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-76.2 0z" />
    </Icon>
);

export default Wheelchair;