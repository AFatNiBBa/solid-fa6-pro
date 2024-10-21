
import { Icon } from "../../index";

/**
 * A component that renders the `bell-slash` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-slash?s=sharp-light bell-slash}
 * @preview ![bell-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bell-slash.svg)
 */
const BellSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M419.4 416l-40.5-32L128 384l0-17.4 59.3-59.3 4.7-4.7 0-6.6 0-59.5-32-25.3 0 78.1-59.3 59.3L96 353.4l0 6.6 0 40 0 16 16 0 307.4 0zM203.4 82.4l25.2 19.9C251.9 78.7 284.2 64 320 64c70.7 0 128 57.3 128 128l0 83.5 32 25.3 0-11.4 0-97.4c0-83-63.1-151.2-144-159.2L336 0 304 0l0 32.8C264.5 36.7 229.2 55 203.4 82.4zM320 512c35.3 0 64-28.7 64-64l-32 0c0 17.7-14.3 32-32 32s-32-14.3-32-32l-32 0c0 35.3 28.7 64 64 64zM40.4 18L27.8 8.1 8.1 33.4l12.6 9.8L599.8 494.3l12.6 9.8 19.7-25.2L619.5 469 40.4 18z" />
    </Icon>
);

export default BellSlash;