
import { Icon } from "../../index";

/**
 * A component that renders the `hand` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand?s=sharp-thin hand}
 * @preview ![hand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/hand.svg)
 */
const Hand: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 0l-8 0 0 8 0 24-72 0-8 0 0 8 0 276.1-31.7-31.7L76.1 256.2l-5.7-5.7-5.7 5.7L8.2 312.7l-5.7 5.7 5.7 5.7 28.3 28.3 89.4 89.4c45 45 106.1 70.3 169.7 70.3l8.5 0c92.8 0 168-75.2 168-168l0-240 0-8-8 0-72 0 0-56 0-8-8 0-72 0 0-24 0-8-8 0L224 0zm88 48l64 0 0 48 0 8 0 144 0 8 16 0 0-8 0-136 64 0 0 232c0 83.9-68.1 152-152 152l-8.5 0c-59.4 0-116.4-23.6-158.4-65.6L47.8 341 25.1 318.4l45.3-45.3L93 295.8l45.3 45.3 13.7-5.7L152 48l64 0 0 200 0 8 16 0 0-8 0-200 0-8 0-8 0-16 64 0 0 16 0 8 0 208 0 8 16 0 0-8 0-64 0-136z" />
    </Icon>
);

export default Hand;