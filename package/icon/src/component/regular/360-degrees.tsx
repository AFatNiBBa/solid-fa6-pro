
import { Icon } from "../../index";

/**
 * A component that renders the `360-degrees` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/360-degrees?s=regular 360-degrees}
 * @preview ![360-degrees](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/360-degrees.svg)
 */
const $360Degrees: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M608 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM24 64C10.7 64 0 74.7 0 88s10.7 24 24 24l83.2 0L36 218.7c-4.9 7.4-5.4 16.8-1.2 24.6S47.1 256 56 256l32 0c30.9 0 56 25.1 56 56l0 40c0 26.5-21.5 48-48 48l-1.5 0c-16 0-31-8-39.9-21.4L44 362.7c-7.4-11-22.3-14-33.3-6.7s-14 22.3-6.7 33.3l10.6 15.9C32.5 432 62.4 448 94.5 448l1.5 0c53 0 96-43 96-96l0-40c0-53.3-40-97.2-91.6-103.3L172 101.3c4.9-7.4 5.4-16.8 1.2-24.6S160.9 64 152 64L24 64zm440 80c0-17.7 14.3-32 32-32s32 14.3 32 32l0 224c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-224zM576 368l0-224c0-44.2-35.8-80-80-80s-80 35.8-80 80l0 224c0 44.2 35.8 80 80 80s80-35.8 80-80zM272 160c0-26.5 21.5-48 48-48c13.3 0 24-10.7 24-24s-10.7-24-24-24c-53 0-96 43-96 96l0 128 0 .2 0 79.8c0 44.2 35.8 80 80 80s80-35.8 80-80l0-96c0-44.2-35.8-80-80-80c-11.4 0-22.2 2.4-32 6.7l0-38.7zm32 80c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default $360Degrees;