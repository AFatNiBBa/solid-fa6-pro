
import { Icon } from "../../index";

/**
 * A component that renders the `turn-left` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-left?s=solid turn-left}
 * @preview ![turn-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/turn-left.svg)
 */
const TurnLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M177.5 66c-8.8-3.8-19-2-26 4.6l-144 136C2.7 211.1 0 217.4 0 224s2.7 12.9 7.5 17.4l144 136c7 6.6 17.2 8.4 26 4.6s14.5-12.5 14.5-22l0-88 192 0c17.7 0 32 14.3 32 32l0 144c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-144c0-70.7-57.3-128-128-128l-192 0 0-88c0-9.6-5.7-18.2-14.5-22z" />
    </Icon>
);

export default TurnLeft;