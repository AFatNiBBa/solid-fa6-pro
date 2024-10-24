
import { Icon } from "../../index";

/**
 * A component that renders the `rotate-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rotate-right?s=sharp-thin rotate-right}
 * @preview ![rotate-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/rotate-right.svg)
 */
const RotateRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M92.1 384.1c70.7 90.5 201.4 106.6 292 35.8c22.9-17.9 41.1-39.7 54.2-63.7l14 7.7c-14.2 25.8-33.7 49.3-58.4 68.6c-97.5 76.2-238.3 58.9-314.4-38.6S20.6 155.7 118.1 79.5c89.8-70.2 216.4-61 295.3 17.1l-11.3 11.3c-73.3-72.5-190.8-81-274.2-15.8c-90.5 70.7-106.6 201.4-35.8 292zM475 35l11.3 11.3L504 64l0 128 0 16-16 0-128 0-17.7-17.7L331 179l11.3-11.3L463.7 46.3 475 35zm0 22.6L353.7 179l13 13L488 192l0-121.4-13-13z" />
    </Icon>
);

export default RotateRight;