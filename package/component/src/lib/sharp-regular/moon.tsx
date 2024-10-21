
import { Icon } from "../../index";

/**
 * A component that renders the `moon` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/moon?s=sharp-regular moon}
 * @preview ![moon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/moon.svg)
 */
const Moon: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M287.6 41.2c-20.2-6-41.5-9.2-63.6-9.2c-10.6 0-21 .7-31.1 2.1C83.9 49.3 0 142.9 0 256C0 379.7 100.3 480 224 480c28.3 0 55.3-5.2 80.2-14.8c10.7-4.1 21.1-9 31-14.7c17.9-10.3 34.3-22.9 48.6-37.6c-15.5 4.1-31.8 6.2-48.6 6.2c-12.6 0-25-1.2-36.9-3.6c-88.1-17.3-154.6-95.1-154.6-188.4c0-58.9 26.4-111.6 68.1-146.8c4-3.4 8.1-6.6 12.3-9.6c18.9-13.6 40.4-23.7 63.6-29.7zM126.4 109.5c-19.6 34.8-30.7 74.9-30.7 117.7c0 86.2 45.4 161.9 113.6 204.2C118.9 423.9 48 348.2 48 256c0-61.1 31.1-114.9 78.4-146.5z" />
    </Icon>
);

export default Moon;