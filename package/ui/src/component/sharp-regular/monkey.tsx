
import { Icon } from "../../index";

/**
 * A component that renders the `monkey` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/monkey?s=sharp-regular monkey}
 * @preview ![monkey](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/monkey.svg)
 */
const Monkey: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M160 416c0-86.2 48.7-161 120-198.4l0 38.4 0 18c-43.7 32-72 83.7-72 142l0 48 192 0 0-24c0-39.8-32.2-72-72-72l-16 0-24 0 0-48 24 0 16 0c27 0 51.9 8.9 72 24l0-24 0-32 49.9 0L569 407l7 7 0 9.9 0 64 0 24-48 0 0-24 0-54.1-80-80 0 86.1 0 24 8 0 24 0 0 48-24 0-8 0-48 0-192 0-48 0-8 0C68.1 512 0 443.9 0 360L0 24 0 0 24 0 200 0l24 0 0 24 0 144 0 24-24 0-80 0-24 0 0-48 24 0 56 0 0-96L48 48l0 312c0 57.4 46.6 104 104 104l8 0 0-48zM448 256l-32 0-16 0-88 0 0-.6 0-31.4 0-20.2 0-12.3c-31.6-3.9-56-30.9-56-63.5c0-35.3 28.6-64 64-64c15.7-37.6 52.8-64 96-64s80.4 26.4 96 64c35.3 0 64 28.7 64 64c0 32.6-24.4 59.6-56 63.5l0 64.5-72 0zM384 64c-26.5 0-48 21.5-48 48c0 23.8 17.3 43.5 40 47.3l0 48.7 80 0 0-48.7c22.7-3.8 40-23.6 40-47.3c0-26.5-21.5-48-48-48l-64 0zm0 32a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm48 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default Monkey;