
import { Icon, generic } from "../../index";

/**
 * A component that renders the `toilet-paper-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toilet-paper-slash?s=duotone toilet-paper-slash}
 * @preview ![toilet-paper-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/toilet-paper-slash.svg)
 */
const ToiletPaperSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M20.2 495.8C25.9 505.8 36.5 512 48 512l237.9 0c22.3 0 45.4-12.1 55.4-36.1c7.4-17.7 17.5-47.2 26-90.6L66.5 148.4C64.9 162.4 64 177 64 192c0 101.5-11.7 170.8-23 213.9c-5.1 19.4-10.7 39.9-20.5 57.7c-5.9 9.9-6.1 22.1-.4 32.2zM95.6 49.6c95.3 74.7 190.5 149.3 285.8 224c1.6-24.8 2.6-52 2.6-81.6c0-65.5 13.2-142.4 60.2-192L160 0c-24.8 0-47.4 18.8-64.4 49.6zM416 192c0 49.1 9.2 93.9 24.4 127.9c26.9 21.1 53.8 42.2 80.7 63.3C569.9 374 608 291.9 608 192C608 86 565 0 512 0s-96 86-96 192zm64 0c0-35.3 14.3-64 32-64s32 28.7 32 64s-14.3 64-32 64s-32-28.7-32-64z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default ToiletPaperSlash;