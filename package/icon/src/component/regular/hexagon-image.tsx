
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-image` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-image?s=regular hexagon-image}
 * @preview ![hexagon-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/hexagon-image.svg)
 */
const HexagonImage: typeof Icon = x => (
    <Icon {...x}>
        <path d="M17.1 220c-12.9 22.3-12.9 49.7 0 72l88.3 152.9c12.9 22.3 36.6 36 62.4 36l176.6 0c25.7 0 49.5-13.7 62.4-36L494.9 292c12.9-22.3 12.9-49.7 0-72L406.6 67.1c-12.9-22.3-36.6-36-62.4-36l-176.6 0c-25.7 0-49.5 13.7-62.4 36L17.1 220zm41.6 48c-4.3-7.4-4.3-16.6 0-24L146.9 91.1c4.3-7.4 12.2-12 20.8-12l176.6 0c8.6 0 16.5 4.6 20.8 12L453.4 244c4.3 7.4 4.3 16.6 0 24l-34.5 59.8-78.1-94c-4.6-5.5-11.3-8.7-18.5-8.7s-13.9 3.2-18.5 8.7L232.2 320l-38.9-40.6c-4.6-4.8-11-7.5-17.6-7.4s-13 2.9-17.4 7.8l-56.9 62.3L58.6 268zM232 160a40 40 0 1 0 -80 0 40 40 0 1 0 80 0z" />
    </Icon>
);

export default HexagonImage;