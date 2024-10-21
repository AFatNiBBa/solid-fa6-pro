
import { Icon, generic } from "../../index";

/**
 * A component that renders the `drone` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/drone?s=duotone drone}
 * @preview ![drone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/drone.svg)
 */
const Drone: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 112c0 61.9 50.1 112 112 112c17.2 0 33.4-3.9 47.9-10.7l-29.9-39.8c-5.7 1.7-11.8 2.6-18.1 2.6c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64c0 6.3-.9 12.3-2.6 18.1C186.7 140 200 150 213.3 160c6.8-14.6 10.7-30.8 10.7-48C224 50.1 173.9 0 112 0S0 50.1 0 112zM0 400c0 61.9 50.1 112 112 112s112-50.1 112-112c0-17.2-3.9-33.4-10.7-47.9l-39.8 29.9c1.7 5.7 2.6 11.8 2.6 18.1c0 35.3-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64c6.3 0 12.3 .9 18.1 2.6C140 325.3 150 312 160 298.7c-14.6-6.8-30.8-10.7-48-10.7C50.1 288 0 338.1 0 400zM288 112c0 17.2 3.9 33.4 10.7 47.9l39.8-29.9c-1.7-5.7-2.6-11.8-2.6-18.1c0-35.3 28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64c-6.3 0-12.3-.9-18.1-2.6C372 186.7 362 200 352 213.3c14.6 6.8 30.8 10.7 48 10.7c61.9 0 112-50.1 112-112S461.9 0 400 0S288 50.1 288 112zm0 288c0 61.9 50.1 112 112 112s112-50.1 112-112s-50.1-112-112-112c-17.2 0-33.4 3.9-47.9 10.7c10 13.3 19.9 26.6 29.9 39.8c5.7-1.7 11.8-2.6 18.1-2.6c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64c0-6.3 .9-12.3 2.6-18.1C325.3 372 312 362 298.7 352c-6.8 14.6-10.7 30.8-10.7 48z" />
        <path d="M80 112c0 16.2 12.1 29.7 27.8 31.7L160 213.3l0 85.3-52.2 69.6C92.1 370.3 80 383.8 80 400c0 17.7 14.3 32 32 32c16.2 0 29.7-12.1 31.7-27.8L213.3 352l85.3 0 69.6 52.2c2.1 15.7 15.5 27.8 31.7 27.8c17.7 0 32-14.3 32-32c0-16.2-12.1-29.7-27.8-31.7L352 298.7l0-85.3 52.2-69.6c15.7-2.1 27.8-15.5 27.8-31.7c0-17.7-14.3-32-32-32c-16.2 0-29.7 12.1-31.7 27.8L298.7 160l-85.3 0-69.6-52.2C141.7 92.1 128.2 80 112 80c-17.7 0-32 14.3-32 32z" />
    </Icon>
);

export default Drone;