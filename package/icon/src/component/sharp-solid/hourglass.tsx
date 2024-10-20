
import { Icon } from "../../index";

/**
 * A component that renders the `hourglass` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass?s=sharp-solid hourglass}
 * @preview ![hourglass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hourglass.svg)
 */
const Hourglass: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 0L0 0 0 64l32 0 0 64 0 13.3 9.4 9.4L146.7 256 41.4 361.4 32 370.7 32 384l0 64L0 448l0 64 32 0 320 0 32 0 0-64-32 0 0-64 0-13.3-9.4-9.4L237.3 256 342.6 150.6l9.4-9.4 0-13.3 0-64 32 0 0-64L352 0 32 0zM288 64l0 50.7-96 96-96-96L96 64l192 0zM192 301.3l96 96 0 50.7L96 448l0-50.7 96-96z" />
    </Icon>
);

export default Hourglass;