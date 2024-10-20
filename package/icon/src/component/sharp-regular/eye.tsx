
import { Icon } from "../../index";

/**
 * A component that renders the `eye` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eye?s=sharp-regular eye}
 * @preview ![eye](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/eye.svg)
 */
const Eye: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M129.1 361.4C93.6 327.2 67.7 286.9 52.5 256c15.1-30.9 41-71.2 76.6-105.4C171.8 109.5 224.9 80 288 80s116.2 29.5 158.9 70.6c35.6 34.3 61.5 74.5 76.6 105.4c-15.1 30.9-41 71.2-76.6 105.4C404.2 402.5 351.1 432 288 432s-116.2-29.5-158.9-70.6zM288 480c158.4 0 258-149.3 288-224C546 181.3 446.4 32 288 32S30 181.3 0 256c30 74.7 129.6 224 288 224zm0-144c-44.2 0-80-35.8-80-80c0-5.4 .5-10.6 1.5-15.7L288 256l-15.7-78.5c5.1-1 10.3-1.5 15.7-1.5c44.2 0 80 35.8 80 80s-35.8 80-80 80zM160 256c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-8.6 0-17 .8-25.1 2.5c-50.3 10-90 49.5-100.3 99.7l-.1 .7c-1.6 8.1-2.5 16.5-2.5 25.1z" />
    </Icon>
);

export default Eye;