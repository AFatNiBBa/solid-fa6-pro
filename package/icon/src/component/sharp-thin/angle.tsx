
import { Icon } from "../../index";

/**
 * A component that renders the `angle` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle?s=sharp-thin angle}
 * @preview ![angle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/angle.svg)
 */
const Angle: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M216.8 36.5L5.6 468.5 0 480l12.8 0L440 480l8 0 0-16-8 0L25.6 464 231.2 43.5l-14.4-7zm1 141.2l-7.2 14.5c29 20.3 54.3 45.3 75 74l13.5-8.6c-22.2-31.1-49.7-58.1-81.2-79.8zM342.4 416l16.1 0c-4.1-42-16.1-81.7-34.5-117.5l-13.5 8.7c16.9 33.3 28 70 31.9 108.9z" />
    </Icon>
);

export default Angle;