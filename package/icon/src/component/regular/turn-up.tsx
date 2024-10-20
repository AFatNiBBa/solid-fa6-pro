
import { Icon } from "../../index";

/**
 * A component that renders the `turn-up` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-up?s=regular turn-up}
 * @preview ![turn-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/turn-up.svg)
 */
const TurnUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M175.6 6.5c9.2-8.7 23.7-8.7 32.9 0l129 121.4c9.3 8.8 14.6 21 14.6 33.7c0 25.6-20.7 46.3-46.3 46.3L264 208l0 144c0 88.4-71.6 160-160 160l-48 0c-30.9 0-56-25.1-56-56l0-32c0-30.9 25.1-56 56-56l56 0c4.4 0 8-3.6 8-8l0-152-41.7 0C52.7 208 32 187.3 32 161.7c0-12.8 5.3-25 14.6-33.7L175.6 6.5zM82.5 160l61.5 0c13.3 0 24 10.7 24 24l0 176c0 30.9-25.1 56-56 56l-56 0c-4.4 0-8 3.6-8 8l0 32c0 4.4 3.6 8 8 8l48 0c61.9 0 112-50.1 112-112l0-168c0-13.3 10.7-24 24-24l61.5 0L192 57 82.5 160z" />
    </Icon>
);

export default TurnUp;