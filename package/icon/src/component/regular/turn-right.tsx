
import { Icon } from "../../index";

/**
 * A component that renders the `turn-right` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-right?s=regular turn-right}
 * @preview ![turn-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/turn-right.svg)
 */
const TurnRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M505.5 240.4c8.7-9.2 8.7-23.7 0-32.9L384.1 78.6c-8.8-9.3-21-14.6-33.7-14.6C324.7 64 304 84.7 304 110.3l0 41.7-144 0C71.6 152 0 223.6 0 312L0 424c0 30.9 25.1 56 56 56l32 0c30.9 0 56-25.1 56-56l0-120c0-4.4 3.6-8 8-8l152 0 0 41.7c0 25.6 20.7 46.3 46.3 46.3c12.8 0 25-5.3 33.7-14.6l121.4-129zM352 333.5l0-61.5c0-13.3-10.7-24-24-24l-176 0c-30.9 0-56 25.1-56 56l0 120c0 4.4-3.6 8-8 8l-32 0c-4.4 0-8-3.6-8-8l0-112c0-61.9 50.1-112 112-112l168 0c13.3 0 24-10.7 24-24l0-61.5L455 224 352 333.5z" />
    </Icon>
);

export default TurnRight;