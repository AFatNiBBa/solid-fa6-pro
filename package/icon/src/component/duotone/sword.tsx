
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sword` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sword?s=duotone sword}
 * @preview ![sword](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/sword.svg)
 */
const Sword: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M144 265.4L246.6 368 476.8 137.8c11.8-11.8 19.6-27 22.3-43.4l12.6-75.8c.1-.9 .2-1.8 .2-2.6c0-4.2-1.7-8.3-4.7-11.3C503.7 1 498.5-.6 493.4 .2L417.6 12.8c-16.4 2.7-31.6 10.6-43.4 22.3L144 265.4z" />
        <path d="M107.3 228.7c-6.2-6.2-16.4-6.2-22.6 0l-16 16c-5.4 5.4-6.2 13.8-2 20.2l53.1 79.6c2.1 3.2 1.7 7.4-1 10.1L79.2 394.2c-2.1 2.1-5.3 2.9-8.2 1.9L37.1 384.8c-5.7-1.9-12.1-.4-16.4 3.9l-16 16c-6.2 6.2-6.2 16.4 0 22.6l80 80c6.2 6.2 16.4 6.2 22.6 0l16-16c4.3-4.3 5.8-10.6 3.9-16.4L115.9 441c-1-2.9-.2-6 1.9-8.2l39.6-39.6c2.7-2.7 6.9-3.1 10.1-1l79.6 53.1c6.3 4.2 14.8 3.4 20.2-2l16-16c6.2-6.2 6.2-16.4 0-22.6l-176-176z" />
    </Icon>
);

export default Sword;