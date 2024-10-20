
import { Icon } from "../../index";

/**
 * A component that renders the `pineapple` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pineapple?s=sharp-regular pineapple}
 * @preview ![pineapple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/pineapple.svg)
 */
const Pineapple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 96l-40 40 24 24-57.1 22.9L448 192l0 128L256 512l-128 0L0 384 0 256 192 64l128 0 9.1 9.1L352 16l24 24L416 0l10 30 70-14L482 86l30 10zM236.1 464L400 300.1l0-88.2L300.1 112l-88.2 0L48 275.9l0 88.2L147.9 464l88.2 0zM176 201.4l11.3 11.3L208 233.4l20.7-20.7L240 201.4 262.6 224l-11.3 11.3-32 32L208 278.6l-11.3-11.3-32-32L153.4 224 176 201.4zm-80 80l11.3 11.3L128 313.4l20.7-20.7L160 281.4 182.6 304l-11.3 11.3-32 32L128 358.6l-11.3-11.3-32-32L73.4 304 96 281.4zm160 0l11.3 11.3L288 313.4l20.7-20.7L320 281.4 342.6 304l-11.3 11.3-32 32L288 358.6l-11.3-11.3-32-32L233.4 304 256 281.4zm-80 80l11.3 11.3L208 393.4l20.7-20.7L240 361.4 262.6 384l-11.3 11.3-32 32L208 438.6l-11.3-11.3-32-32L153.4 384 176 361.4z" />
    </Icon>
);

export default Pineapple;