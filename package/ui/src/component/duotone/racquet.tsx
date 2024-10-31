
import { Icon, generic } from "../../index";

/**
 * A component that renders the `racquet` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/racquet?s=duotone racquet}
 * @preview ![racquet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/racquet.svg)
 */
const Racquet: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 448c0 8.2 3.1 16.4 9.4 22.6l32 32c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4l56-56c6.2-6.2 9.4-14.4 9.4-22.6c0-5.2-1.2-10.3-3.7-15c-1.5-2.7-3.3-5.3-5.6-7.6c-10.7-10.7-21.3-21.3-32-32c-2.3-2.3-4.9-4.2-7.6-5.6c-12.1-6.4-27.5-4.5-37.6 5.6l-56 56C3.1 431.6 0 439.8 0 448z" />
        <path d="M349 64c-36 0-76.4 15.8-108.8 48.2S192 184.9 192 221c0 28.2 9.6 53.2 27.7 71.3c40.4 40.4 120.7 38.9 180.1-20.5C432.2 239.4 448 199.1 448 163c0-28.2-9.6-53.2-27.7-71.3S377.1 64 349 64zm-154 2.9C238.5 23.4 294.8 0 349 0c42.8 0 84.9 14.8 116.6 46.5S512 120.2 512 163c0 54.2-23.4 110.5-66.9 154c-54.4 54.4-131.9 78.7-198.2 61.7c-29.4-7.5-62.9-5.5-84.3 16L148.3 409c-1.5-2.7-3.3-5.3-5.6-7.6l-32-32c-2.3-2.3-4.9-4.2-7.6-5.6l14.5-14.5c21.4-21.4 23.5-54.7 16-84C129.8 250.9 128 236 128 221c0-54.2 23.4-110.5 66.9-154z" />
    </Icon>
);

export default Racquet;