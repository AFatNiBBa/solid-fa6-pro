
import { Icon } from "../../index";

/**
 * A component that renders the `key` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/key?s=sharp-regular key}
 * @preview ![key](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/key.svg)
 */
const Key: typeof Icon = x => (
    <Icon {...x}>
        <path d="M315.7 302.4l-24.2-3.8-17.3 17.3L254.1 336 224 336l-48 0 0 48 0 16-16 0-48 0 0 48 0 16-64 0 0-78.1L196.1 237.8l17.3-17.3-3.8-24.2c-1-6.6-1.6-13.4-1.6-20.3c0-70.7 57.3-128 128-128s128 57.3 128 128s-57.3 128-128 128c-6.9 0-13.7-.5-20.3-1.6zM272 384l1.9 0 7-7 27.2-27.2c9.1 1.4 18.4 2.2 27.9 2.2c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 9.5 .7 18.8 2.2 27.9L7 359l-7 7L0 376l0 88 0 24 0 24 24 0 24 0 64 0 24 0 24 0 0-16 0-8 0-24 0-16 16 0 24 0 8 0 16 0 0-16 0-8 0-24 0-16 40 0 8 0zm96-208a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Key;