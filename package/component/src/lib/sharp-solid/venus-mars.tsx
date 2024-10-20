
import { Icon } from "../../index";

/**
 * A component that renders the `venus-mars` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/venus-mars?s=sharp-solid venus-mars}
 * @preview ![venus-mars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/venus-mars.svg)
 */
const VenusMars: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M176 288a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM352 176c0 86.3-62.1 158.1-144 173.1l0 34.9 32 0 32 0 0 64-32 0-32 0 0 32 0 32-64 0 0-32 0-32-32 0-32 0 0-64 32 0 32 0 0-34.9C62.1 334.1 0 262.3 0 176C0 78.8 78.8 0 176 0s176 78.8 176 176zM271.9 360.6c19.3-10.1 36.9-23.1 52.1-38.4c20 18.5 46.7 29.8 76.1 29.8c61.9 0 112-50.1 112-112s-50.1-112-112-112c-7.2 0-14.3 .7-21.1 2c-4.9-21.5-13-41.7-24-60.2C369.3 66 384.4 64 400 64c37 0 71.4 11.4 99.8 31l21.6-21.6L480 32 512 0 640 0l0 128-32 32-41.4-41.4L545 140.2c19.5 28.4 31 62.7 31 99.8c0 97.2-78.8 176-176 176c-50.5 0-96-21.3-128.1-55.4z" />
    </Icon>
);

export default VenusMars;