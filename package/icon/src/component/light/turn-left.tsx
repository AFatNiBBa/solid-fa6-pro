
import { Icon } from "../../index";

/**
 * A component that renders the `turn-left` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-left?s=light turn-left}
 * @preview ![turn-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/turn-left.svg)
 */
const TurnLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 304l0 57.3c0 3.7-3 6.7-6.7 6.7c-1.9 0-3.7-.8-5-2.2L35.8 240 148.3 114.2c1.3-1.4 3.1-2.2 5-2.2c3.7 0 6.7 3 6.7 6.7l0 57.3c0 17.7 14.3 32 32 32l176 0c61.9 0 112 50.1 112 112l0 112c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-112c0-26.5-21.5-48-48-48l-176 0c-17.7 0-32 14.3-32 32zM5.3 226C1.9 229.9 0 234.8 0 240s1.9 10.1 5.3 14L124.5 387.1c7.3 8.2 17.8 12.9 28.8 12.9c21.4 0 38.7-17.3 38.7-38.7l0-25.3 0-32 32 0 144 0c8.8 0 16 7.2 16 16l0 112c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-112c0-79.5-64.5-144-144-144l-144 0-32 0 0-32 0-25.3C192 97.3 174.7 80 153.3 80c-11 0-21.5 4.7-28.8 12.9L5.3 226z" />
    </Icon>
);

export default TurnLeft;