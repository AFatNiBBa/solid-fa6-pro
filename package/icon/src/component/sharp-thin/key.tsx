
import { Icon } from "../../index";

/**
 * A component that renders the `key` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/key?s=sharp-thin key}
 * @preview ![key](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/key.svg)
 */
const Key: typeof Icon = x => (
    <Icon {...x}>
        <path d="M287.2 328.4l-9.3-3-6.9 6.9-33.3 33.3-2.3 2.3-3.3 0-40 0-16 0 0 16 0 40 0 8-8 0-40 0-16 0 0 16 0 40 0 8-8 0-80 0-8 0 0-8 0-80 0-3.3 2.3-2.3L179.7 241l6.9-6.9-3-9.3c-4.9-15.4-7.6-31.8-7.6-48.8c0-88.4 71.6-160 160-160s160 71.6 160 160s-71.6 160-160 160c-17.1 0-33.5-2.7-48.8-7.6zM232 384l9.9 0 7-7 33.3-33.3c16.9 5.4 35 8.3 53.7 8.3c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391l-7 7L0 408l0 80 0 8 0 16 16 0 8 0 80 0 8 0 16 0 0-16 0-8 0-24 0-16 16 0 24 0 8 0 16 0 0-16 0-8 0-24 0-16 16 0 24 0zM368 184a40 40 0 1 0 0-80 40 40 0 1 0 0 80zm-24-40a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default Key;