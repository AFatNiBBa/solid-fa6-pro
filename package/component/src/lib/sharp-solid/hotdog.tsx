
import { Icon } from "../../index";

/**
 * A component that renders the `hotdog` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hotdog?s=sharp-solid hotdog}
 * @preview ![hotdog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hotdog.svg)
 */
const Hotdog: typeof Icon = x => (
    <Icon {...x}>
        <path d="M207.2 463.2l256-256L512 256 256 512l-48.8-48.8zM0 256L256 0l48.8 48.8-256 256L0 256zM488.6 23.4c31.2 31.2 31.2 81.9 0 113.1l-352 352c-31.2 31.2-81.9 31.2-113.1 0s-31.2-81.9 0-113.1l352-352c31.2-31.2 81.9-31.2 113.1 0zm-35.4 88.5L439.9 82.8l-14.6 6.6-88 40-5.5 2.5-2.5 5.5-37.5 82.5-82.5 37.5-5.5 2.5-2.5 5.5-37.5 82.5L81.4 385.4l-14.6 6.6 13.2 29.1 14.6-6.6 88-40 5.5-2.5 2.5-5.5 37.5-82.5 82.5-37.5 5.5-2.5 2.5-5.5 37.5-82.5 82.5-37.5 14.6-6.6z" />
    </Icon>
);

export default Hotdog;