
import { Icon, generic } from "../../index";

/**
 * A component that renders the `toilet-paper-under-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toilet-paper-under-slash?s=sharp-duotone-solid toilet-paper-under-slash}
 * @preview ![toilet-paper-under-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/toilet-paper-under-slash.svg)
 */
const ToiletPaperUnderSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 192c0-15 .9-29.6 2.5-43.6L365.5 384 160 384c-53 0-96-86-96-192zM94.9 50.9C112 19.3 134.9 0 160 0L412.2 0C400.6 12.2 391 26.9 383.5 41.9C363.5 82 352 135.1 352 192c0 21.4 1.6 42.3 4.7 62.2C269.5 186.4 182.2 118.7 94.9 50.9zM224 416l182.2 0L528 512l48 0-352 0 0-96zM384 192c0-83.6 26.7-154.7 64-181.1C458 3.8 468.8 0 480 0c53 0 96 86 96 192c0 35-4.7 67.8-12.8 96c-11.6 39.9-30.1 70.8-52.3 85.9l-115-89.3c-7.6-27.5-11.9-59-11.9-92.6zm64 0c0 35.3 14.3 64 32 64s32-28.7 32-64s-14.3-64-32-64s-32 28.7-32 64zm89 202.2c16.3-13.6 29.3-32 39-51.1l0 81.3c-13-10.1-26-20.2-39-30.2z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default ToiletPaperUnderSlash;