
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chair` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chair?s=duotone chair}
 * @preview ![chair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chair.svg)
 */
const Chair: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 384l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96-64 0zM64 128l0 160 48 0 0-160c0-29.6 16.1-55.5 40-69.3L152 288l48 0 0-240 48 0 0 240 48 0 0-229.3c23.9 13.8 40 39.7 40 69.3l0 160 48 0 0-160C384 57.3 326.7 0 256 0L192 0C121.3 0 64 57.3 64 128zM352 384l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96-64 0z" />
        <path d="M19.4 305.7C24.8 294.8 35.9 288 48 288l352 0c12.1 0 23.2 6.8 28.6 17.7l16 32c5 9.9 4.4 21.7-1.4 31.1s-16.1 15.2-27.2 15.2L32 384c-11.1 0-21.4-5.7-27.2-15.2s-6.4-21.2-1.4-31.1l16-32z" />
    </Icon>
);

export default Chair;