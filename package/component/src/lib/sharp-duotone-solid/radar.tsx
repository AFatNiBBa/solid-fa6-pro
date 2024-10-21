
import { Icon, generic } from "../../index";

/**
 * A component that renders the `radar` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/radar?s=sharp-duotone-solid radar}
 * @preview ![radar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/radar.svg)
 */
const Radar: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256l-64 0c0 89.9-61.7 165.3-145.1 186.2C298.2 463.8 279 480 256 480s-42.2-16.2-46.9-37.8c-65.5-16.5-117.7-66.6-137-130.9C49.3 307.6 32 287.8 32 264c0-22.3 15.2-41.1 35.9-46.4C85.7 129.9 163.1 64 256 64c44.4 0 85.2 15 117.7 40.3l45.5-45.5C374.9 22.1 318.1 0 256 0C114.6 0 0 114.6 0 256zm100-35.7c16.5 7.6 28 24.3 28 43.7c0 17.8-9.7 33.4-24.1 41.7c16.5 50.7 57.7 90.3 109.4 104.6c7.9-15.6 24.1-26.2 42.8-26.2s34.8 10.7 42.8 26.2C366.4 391.5 416 329.5 416 256l-64 0c0 53-43 96-96 96s-96-43-96-96s43-96 96-96c17.8 0 34.5 4.8 48.8 13.3c15.4-15.4 30.7-30.7 46.1-46.1C324.3 107.6 291.5 96 256 96c-76.1 0-139.8 53.1-156 124.3z" />
        <path d="M489 57l17-17L472 6.1 455 23l-174 174c-7.7-3.3-16.1-5.1-25-5.1c-35.3 0-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64c0-8.9-1.8-17.3-5.1-25L489 57z" />
    </Icon>
);

export default Radar;