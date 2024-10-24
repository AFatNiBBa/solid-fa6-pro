
import { Icon, generic } from "../../index";

/**
 * A component that renders the `anchor-lock` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/anchor-lock?s=duotone anchor-lock}
 * @preview ![anchor-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/anchor-lock.svg)
 */
const AnchorLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 336c0 6.1 2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l7-7 0 6.1c0 88.4 71.6 160 160 160l80 0 80 0c8 0 15.9-.6 23.6-1.7c-4.8-9-7.6-19.3-7.6-30.3l0-33.3c-5.2 .9-10.5 1.3-16 1.3l-48 0 0-208 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-10.9 0C367 158.8 384 129.4 384 96c0-53-43-96-96-96s-96 43-96 96c0 33.4 17 62.8 42.9 80L224 176c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0 208-48 0c-53 0-96-43-96-96l0-6.1 7 7c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L97 263c-9.4-9.4-24.6-9.4-33.9 0L7 319c-4.7 4.7-7 10.8-7 17zM320 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M496 272l0 48 64 0 0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zm-48 48l0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default AnchorLock;