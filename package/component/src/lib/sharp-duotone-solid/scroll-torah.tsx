
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scroll-torah` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scroll-torah?s=sharp-duotone-solid scroll-torah}
 * @preview ![scroll-torah](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/scroll-torah.svg)
 */
const ScrollTorah: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 32l0 448 448 0 0-448L96 32zm91.1 148l20.9 0 67.8 0 33.9-58L320 104.2l10.4 17.8 33.9 58 67.8 0 20.9 0-10.5 18-33.8 58 33.8 58 10.5 18L432 332l-67.8 0-33.9 58L320 407.8 309.6 390l-33.9-58L208 332l-20.9 0 10.5-18 33.8-58-33.8-58-10.5-18zm41.8 24l16.4 28.2L261.8 204l-32.9 0zm0 104l32.9 0-16.4-28.2L228.9 308zm30.3-52l30.3 52 60.9 0 30.3-52-30.3-52-60.9 0-30.3 52zm44.3-76l32.9 0L320 151.8 303.6 180zm0 152L320 360.2 336.4 332l-32.9 0zm74.7-128l16.4 28.2L411.1 204l-32.9 0zm0 104l32.9 0-16.4-28.2L378.2 308z" />
        <path d="M96 0L0 0 0 512l96 0L96 0zM640 0L544 0l0 512 96 0L640 0z" />
    </Icon>
);

export default ScrollTorah;