
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-image` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-image?s=light hexagon-image}
 * @preview ![hexagon-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/hexagon-image.svg)
 */
const HexagonImage: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 288c-11.4-19.8-11.4-44.2 0-64L108.3 64.2c11.4-19.8 32.6-32 55.4-32l184.6 0c22.9 0 44 12.2 55.4 32L496 224c11.4 19.8 11.4 44.2 0 64L403.7 447.8c-11.4 19.8-32.6 32-55.4 32l-184.6 0c-22.9 0-44-12.2-55.4-32L16 288zm27.7-48c-5.7 9.9-5.7 22.1 0 32l29.6 51.3L116 280.6c15.4-15.4 40.4-15.6 56.1-.5l55.3 53.4 95.4-101.8c15.8-16.9 42.6-16.9 58.4 0l68.3 72.8L468.3 272c5.7-9.9 5.7-22.1 0-32L376 80.2c-5.7-9.9-16.3-16-27.7-16l-184.6 0c-11.4 0-22 6.1-27.7 16L43.7 240zm92 191.3l69.8-74.4-55.6-53.8c-3.1-3-8.1-3-11.2 .1L89.9 352l45.8 79.4zm297.1-97.8l-74.9-79.9c-3.2-3.4-8.5-3.4-11.7 0L164.1 447.8l184.2 0c11.4 0 22-6.1 27.7-16l56.8-98.3zM208 160a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-64 0a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
    </Icon>
);

export default HexagonImage;