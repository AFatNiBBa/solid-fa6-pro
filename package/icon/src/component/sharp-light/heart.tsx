
import { Icon } from "../../index";

/**
 * A component that renders the `heart` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart?s=sharp-light heart}
 * @preview ![heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/heart.svg)
 */
const Heart: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 141.3l-22.6-22.6L209.1 94.4C189.7 74.9 163.3 64 135.8 64C78.5 64 32 110.5 32 167.8c0 27.5 10.9 53.9 30.4 73.4l24.2 24.2L256 434.8 425.4 265.4l24.2-24.2c19.5-19.5 30.4-45.9 30.4-73.4C480 110.5 433.5 64 376.2 64c-27.5 0-53.9 10.9-73.4 30.4l-24.2 24.2L256 141.3zm22.6 316.1L256 480l-22.6-22.6L64 288 39.8 263.8C14.3 238.3 0 203.8 0 167.8C0 92.8 60.8 32 135.8 32c36 0 70.5 14.3 96 39.8l1.6 1.6L256 96l22.6-22.6 1.6-1.6c25.5-25.5 60-39.8 96-39.8C451.2 32 512 92.8 512 167.8c0 36-14.3 70.5-39.8 96L448 288 278.6 457.4z" />
    </Icon>
);

export default Heart;