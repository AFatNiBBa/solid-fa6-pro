
import { Icon } from "../../index";

/**
 * A component that renders the `pencil-slash` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pencil-slash?s=sharp-regular pencil-slash}
 * @preview ![pencil-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/pencil-slash.svg)
 */
const PencilSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 512l51-10.2L224 480l19.2-19.2 .8 .5 2.6-3.8 93.5-93.5-38-29.9-42.2 42.2-48.1-12-12-48.1L234.8 281l-38-29.9-78.3 78.3-3.8 2.6 .5 .8L96 352 74.2 461 64 512zM409.1 294.9L542.1 161.9 576 128 542.1 94.1 481.9 33.9 448 0 414.1 33.9 265 183 48.4 14.8 29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7L409.1 294.9zm-38.2-29.7l-67.7-52.5 82.7-82.7 60.1 60.1-75.1 75.1zM140.2 375.7l8.9-8.9 11.9-7.9 7.7 31 3.5 14 14 3.5 31 7.7-7.9 11.9-8.9 8.9-75.1 15 15-75.1z" />
    </Icon>
);

export default PencilSlash;