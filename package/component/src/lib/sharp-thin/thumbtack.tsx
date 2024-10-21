
import { Icon } from "../../index";

/**
 * A component that renders the `thumbtack` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thumbtack?s=sharp-thin thumbtack}
 * @preview ![thumbtack](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/thumbtack.svg)
 */
const Thumbtack: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M295.4 201.1l6 4.3c23.6 17.2 40.4 39.7 51.3 60.5C363.9 287.2 368 305 368 312l0 24-168 0 0-104 0-8-16 0 0 8 0 104L16 336l0-24s0 0 0 0c0-9.4 4.3-28 15.3-49c10.9-20.7 27.6-42.4 51.2-58.9l6.2-4.3 .6-7.5L102.8 16l178.4 0 13.7 177.7 .6 7.3zM200 352l168 0 16 0 0-16 0-24c0-21.3-21.3-81.6-73.2-119.5L297.2 16 336 16l8 0 0-16-8 0L296 0 88 0 48 0 40 0l0 16 8 0 38.8 0L73.3 191C21.3 227.5 0 286.4 0 312l0 24 0 16 16 0 168 0 0 152 0 8 16 0 0-8 0-152z" />
    </Icon>
);

export default Thumbtack;