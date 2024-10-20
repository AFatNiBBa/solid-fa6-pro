
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-holding-hand` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-holding-hand?s=duotone hand-holding-hand}
 * @preview ![hand-holding-hand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hand-holding-hand.svg)
 */
const HandHoldingHand: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 184c0 8.2 2.5 16.6 7.8 23.7c13.1 17.8 38.1 21.6 55.9 8.5L183.4 128 304 128c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 16 0 78.3 0c29.1 0 57.3-9.9 80-28l44.9-36 36.8 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L384 32 223.5 32c-29 0-57.3 9.3-80.7 26.5L16.3 151.8C5.6 159.6 0 171.8 0 184z" />
        <path d="M559.7 360.2c17.8-13.1 21.6-38.1 8.5-55.9s-38.1-21.6-55.9-8.5L392.6 384 272 384c-8.8 0-16-7.2-16-16s7.2-16 16-16l16 0 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0-16 0-78.3 0c-29.1 0-57.3 9.9-80 28L68.8 352 32 352c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l160 0 160.5 0c29 0 57.3-9.3 80.7-26.5l126.6-93.3zm-367-8.2c.3 0 .6 0 .9 0c0 0 0 0 0 0c-.3 0-.6 0-.9 0z" />
    </Icon>
);

export default HandHoldingHand;