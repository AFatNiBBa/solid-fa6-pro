
import { Icon } from "../../index";

/**
 * A component that renders the `hand-horns` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-horns?s=thin hand-horns}
 * @preview ![hand-horns](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/hand-horns.svg)
 */
const HandHorns: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 48c0-17.7 14.3-32 32-32s32 14.3 32 32l0 152 0 56-56 0c-2.7 0-5.4 .1-8 .4L64 48zm64 224s0 0 0 0l16 0s0 0 0 0l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-72 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l72 0c18.5 0 34.6-10.5 42.6-25.9C227.4 337 240.9 344 256 344c26.5 0 48-21.5 48-48l0-24 0-40 0-120c0-17.7 14.3-32 32-32s32 14.3 32 32l0 168 0 64 0 16c0 75.1-60.9 136-136 136l-80 0C76.9 496 16 435.1 16 360l0-32c0-30.9 25.1-56 56-56l56 0zm16-16l0-56c0-17.7 14.3-32 32-32s32 14.3 32 32l0 31.9c0 0 0 0 0 .1l0 36.2c-8.5-7.6-19.7-12.2-32-12.2l-32 0zm0-91.8L144 48c0-26.5-21.5-48-48-48S48 21.5 48 48l0 212.1C20 270 0 296.7 0 328l0 32c0 83.9 68.1 152 152 152l80 0c83.9 0 152-68.1 152-152l0-16 0-64 0-168c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 84.2c-8.5-7.6-19.7-12.2-32-12.2c-12.4 0-23.6 4.7-32.1 12.3C222 171.5 201.3 152 176 152c-12.3 0-23.5 4.6-32 12.2zM224 272l0-40c0-17.7 14.3-32 32-32c17.7 0 32 14.3 32 32l0 40 0 24c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-24z" />
    </Icon>
);

export default HandHorns;