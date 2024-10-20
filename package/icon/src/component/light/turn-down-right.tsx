
import { Icon } from "../../index";

/**
 * A component that renders the `turn-down-right` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-down-right?s=light turn-down-right}
 * @preview ![turn-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/turn-down-right.svg)
 */
const TurnDownRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 208l0-57.3c0-3.7 3-6.7 6.7-6.7c1.9 0 3.7 .8 5 2.2L476.2 272 363.7 397.8c-1.3 1.4-3.1 2.2-5 2.2c-3.7 0-6.7-3-6.7-6.7l0-57.3c0-17.7-14.3-32-32-32l-176 0C82.1 304 32 253.9 32 192L32 80c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 112c0 26.5 21.5 48 48 48l176 0c17.7 0 32-14.3 32-32zm154.7 78c3.4-3.8 5.3-8.8 5.3-14s-1.9-10.1-5.3-14L387.5 124.9c-7.3-8.2-17.8-12.9-28.8-12.9c-21.4 0-38.7 17.3-38.7 38.7l0 25.3 0 32-32 0-144 0c-8.8 0-16-7.2-16-16l0-112c0-26.5-21.5-48-48-48L48 32C21.5 32 0 53.5 0 80L0 192c0 79.5 64.5 144 144 144l144 0 32 0 0 32 0 25.3c0 21.4 17.3 38.7 38.7 38.7c11 0 21.5-4.7 28.8-12.9L506.7 286z" />
    </Icon>
);

export default TurnDownRight;