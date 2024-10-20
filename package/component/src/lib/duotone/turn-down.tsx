
import { Icon, generic } from "../../index";

/**
 * A component that renders the `turn-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-down?s=duotone turn-down}
 * @preview ![turn-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/turn-down.svg)
 */
const TurnDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 64C0 81.7 14.3 96 32 96l96 0c8.8 0 16 7.2 16 16l0 208 96 0 0-208C240 50.1 189.9 0 128 0L32 0C14.3 0 0 14.3 0 32z" />
        <path d="M40.3 368.3L178.3 506.3c3.6 3.6 8.5 5.7 13.7 5.7s10-2 13.7-5.7L343.7 368.3c5.3-5.3 8.3-12.5 8.3-20c0-15.6-12.7-28.3-28.3-28.3L60.3 320C44.7 320 32 332.7 32 348.3c0 7.5 3 14.7 8.3 20z" />
    </Icon>
);

export default TurnDown;