
import { Icon } from "../../index";

/**
 * A component that renders the `feather` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/feather?s=thin feather}
 * @preview ![feather](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/feather.svg)
 */
const Feather: typeof Icon = x => (
    <Icon {...x}>
        <path d="M339.2 161.4c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L299.3 224l181 0c10.2-19.6 15.7-41.5 15.7-64c0-36.7-14.6-72-40.6-97.9l-5.5-5.5C424 30.6 388.7 16 352 16s-72 14.6-97.9 40.6L150.3 160.3C105.3 205.3 80 266.4 80 330l0 90.6L339.2 161.4zM283.3 240l-80 80 190.1 0 62.1-62.1c5.6-5.6 10.6-11.6 15.1-17.9l-187.2 0zM400 336l-37 37c-48 48-113.1 75-181 75L75.3 448 13.7 509.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L64 436.7 64 330c0-67.9 27-133 75-181L242.7 45.3C271.7 16.3 311 0 352 0s80.3 16.3 109.3 45.3l5.5 5.5C495.7 79.7 512 119 512 160s-16.3 80.3-45.3 109.3L400 336zm-22.6 0l-190.1 0-96 96 90.6 0c63.7 0 124.7-25.3 169.7-70.3L377.4 336z" />
    </Icon>
);

export default Feather;