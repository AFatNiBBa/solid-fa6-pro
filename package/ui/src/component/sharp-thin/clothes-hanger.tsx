
import { Icon } from "../../index";

/**
 * A component that renders the `clothes-hanger` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clothes-hanger?s=sharp-thin clothes-hanger}
 * @preview ![clothes-hanger](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/clothes-hanger.svg)
 */
const ClothesHanger: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224.8 87.1C229.3 37.7 271.4 0 320.9 0c52 0 95.1 42.1 95.1 94.3c0 38.8-18.6 75.3-49.9 98.1L334 215.7 636.4 417.3l3.6 2.4 0 4.3 0 80 0 8-8 0L8 512l-8 0 0-8 0-80 0-4.3 3.6-2.4L315.4 209.4l41.2-30C383.9 159.6 400 128 400 94.3C400 51.2 364.3 16 320.9 16c-41.4 0-76.5 31.6-80.2 72.6l-.7 8.1-.7 8-15.9-1.4 .7-8 .7-8.1zM320 225.6L16 428.3 16 496l608 0 0-67.7L320 225.6z" />
    </Icon>
);

export default ClothesHanger;