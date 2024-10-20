
import { Icon } from "../../index";

/**
 * A component that renders the `turn-left` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-left?s=regular turn-left}
 * @preview ![turn-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/turn-left.svg)
 */
const TurnLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M6.5 240.4c-8.7-9.2-8.7-23.7 0-32.9l121.4-129c8.8-9.3 21-14.6 33.7-14.6c25.6 0 46.3 20.7 46.3 46.3l0 41.7 144 0c88.4 0 160 71.6 160 160l0 112c0 30.9-25.1 56-56 56l-32 0c-30.9 0-56-25.1-56-56l0-120c0-4.4-3.6-8-8-8l-152 0 0 41.7c0 25.6-20.7 46.3-46.3 46.3c-12.8 0-25-5.3-33.7-14.6L6.5 240.4zm153.5 93l0-61.5c0-13.3 10.7-24 24-24l176 0c30.9 0 56 25.1 56 56l0 120c0 4.4 3.6 8 8 8l32 0c4.4 0 8-3.6 8-8l0-112c0-61.9-50.1-112-112-112l-168 0c-13.3 0-24-10.7-24-24l0-61.5L57 224 160 333.5z" />
    </Icon>
);

export default TurnLeft;