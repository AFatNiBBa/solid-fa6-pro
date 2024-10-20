
import { Icon } from "../../index";

/**
 * A component that renders the `share-all` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/share-all?s=sharp-regular share-all}
 * @preview ![share-all](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/share-all.svg)
 */
const ShareAll: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M469.6 184.4L352 76.6 352 32l32 0L576 208 384 384l-32 0 0-44.6L469.6 231.6 495.4 208l-25.7-23.6zM128 480s-41.8-15.7-77.7-53C23.5 399 0 358.8 0 304c0-97.2 78.8-176 176-176l48 0 0-48 0-12.2 0-.9L224 32l32 0 16 14.7L412.5 175.4 448 208l-35.5 32.6L272 369.3 256 384l-32 0 0-34.9 0-.9 0-12.2 0-48-16 0c-11.1 0-21.9 1.6-32 4.6C129.7 306.4 96 349.3 96 400c0 1.4 0 2.9 .1 4.3C97.9 449.9 128 480 128 480zM48 304c0 17 3.1 32 8.2 45.4C77.4 285.8 137.3 240 208 240l16 0 48 0 0 48 0 16.2L377 208 272 111.8l0 16.2 0 48-48 0-48 0c-70.7 0-128 57.3-128 128z" />
    </Icon>
);

export default ShareAll;