
import { Icon } from "../../index";

/**
 * A component that renders the `ring-diamond` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ring-diamond?s=light ring-diamond}
 * @preview ![ring-diamond](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/ring-diamond.svg)
 */
const RingDiamond: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M136 0c-5.7 0-11 3.1-13.9 8.1l-32 56c-3 5.3-2.8 11.8 .6 16.8l38.4 57.7C54 164.6 0 236 0 320C0 426 86 512 192 512s192-86 192-192c0-84-54-155.4-129.1-181.5l38.4-57.7c3.4-5 3.6-11.6 .6-16.8l-32-56C259 3.1 253.7 0 248 0L136 0zm85.9 130.3c-9.7-1.5-19.7-2.3-29.9-2.3s-20.2 .8-29.9 2.3l-39.3-59L145.3 32l93.4 0 22.5 39.4-39.3 59zM32 320a160 160 0 1 1 320 0A160 160 0 1 1 32 320z" />
    </Icon>
);

export default RingDiamond;