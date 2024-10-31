
import { Icon } from "../../index";

/**
 * A component that renders the `lollipop` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lollipop?s=sharp-regular lollipop}
 * @preview ![lollipop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/lollipop.svg)
 */
const Lollipop: typeof Icon = x => (
    <Icon {...x}>
        <path d="M198.4 315.1c51.3-19.3 87.7-68.8 87.7-126.9l0-7.5c0-58.2-47.2-105.4-105.4-105.4s-105.4 47.2-105.4 105.4c0 37.4 30.3 67.8 67.8 67.8s67.8-30.3 67.8-67.8l0-15.1-45.2 0 0 15.1c0 12.5-10.1 22.6-22.6 22.6s-22.6-10.1-22.6-22.6c0-33.3 27-60.2 60.2-60.2s60.2 27 60.2 60.2l0 7.5c0 49.9-40.5 90.4-90.4 90.4l-7.5 0c-54.1 0-97.9-43.8-97.9-97.9c0-74.9 60.7-135.5 135.5-135.5s135.5 60.7 135.5 135.5c0 68.9-51.3 125.7-117.8 134.4zM0 180.7c0 99.8 80.9 180.7 180.7 180.7c41.8 0 80.2-14.2 110.8-38L450.9 482.8l31.9-31.9L323.5 291.5c23.8-30.6 38-69.1 38-110.8C361.4 80.9 280.5 0 180.7 0S0 80.9 0 180.7z" />
    </Icon>
);

export default Lollipop;