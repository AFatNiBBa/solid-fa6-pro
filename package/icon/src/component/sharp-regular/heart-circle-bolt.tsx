
import { Icon } from "../../index";

/**
 * A component that renders the `heart-circle-bolt` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-circle-bolt?s=sharp-regular heart-circle-bolt}
 * @preview ![heart-circle-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/heart-circle-bolt.svg)
 */
const HeartCircleBolt: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M256 163.9L222.1 130l-24.2-24.2C181.4 89.3 159 80 135.8 80C87.3 80 48 119.3 48 167.8c0 23.3 9.2 45.6 25.7 62.1l24.2 24.2L256 412.1l4.5-4.5c4 17.3 10.5 33.7 19.2 48.6L256 480l-33.9-33.9L64 288 39.8 263.8C14.3 238.3 0 203.8 0 167.8C0 92.8 60.8 32 135.8 32c36 0 70.5 14.3 96 39.8L256 96l24.2-24.2c0 0 0 0 0 0c25.5-25.4 60-39.7 96-39.7C451.2 32 512 92.8 512 167.8c0 13.8-2.1 27.4-6.2 40.4c-14.4-6.6-29.8-11.4-45.9-14c2.7-8.5 4.1-17.4 4.1-26.4c0-48.5-39.3-87.8-87.8-87.8c-23.3 0-45.6 9.2-62.1 25.7L289.9 130 256 163.9zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm24 64L352 384l66.7 0L408 448l104-96-66.7 0L456 288z" />
    </Icon>
);

export default HeartCircleBolt;