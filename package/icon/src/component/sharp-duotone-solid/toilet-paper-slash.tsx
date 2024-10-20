
import { Icon, generic } from "../../index";

/**
 * A component that renders the `toilet-paper-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toilet-paper-slash?s=sharp-duotone-solid toilet-paper-slash}
 * @preview ![toilet-paper-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/toilet-paper-slash.svg)
 */
const ToiletPaperSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M8 512l325.3 0c17-40.8 28.5-82.5 36.2-124.9L66.5 148.4C64.9 162.4 64 177 64 192c0 89.9-3.9 190.6-37.6 275.8L8 512zM94.9 50.9c95.7 74.3 191.5 148.7 287.2 223c1.4-27.1 1.9-54.4 1.9-81.9c0-65.5 13.2-142.4 60.2-192L160 0c-25.1 0-48 19.3-65.1 50.9zM416 192c0 48.6 9 92.9 23.9 126.7c27.5 21.4 55.1 42.8 82.6 64.1C570.6 372.4 608 291 608 192C608 86 565 0 512 0s-96 86-96 192zm64 0c0-35.3 14.3-64 32-64s32 28.7 32 64s-14.3 64-32 64s-32-28.7-32-64z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default ToiletPaperSlash;