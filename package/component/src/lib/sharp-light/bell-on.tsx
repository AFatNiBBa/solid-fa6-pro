
import { Icon } from "../../index";

/**
 * A component that renders the `bell-on` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-on?s=sharp-light bell-on}
 * @preview ![bell-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bell-on.svg)
 */
const BellOn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M304 0l32 0 0 32.8c80.9 8 144 76.2 144 159.2l0 97.4 59.3 59.3 4.7 4.7 0 6.6 0 40 0 16-16 0-416 0-16 0 0-16 0-40 0-6.6 4.7-4.7L160 289.4l0-97.4c0-83 63.1-151.2 144-159.2L304 0zm16 64c-70.7 0-128 57.3-128 128l0 104 0 6.6-4.7 4.7L128 366.6l0 17.4 384 0 0-17.4-59.3-59.3-4.7-4.7 0-6.6 0-104c0-70.7-57.3-128-128-128zM256 448l32 0c0 17.7 14.3 32 32 32s32-14.3 32-32l32 0c0 35.3-28.7 64-64 64s-64-28.7-64-64zM0 160l16 0 80 0 16 0 0 32-16 0-80 0L0 192l0-32zm544 0l80 0 16 0 0 32-16 0-80 0-16 0 0-32 16 0zM605.5 31.2l-14.3 7.2-64 32-14.3 7.2L498.5 48.8l14.3-7.2 64-32 14.3-7.2 14.3 28.6zM48.8 38.3L34.5 31.2 48.8 2.5 63.2 9.7l64 32 14.3 7.2L127.2 77.5l-14.3-7.2-64-32z" />
    </Icon>
);

export default BellOn;