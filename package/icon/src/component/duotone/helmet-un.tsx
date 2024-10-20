
import { Icon, generic } from "../../index";

/**
 * A component that renders the `helmet-un` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/helmet-un?s=duotone helmet-un}
 * @preview ![helmet-un](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/helmet-un.svg)
 */
const HelmetUn: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M215.7 384l2.7 0c3.1-5.3 6.2-10.6 9.3-15.9L242.3 343 320 416.9 320 288l48 0 0 174.5 1.6 1.5 70.4 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-6.2 0-12.1-2.4-16.5-6.6L215.7 384z" />
        <path d="M479.5 224C471.2 98.9 367.2 0 240 0C107.5 0 0 107.5 0 240l0 56.3C0 344.8 39.2 384 87.7 384L200 384l18.4 0 9.3-15.9L274.4 288 448 288l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-.5 0zM285.3 103.1l34.7 52 0-43.2c0-8.8 7.2-16 16-16s16 7.2 16 16l0 96c0 7.1-4.6 13.3-11.4 15.3s-14-.6-17.9-6.4l-34.7-52 0 43.2c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-7.1 4.6-13.3 11.4-15.3s14 .6 17.9 6.4zM160 112l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8 7.2-16 16-16s16 7.2 16 16l0 64c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-64c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
    </Icon>
);

export default HelmetUn;