
import { Icon } from "../../index";

/**
 * A component that renders the `citrus` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/citrus?s=thin citrus}
 * @preview ![citrus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/citrus.svg)
 */
const Citrus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M384 112c44.2 0 80-35.8 80-80l0-16-80 0c-44.2 0-80 35.8-80 80l0 16 80 0zm0 16l-80 0c-8.8 0-16-7.2-16-16l0-16c0-15.8 3.8-30.8 10.6-43.9C284.8 49.4 270.6 48 256 48C132.3 48 32 148.3 32 272s100.3 224 224 224s224-100.3 224-224c0-46.6-14.2-89.8-38.5-125.6c4.8-2.4 9.4-5.1 13.8-8.1C481 176.5 496 222.5 496 272c0 132.5-107.5 240-240 240S16 404.5 16 272S123.5 32 256 32c17.8 0 35.1 1.9 51.8 5.6C325.3 14.7 353 0 384 0l80 0c8.8 0 16 7.2 16 16l0 16c0 53-43 96-96 96z" />
    </Icon>
);

export default Citrus;