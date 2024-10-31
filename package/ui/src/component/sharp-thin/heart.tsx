
import { Icon } from "../../index";

/**
 * A component that renders the `heart` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart?s=sharp-thin heart}
 * @preview ![heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/heart.svg)
 */
const Heart: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 118.6l-11.3-11.3L220.5 83.1C198 60.6 167.5 48 135.8 48C69.6 48 16 101.6 16 167.8c0 31.8 12.6 62.2 35.1 84.7l24.2 24.2L256 457.4 436.7 276.7l24.2-24.2C483.4 230 496 199.5 496 167.8C496 101.6 442.4 48 376.2 48c-31.8 0-62.2 12.6-84.7 35.1l-24.2 24.2L256 118.6zm11.3 350.1L256 480l-11.3-11.3L64 288 39.8 263.8C14.3 238.3 0 203.8 0 167.8C0 92.8 60.8 32 135.8 32c36 0 70.5 14.3 96 39.8l12.9 12.9L256 96l11.3-11.3 12.9-12.9c25.5-25.5 60-39.8 96-39.8C451.2 32 512 92.8 512 167.8c0 36-14.3 70.5-39.8 96L448 288 267.3 468.7z" />
    </Icon>
);

export default Heart;