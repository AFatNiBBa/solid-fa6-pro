
import { Icon, generic } from "../../index";

/**
 * A component that renders the `kip-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kip-sign?s=duotone kip-sign}
 * @preview ![kip-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/kip-sign.svg)
 */
const KipSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 256c0-17.7 14.3-32 32-32l32 0 0 32 0 32-32 0c-17.7 0-32-14.3-32-32zm145.2 0l37.3-32L352 224c17.7 0 32 14.3 32 32s-14.3 32-32 32l-169.5 0c-12.4-10.7-24.9-21.3-37.3-32z" />
        <path d="M340.8 88.3c13.4-11.5 15-31.7 3.5-45.1s-31.7-15-45.1-3.5L128 186.4 128 64c0-17.7-14.3-32-32-32S64 46.3 64 64l0 192 0 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-122.4L299.2 472.3c13.4 11.5 33.6 9.9 45.1-3.5s9.9-33.6-3.5-45.1L145.2 256 340.8 88.3z" />
    </Icon>
);

export default KipSign;