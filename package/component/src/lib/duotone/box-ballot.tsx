
import { Icon, generic } from "../../index";

/**
 * A component that renders the `box-ballot` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-ballot?s=duotone box-ballot}
 * @preview ![box-ballot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/box-ballot.svg)
 */
const BoxBallot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 208L0 320l576 0 0-112c0-26.5-21.5-48-48-48l-80 0 0 64 48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0-320 0-48 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0 0-64-80 0c-26.5 0-48 21.5-48 48z" />
        <path d="M160 0L416 0c17.7 0 32 14.3 32 32l0 224-320 0 0-224c0-17.7 14.3-32 32-32zM32 512c-17.7 0-32-14.3-32-32L0 320l576 0 0 160c0 17.7-14.3 32-32 32L32 512z" />
    </Icon>
);

export default BoxBallot;