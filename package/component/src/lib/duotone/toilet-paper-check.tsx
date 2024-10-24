
import { Icon, generic } from "../../index";

/**
 * A component that renders the `toilet-paper-check` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toilet-paper-check?s=duotone toilet-paper-check}
 * @preview ![toilet-paper-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/toilet-paper-check.svg)
 */
const ToiletPaperCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M20.2 495.8c-5.7-10-5.6-22.3 .4-32.2C63.6 385.7 64 277.3 64 192C64 86 107 0 160 0L512 0c-53 0-96 86-96 192c0 81.9-7.3 145-16.4 192c-8.6 44.1-18.8 74-26.3 91.9c-10 24-33.2 36.1-55.4 36.1L48 512c-11.5 0-22.2-6.2-27.8-16.2zM167 191c-9.4 9.4-9.4 24.6 0 33.9l40 40c9.4 9.4 24.6 9.4 33.9 0l72-72c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-23-23c-9.4-9.4-24.6-9.4-33.9 0z" />
        <path d="M399.6 384L512 384c53 0 96-86 96-192S565 0 512 0s-96 86-96 192c0 81.9-7.3 145-16.4 192zM544 192c0 35.3-14.3 64-32 64s-32-28.7-32-64s14.3-64 32-64s32 28.7 32 64z" />
    </Icon>
);

export default ToiletPaperCheck;