
import { Icon } from "../../index";

/**
 * A component that renders the `angle` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle?s=solid angle}
 * @preview ![angle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/angle.svg)
 */
const Angle: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M252.6 78.3c7.9-15.8 1.5-35-14.3-42.9s-35-1.5-42.9 14.3l-192 384c-5 9.9-4.4 21.7 1.4 31.1S20.9 480 32 480l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L83.8 416 252.6 78.3zm-12.2 96l-21.9 43.8c21.4 17.4 40.4 37.7 56.2 60.4l40.8-25.3c-20.7-30.1-46.1-56.7-75.1-78.9zM321.1 384l49 0c-7-37-19.8-71.9-37.6-103.7l-40.8 25.3c13.3 24.2 23.3 50.5 29.5 78.3z" />
    </Icon>
);

export default Angle;