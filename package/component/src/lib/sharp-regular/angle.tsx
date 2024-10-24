
import { Icon } from "../../index";

/**
 * A component that renders the `angle` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle?s=sharp-regular angle}
 * @preview ![angle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/angle.svg)
 */
const Angle: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 480l0-29.9 2.7-5.2 208-400 11.1-21.3 42.6 22.1L253.3 67.1 63.5 432 424 432l24 0 0 48-24 0L24 480 0 480zM311.5 247.4l-40.8 25.6c-14.8-20.1-32-38.3-51.3-54.1L242 175.5c26.5 20.4 49.9 44.7 69.5 71.9zm-15.6 66.4l40.8-25.6c16.8 32 28.7 66.9 34.7 103.8l-48.8 0c-5.3-27.6-14.4-53.9-26.8-78.2z" />
    </Icon>
);

export default Angle;