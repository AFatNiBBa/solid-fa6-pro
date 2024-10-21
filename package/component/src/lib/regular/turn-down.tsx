
import { Icon } from "../../index";

/**
 * A component that renders the `turn-down` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-down?s=regular turn-down}
 * @preview ![turn-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/turn-down.svg)
 */
const TurnDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M175.6 505.5c9.2 8.7 23.7 8.7 32.9 0l129-121.4c9.3-8.8 14.6-21 14.6-33.7c0-25.6-20.7-46.3-46.3-46.3L264 304l0-144C264 71.6 192.4 0 104 0L56 0C25.1 0 0 25.1 0 56L0 88c0 30.9 25.1 56 56 56l56 0c4.4 0 8 3.6 8 8l0 152-41.7 0C52.7 304 32 324.7 32 350.3c0 12.8 5.3 25 14.6 33.7l129 121.4zM82.5 352l61.5 0c13.3 0 24-10.7 24-24l0-176c0-30.9-25.1-56-56-56L56 96c-4.4 0-8-3.6-8-8l0-32c0-4.4 3.6-8 8-8l48 0c61.9 0 112 50.1 112 112l0 168c0 13.3 10.7 24 24 24l61.5 0L192 455 82.5 352z" />
    </Icon>
);

export default TurnDown;