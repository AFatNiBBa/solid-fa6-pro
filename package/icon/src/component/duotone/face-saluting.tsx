
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-saluting` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-saluting?s=duotone face-saluting}
 * @preview ![face-saluting](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/face-saluting.svg)
 */
const FaceSaluting: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M101.7 310C126.5 425.5 229.1 512 352 512c141.4 0 256-114.6 256-256S493.4 0 352 0c-18.4 0-36.3 1.9-53.5 5.6c12.6 27.9 3.8 61.6-22.4 79.4l-54.6 37c8.6 4.4 16.3 10.9 22.3 19.2c8.6 11.9 12.6 25.7 12.2 39.3c4.8-2.8 10.4-4.5 16.3-4.5c17.7 0 32 14.3 32 32s-14.3 32-32 32c-13.9 0-25.8-8.9-30.2-21.4c-3.5 4.4-7.7 8.5-12.5 12l-82.3 59.9c-13.9 10.1-29.5 16.6-45.6 19.6zM235 344.6c5.2-7.2 15.2-8.8 22.3-3.6c17.5 12.6 48.9 27 94.6 27s77.2-14.4 94.6-27c7.2-5.2 17.2-3.5 22.3 3.6s3.5 17.2-3.6 22.3c-22.7 16.4-60.7 33-113.4 33s-90.6-16.6-113.4-33c-7.2-5.2-8.8-15.2-3.6-22.3zM464.4 208a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M258.1 58.5c14.6-9.9 18.4-29.8 8.5-44.4S236.8-4.4 222.2 5.5L35.1 132.5c-44.3 30.1-47.1 94.4-5.6 128.2l1.5 1.2c28.1 22.9 68.2 24 97.5 2.7l82.3-59.9c14.3-10.4 17.5-30.4 7.1-44.7s-30.4-17.5-44.7-7.1L128 185.8l0-39.1L258.1 58.5z" />
    </Icon>
);

export default FaceSaluting;