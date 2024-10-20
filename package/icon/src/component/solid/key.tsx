
import { Icon } from "../../index";

/**
 * A component that renders the `key` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/key?s=solid key}
 * @preview ![key](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/key.svg)
 */
const Key: typeof Icon = x => (
    <Icon {...x}>
        <path d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z" />
    </Icon>
);

export default Key;