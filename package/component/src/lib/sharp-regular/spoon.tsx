
import { Icon } from "../../index";

/**
 * A component that renders the `spoon` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spoon?s=sharp-regular spoon}
 * @preview ![spoon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/spoon.svg)
 */
const Spoon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 160.2c0-21.1 13.5-48.9 42.7-73.3C343.4 63 380.8 48 416 48c26.5 0 48 21.5 48 48c0 35.2-15 72.6-38.9 101.3C400.7 226.5 373 240 351.8 240l-19.7 0-14.1-14.1-32-32L272 179.9l0-19.7zm13.1 100.7L312.2 288l39.6 0C432 288 512 192 512 96c0-53-43-96-96-96C320 0 224 80 224 160.2l0 39.6 27.1 27.1L18.2 459.8l-17 17 33.9 33.9 17-17L285.1 260.9z" />
    </Icon>
);

export default Spoon;