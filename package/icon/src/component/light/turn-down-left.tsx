
import { Icon } from "../../index";

/**
 * A component that renders the `turn-down-left` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-down-left?s=light turn-down-left}
 * @preview ![turn-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/turn-down-left.svg)
 */
const TurnDownLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 208l0-57.3c0-3.7-3-6.7-6.7-6.7c-1.9 0-3.7 .8-5 2.2L35.8 272 148.3 397.8c1.3 1.4 3.1 2.2 5 2.2c3.7 0 6.7-3 6.7-6.7l0-57.3c0-17.7 14.3-32 32-32l176 0c61.9 0 112-50.1 112-112l0-112c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16l0 112c0 26.5-21.5 48-48 48l-176 0c-17.7 0-32-14.3-32-32zM5.3 286C1.9 282.1 0 277.2 0 272s1.9-10.1 5.3-14L124.5 124.9c7.3-8.2 17.8-12.9 28.8-12.9c21.4 0 38.7 17.3 38.7 38.7l0 25.3 0 32 32 0 144 0c8.8 0 16-7.2 16-16l0-112c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 112c0 79.5-64.5 144-144 144l-144 0-32 0 0 32 0 25.3c0 21.4-17.3 38.7-38.7 38.7c-11 0-21.5-4.7-28.8-12.9L5.3 286z" />
    </Icon>
);

export default TurnDownLeft;