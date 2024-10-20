
import { Icon, generic } from "../../index";

/**
 * A component that renders the `skeleton` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/skeleton?s=duotone skeleton}
 * @preview ![skeleton](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/skeleton.svg)
 */
const Skeleton: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 192c0 17.7 14.3 32 32 32l192 0 0-64L32 160c-17.7 0-32 14.3-32 32zM64 96c0 17.7 14.3 32 32 32l128 0 0-64L96 64C78.3 64 64 78.3 64 96zM96 288c0 17.7 14.3 32 32 32l96 0 0-64-96 0c-17.7 0-32 14.3-32 32zM288 64l0 64 128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L288 64zm0 96l0 64 192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-192 0zm0 96l0 64 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z" />
        <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 354.3-67.5-28.9c-8.3-3.5-17.2-5.4-26.1-5.4C93.7 352 64 381.7 64 418.4l0 1.5c0 18 7.2 35.3 19.9 48l25.8 25.8c11.7 11.7 27.6 18.3 44.1 18.3l204.3 0c16.6 0 32.4-6.6 44.1-18.3l25.8-25.8c12.7-12.7 19.9-30 19.9-48l0-1.5c0-36.7-29.7-66.4-66.4-66.4c-9 0-17.9 1.8-26.1 5.4L288 386.3 288 32zM136 440a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm216-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Skeleton;