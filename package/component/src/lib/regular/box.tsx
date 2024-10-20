
import { Icon } from "../../index";

/**
 * A component that renders the `box` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box?s=regular box}
 * @preview ![box](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/box.svg)
 */
const Box: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M342.4 80L248 80l0 80 140.4 0L357 89.5c-2.6-5.8-8.3-9.5-14.6-9.5zM400 208L48 208l0 208c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-208zM59.6 160L200 160l0-80-94.4 0c-6.3 0-12.1 3.7-14.6 9.5L59.6 160zM342.4 32c25.3 0 48.2 14.9 58.5 38l41.6 93.6c3.6 8.2 5.5 17 5.5 26L448 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 189.6c0-9 1.9-17.8 5.5-26L47.1 70c10.3-23.1 33.2-38 58.5-38l236.8 0z" />
    </Icon>
);

export default Box;