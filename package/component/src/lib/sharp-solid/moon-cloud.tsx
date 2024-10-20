
import { Icon } from "../../index";

/**
 * A component that renders the `moon-cloud` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/moon-cloud?s=sharp-solid moon-cloud}
 * @preview ![moon-cloud](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/moon-cloud.svg)
 */
const MoonCloud: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M543.6 41.2c-82.8 21.2-144 96.5-144 186c0 106 85.8 192 191.5 192c16.8 0 33.1-2.2 48.6-6.2c-40.6 41.4-97.2 67-159.8 67c-47.6 0-91.7-14.8-128-40.1l0-95.9c0-54.6-42-99.3-95.5-103.7C264.6 123.9 361.5 32 480 32c22.1 0 43.5 3.2 63.6 9.2zM64 416L0 416l0-64c0-35.3 28.7-64 64-64c.5 0 1.1 0 1.6 0c7.4-36.5 39.7-64 78.4-64c35 0 64.8 22.5 75.6 53.8c8.7-3.7 18.3-5.8 28.4-5.8c39.8 0 72 32.2 72 72c0 2.7-.1 5.4-.4 8l.4 0 0 64-72 0L64 416z" />
    </Icon>
);

export default MoonCloud;