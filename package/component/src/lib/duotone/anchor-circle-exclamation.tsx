
import { Icon, generic } from "../../index";

/**
 * A component that renders the `anchor-circle-exclamation` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/anchor-circle-exclamation?s=duotone anchor-circle-exclamation}
 * @preview ![anchor-circle-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/anchor-circle-exclamation.svg)
 */
const AnchorCircleExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 336c0 6.1 2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l7-7 0 6.1c0 88.4 71.6 160 160 160l80 0 80 0c8.2 0 16.3-.6 24.2-1.8c-22.2-16.2-40.4-37.5-53-62.2L320 448l0-80 0-128 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-10.9 0C367 158.8 384 129.4 384 96c0-53-43-96-96-96s-96 43-96 96c0 33.4 17 62.8 42.9 80L224 176c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0 208-48 0c-53 0-96-43-96-96l0-6.1 7 7c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L97 263c-9.4-9.4-24.6-9.4-33.9 0L7 319c-4.7 4.7-7 10.8-7 17zM320 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M352 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm168 72a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm-8-152c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 80c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80z" />
    </Icon>
);

export default AnchorCircleExclamation;