
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hands-holding-diamond` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hands-holding-diamond?s=duotone hands-holding-diamond}
 * @preview ![hands-holding-diamond](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hands-holding-diamond.svg)
 */
const HandsHoldingDiamond: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 104l0 56 0 64L0 325.5c0 25.5 10.1 49.9 28.1 67.9L128 493.3c12 12 28.3 18.7 45.3 18.7l66.7 0c26.5 0 48-21.5 48-48l0-78.9c0-29.7-11.8-58.2-32.8-79.2l-25.3-25.3c-5.1-5.1-10.2-10.2-15.2-15.2l-32-32c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l32 32 15.2 15.2c11 11 9.2 29.2-3.7 37.8c-9.7 6.5-22.7 5.2-31-3.1L98.7 309.5c-12-12-18.7-28.3-18.7-45.3L80 224l0-80 0-40c0-22.1-17.9-40-40-40S0 81.9 0 104zM352 385.1l0 78.9c0 26.5 21.5 48 48 48l66.7 0c17 0 33.3-6.7 45.3-18.7l99.9-99.9c18-18 28.1-42.4 28.1-67.9L640 224l0-64 0-56c0-22.1-17.9-40-40-40s-40 17.9-40 40l0 40 0 80 0 40.2c0 17-6.7 33.3-18.7 45.3l-51.1 51.1c-8.3 8.3-21.3 9.6-31 3.1c-12.9-8.6-14.7-26.9-3.7-37.8l15.2-15.2 32-32c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-32 32-15.2 15.2c-8.5 8.5-16.9 16.9-25.4 25.4c-21 21-32.8 49.5-32.8 79.2z" />
        <path d="M342.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96z" />
    </Icon>
);

export default HandsHoldingDiamond;