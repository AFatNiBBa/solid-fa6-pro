
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dinosaur` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dinosaur?s=duotone dinosaur}
 * @preview ![dinosaur](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/dinosaur.svg)
 */
const Dinosaur: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 391.3C0 457.9 54.1 512 120.7 512l71.3 0 32 0 32 0 4.7 0c15.1 0 27.3-12.2 27.3-27.3c0-13.4-9.7-24.7-22.8-26.9L156.7 439.7C121.7 433.8 96 403.5 96 368c0-8.8 7.2-16 16-16s16 7.2 16 16c0 19.9 14.4 36.8 34 40.1l108.5 18.1c21.1 3.5 38 17.9 45.4 36.8c6.6 .7 13.3 1 20.1 1c16.6 0 32.7-2.1 48-6l0 22c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-55.9c76.5-35.9 128-113.5 128-201.5l0-30.6C640 86 554 0 448 0l-1.8 0c-13.6 0-26 7.7-32.1 19.8c-3.9 7.9-10.6 14-18.7 17.2l-1.7 .7C378.1 43.9 368 58.9 368 75.6l0 4.7c0 26.3 21.4 47.7 47.7 47.7l32.3 0 32 0c35.3 0 64 28.7 64 64l0 24c0 22.1-17.9 40-40 40c-8.7 0-17.1-2.8-24-8l-55.5-41.6c-40.2-30.1-89-46.4-139.2-46.4c-57.7 0-113.4 21.5-156.1 60.3L39.5 301.9C14.4 324.8 0 357.2 0 391.3zM480 48a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
        <path d="M448 48a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default Dinosaur;