
import { Icon } from "../../index";

/**
 * A component that renders the `venus-mars` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/venus-mars?s=thin venus-mars}
 * @preview ![venus-mars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/venus-mars.svg)
 */
const VenusMars: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M176 336a160 160 0 1 0 0-320 160 160 0 1 0 0 320zM352 176c0 94.5-74.5 171.6-168 175.8l0 64.2 80 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-80 0 0 72c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-72-80 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l80 0 0-64.2C74.5 347.6 0 270.5 0 176C0 78.8 78.8 0 176 0s176 78.8 176 176zM286.2 352.5c29 29.4 69.3 47.5 113.8 47.5c88.4 0 160-71.6 160-160s-71.6-160-160-160c-12.8 0-25.3 1.5-37.2 4.4c-2.4-5-5.1-9.8-7.9-14.5C369.3 66 384.4 64 400 64c45.7 0 87.4 17.4 118.7 46l94-94L488 16c-4.4 0-8-3.6-8-8s3.6-8 8-8L632 0c4.4 0 8 3.6 8 8l0 144c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-124.7-94 94c28.6 31.3 46 72.9 46 118.7c0 97.2-78.8 176-176 176c-50.5 0-96-21.3-128.1-55.4c4.9-2.5 9.7-5.3 14.3-8.2z" />
    </Icon>
);

export default VenusMars;