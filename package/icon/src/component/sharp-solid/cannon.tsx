
import { Icon } from "../../index";

/**
 * A component that renders the `cannon` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cannon?s=sharp-solid cannon}
 * @preview ![cannon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cannon.svg)
 */
const Cannon: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256.4 464.8c-56.1 28-121.7 16.1-164.4-25.1L42.9 464.2 0 378.3l49.1-24.5c-7.3-58.9 22.5-118.5 78.5-146.6C192 176 559 51.3 559 51.3l81 161.9s-51.5 35.2-117.2 79.5C497.4 251.5 451.9 224 400 224c-79.5 0-144 64.5-144 144c0 30.6 9.5 58.9 25.8 82.3c-10.5 6.4-19.2 11.3-25.4 14.5zM288 368a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm144 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default Cannon;