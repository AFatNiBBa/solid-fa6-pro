
import { Icon } from "../../index";

/**
 * A component that renders the `feather` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/feather?s=sharp-thin feather}
 * @preview ![feather](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/feather.svg)
 */
const Feather: typeof Icon = x => (
    <Icon {...x}>
        <path d="M339.2 161.4l5.7-5.7 11.3 11.3-5.7 5.7L299.3 224l181 0c10.2-19.6 15.7-41.5 15.7-64c0-36.7-14.6-72-40.6-97.9l-5.5-5.5C424 30.6 388.7 16 352 16s-72 14.6-97.9 40.6L80 230.6l0 190.1L339.2 161.4zM283.3 240l-80 80 190.1 0 62.1-62.1c5.6-5.6 10.6-11.6 15.1-17.9l-187.2 0zM400 336L288 448 75.3 448 17.2 506.1l-5.7 5.7L.2 500.5l5.7-5.7L64 436.7 64 224 242.7 45.3C271.7 16.3 311 0 352 0s80.3 16.3 109.3 45.3l5.5 5.5C495.7 79.7 512 119 512 160s-16.3 80.3-45.3 109.3L400 336zm-22.6 0l-190.1 0-96 96 190.1 0 96-96z" />
    </Icon>
);

export default Feather;