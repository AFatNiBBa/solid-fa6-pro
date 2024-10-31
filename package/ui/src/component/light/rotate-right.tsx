
import { Icon } from "../../index";

/**
 * A component that renders the `rotate-right` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rotate-right?s=light rotate-right}
 * @preview ![rotate-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/rotate-right.svg)
 */
const RotateRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M417.3 360.2c3.2-5 8.7-8.2 14.7-8.2c12.3 0 20.3 12.8 13.7 23.2C406 438.2 335.9 480 256 480C132.3 480 32 379.7 32 256S132.3 32 256 32c56.1 0 107.4 20.6 146.7 54.7L433.4 56c5.1-5.1 12.1-8 19.3-8C467.8 48 480 60.2 480 75.3L480 176c0 8.8-7.2 16-16 16l-100.7 0c-15.1 0-27.3-12.2-27.3-27.3c0-7.2 2.9-14.2 8-19.3l36-36C346.5 81.1 303.3 64 256 64C150 64 64 150 64 256s86 192 192 192c67.6 0 127.1-35 161.3-87.8zM448 86.6L374.6 160l73.4 0 0-73.4z" />
    </Icon>
);

export default RotateRight;