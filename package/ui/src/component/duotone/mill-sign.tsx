
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mill-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mill-sign?s=duotone mill-sign}
 * @preview ![mill-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/mill-sign.svg)
 */
const MillSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M80 480c0 13.1 8.2 25.5 21.2 30.1c3.6 1.3 7.2 1.9 10.8 1.9c13.1 0 25.5-8.2 30.1-21.2l21.4-60c-2.3-4.4-3.6-9.4-3.6-14.7l0-165.5L81.9 469.2c-1.3 3.6-1.9 7.2-1.9 10.8zM208 116.1C226.1 103.4 248.2 96 272 96c1.9 0 3.7 0 5.5 .1s3.6 .2 5.4 .4c6.4-17.9 12.8-35.8 19.2-53.8c1.3-3.6 1.9-7.2 1.9-10.8c0-13.1-8.2-25.5-21.2-30.1c-16.6-5.9-35 2.7-40.9 19.4L208 116.1zM224 208l0 53.5 35.7-100C239.1 167 224 185.7 224 208z" />
        <path d="M112 160c-26.5 0-48 21.5-48 48l0 208c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 208l0-80c0-17.7 14.3-32 32-32c10.9 0 20.5 5.4 26.3 13.7C74.2 101 92.5 96 112 96c31.3 0 59.7 12.9 80 33.6C212.3 108.9 240.7 96 272 96c61.9 0 112 50.1 112 112l0 208c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-208c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 208c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-208c0-26.5-21.5-48-48-48z" />
    </Icon>
);

export default MillSign;