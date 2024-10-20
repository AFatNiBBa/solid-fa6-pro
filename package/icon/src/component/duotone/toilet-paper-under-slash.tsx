
import { Icon, generic } from "../../index";

/**
 * A component that renders the `toilet-paper-under-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toilet-paper-under-slash?s=duotone toilet-paper-under-slash}
 * @preview ![toilet-paper-under-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/toilet-paper-under-slash.svg)
 */
const ToiletPaperUnderSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 192c0-15 .9-29.6 2.5-43.6L365.5 384 160 384c-53 0-96-86-96-192zM95.6 49.6C112.6 18.8 135.2 0 160 0L412.2 0C400.6 12.2 391 26.9 383.5 41.9C363.5 82 352 135.1 352 192c0 21.5 1.6 42.4 4.7 62.3c-87-68.2-174.1-136.4-261.1-204.7zM224 416l182.2 0c40.6 32 81.2 64 121.8 96l-256 0c-26.5 0-48-21.5-48-48l0-48zM384 192c0-83.6 26.7-154.7 64-181.1C458 3.8 468.8 0 480 0c53 0 96 86 96 192c0 35-4.7 67.8-12.8 96c-11.7 40.5-30.6 71.6-53.1 86.4c-38-29.8-76-59.6-114-89.3c-7.7-27.6-12-59.3-12-93.1zm64 0c0 35.3 14.3 64 32 64s32-28.7 32-64s-14.3-64-32-64s-32 28.7-32 64zm88.1 202.9c16.7-13.6 30-32.4 39.9-51.8l0 83.1c-13.3-10.4-26.6-20.8-39.9-31.2z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default ToiletPaperUnderSlash;