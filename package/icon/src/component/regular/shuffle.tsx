
import { Icon } from "../../index";

/**
 * A component that renders the `shuffle` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shuffle?s=regular shuffle}
 * @preview ![shuffle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/shuffle.svg)
 */
const Shuffle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M425 31l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39L352 152c-12.6 0-24.4 5.9-32 16l-46 61.3-30-40 37.6-50.1C298.2 117 324.3 104 352 104l78.1 0L391 65c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0zM204 322.7l-37.6 50.1C149.8 395 123.7 408 96 408l-72 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l72 0c12.6 0 24.4-5.9 32-16l46-61.3 30 40zM391 287c9.4-9.4 24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39L352 408c-27.7 0-53.8-13-70.4-35.2L128 168c-7.6-10.1-19.4-16-32-16l-72 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l72 0c27.7 0 53.8 13 70.4 35.2L320 344c7.6 10.1 19.4 16 32 16l78.1 0-39-39c-9.4-9.4-9.4-24.6 0-33.9z" />
    </Icon>
);

export default Shuffle;