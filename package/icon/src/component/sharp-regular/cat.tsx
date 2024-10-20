
import { Icon } from "../../index";

/**
 * A component that renders the `cat` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cat?s=sharp-regular cat}
 * @preview ![cat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/cat.svg)
 */
const Cat: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M344 0l24 0 9.9 0 7 7 41 41 44.1 0L511 7l7-7L528 0l24 0 24 0 0 24 0 136c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-136 0-24 24 0zm24 160c0 44.2 35.8 80 80 80s80-35.8 80-80l0-102.1L497 89l-7 7L480 96l-64 0-9.9 0-7-7-31-31L368 160zm48-32a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm48 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM285 182l4.4-.4c2.2 16.6 7 32.4 13.9 46.9l-14 1.3C188.9 238.9 112 323.1 112 423.9l0 40.1 144 0 0-64c0-17.7-14.3-32-32-32l-32 0 0-48 32 0c39.2 0 71.8 28.2 78.7 65.4l96.2-39.6L432 332.2l0 35.8 0 96 32 0 0-144.8c16.9-1.7 33.1-6 48-12.5L512 488l0 24-24 0-80 0-24 0 0-24 0-84.2-80 32.9 0 27.2 24 0 24 0 0 48-24 0L88 512l-24 0 0-24 0-64c0 0 0-.1 0-.1L64 184c0-22.1-17.9-40-40-40L0 144 0 96l24 0c48.6 0 88 39.4 88 88l0 95c40-53.7 101.7-90.5 173-97z" />
    </Icon>
);

export default Cat;