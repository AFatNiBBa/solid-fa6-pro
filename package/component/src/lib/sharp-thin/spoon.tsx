
import { Icon } from "../../index";

/**
 * A component that renders the `spoon` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spoon?s=sharp-thin spoon}
 * @preview ![spoon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/spoon.svg)
 */
const Spoon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240 160.2c0-33.8 20.5-69.7 54.2-97.9C327.8 34.3 372.3 16 416 16c44.2 0 80 35.8 80 80c0 43.7-18.3 88.2-46.3 121.8c-28.2 33.8-64.1 54.2-97.9 54.2l-33 0-23.4-23.4-32-32L240 193.1l0-33zm44.1 99.7L312.2 288l39.6 0C432 288 512 192 512 96c0-53-43-96-96-96C320 0 224 80 224 160.2l0 39.6 28.1 28.1 10.3 10.3L6.2 494.5 .5 500.2l11.3 11.3 5.7-5.7L273.8 249.5l10.3 10.3z" />
    </Icon>
);

export default Spoon;