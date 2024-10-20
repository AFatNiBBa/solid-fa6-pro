
import { Icon } from "../../index";

/**
 * A component that renders the `rotate-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rotate-left?s=sharp-thin rotate-left}
 * @preview ![rotate-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/rotate-left.svg)
 */
const RotateLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M419.9 384.1c-70.7 90.5-201.4 106.6-292 35.8C105 402 86.9 380.2 73.7 356.3l-14 7.7c14.2 25.8 33.7 49.3 58.4 68.6c97.5 76.2 238.3 58.9 314.4-38.6s58.9-238.3-38.6-314.4C304.1 9.3 177.5 18.5 98.6 96.6l11.3 11.3c73.3-72.5 190.8-81 274.2-15.8c90.5 70.7 106.6 201.4 35.8 292zM37 35L25.7 46.3 8 64 8 192l0 16 16 0 128 0 17.7-17.7L181 179l-11.3-11.3L48.3 46.3 37 35zm0 22.6L158.3 179l-13 13L24 192 24 70.6l13-13z" />
    </Icon>
);

export default RotateLeft;