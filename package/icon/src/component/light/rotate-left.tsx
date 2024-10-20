
import { Icon } from "../../index";

/**
 * A component that renders the `rotate-left` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rotate-left?s=light rotate-left}
 * @preview ![rotate-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/rotate-left.svg)
 */
const RotateLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M94.7 360.2c-3.2-5-8.7-8.2-14.7-8.2c-12.3 0-20.3 12.8-13.7 23.2C106 438.2 176.1 480 256 480c123.7 0 224-100.3 224-224S379.7 32 256 32c-56.1 0-107.4 20.6-146.7 54.7L78.6 56c-5.1-5.1-12.1-8-19.3-8C44.2 48 32 60.2 32 75.3L32 176c0 8.8 7.2 16 16 16l100.7 0c15.1 0 27.3-12.2 27.3-27.3c0-7.2-2.9-14.2-8-19.3l-36-36C165.5 81.1 208.7 64 256 64c106 0 192 86 192 192s-86 192-192 192c-67.6 0-127.1-35-161.3-87.8zM64 86.6L137.4 160 64 160l0-73.4z" />
    </Icon>
);

export default RotateLeft;