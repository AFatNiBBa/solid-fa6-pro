
import { Icon } from "../../index";

/**
 * A component that renders the `rotate-left` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rotate-left?s=regular rotate-left}
 * @preview ![rotate-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/rotate-left.svg)
 */
const RotateLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M140.8 122.9C171.7 96.2 212 80 256 80c97.2 0 176 78.8 176 176s-78.8 176-176 176c-39.7 0-76.2-13.1-105.6-35.2c-10.6-8-25.6-5.8-33.6 4.8s-5.8 25.6 4.8 33.6C159 463.3 205.6 480 256 480c123.7 0 224-100.3 224-224S379.7 32 256 32c-57.3 0-109.6 21.5-149.2 56.9L76.3 58.3C69.7 51.7 60.7 48 51.3 48C31.8 48 16 63.8 16 83.3L16 200c0 13.3 10.7 24 24 24l116.7 0c19.5 0 35.3-15.8 35.3-35.3c0-9.4-3.7-18.3-10.3-25l-40.8-40.8zm-76.8-9L126.1 176 64 176l0-62.1z" />
    </Icon>
);

export default RotateLeft;