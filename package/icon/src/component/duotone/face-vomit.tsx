
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-vomit` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-vomit?s=duotone face-vomit}
 * @preview ![face-vomit](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/face-vomit.svg)
 */
const FaceVomit: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 256c0 72.5 30.1 137.9 78.5 184.5l16.7-5.6c11.9-4 21.5-12.3 27.2-22.9c-16.7-12.6-26.4-27.7-26.4-44c0-44.2 71.6-80 160-80s160 35.8 160 80c0 16.3-9.7 31.4-26.4 44c5.7 10.6 15.2 19 27.2 22.9l16.7 5.6C513.9 393.9 544 328.5 544 256C544 114.6 429.4 0 288 0S32 114.6 32 256zM148 141.1c0-9 9.6-14.7 17.5-10.5l89.9 47.9c10.7 5.7 10.7 21.1 0 26.8l-89.9 47.9c-7.9 4.2-17.5-1.5-17.5-10.5c0-2.8 1-5.5 2.8-7.6l36-43.2-36-43.2c-1.8-2.1-2.8-4.8-2.8-7.6zm172.6 37.4l89.9-47.9c7.9-4.2 17.5 1.5 17.5 10.5c0 2.8-1 5.5-2.8 7.6l-36 43.2 36 43.2c1.8 2.1 2.8 4.8 2.8 7.6c0 9-9.6 14.7-17.5 10.5l-89.9-47.9c-10.7-5.7-10.7-21.1 0-26.8z" />
        <path d="M192 396.1l0-57.4c23.6-11.1 57.3-18.7 96-18.7s72.4 7.6 96 18.7l0 57.4c0 31 19.8 58.5 49.2 68.3l34.1 11.4c7.6 2.5 12.7 9.6 12.7 17.6c0 10.3-8.3 18.6-18.6 18.6l-346.8 0c-10.3 0-18.6-8.3-18.6-18.6c0-8 5.1-15.1 12.7-17.6l34.1-11.4c29.4-9.8 49.2-37.3 49.2-68.3zM304 384a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm-48 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm256 16a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM0 480a32 32 0 1 1 64 0A32 32 0 1 1 0 480z" />
    </Icon>
);

export default FaceVomit;