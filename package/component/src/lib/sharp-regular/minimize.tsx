
import { Icon } from "../../index";

/**
 * A component that renders the `minimize` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/minimize?s=sharp-regular minimize}
 * @preview ![minimize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/minimize.svg)
 */
const Minimize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M40 6.1L6.1 40 23 57l64 64L57.9 150.1 24 184l33.9 33.9L64 224l112 0 48 0 0-48 0-112-6.1-6.1L184 24 150.1 57.9 121 87 57 23 40 6.1zM505.9 40L472 6.1 455 23 391 87 361.9 57.9 328 24 294.1 57.9 288 64l0 112 0 48 48 0 112 0 6.1-6.1L488 184l-33.9-33.9L425 121l64-64 17-17zM57.9 361.9L87 391 23 455l-17 17L40 505.9l17-17 64-64 29.1 29.1L184 488l33.9-33.9L224 448l0-112 0-48-48 0L64 288l-6.1 6.1L24 328l33.9 33.9zM425 391l29.1-29.1L488 328l-33.9-33.9L448 288l-112 0-48 0 0 48 0 112 6.1 6.1L328 488l33.9-33.9L391 425l64 64 17 17L505.9 472l-17-17-64-64zM176 412.1L99.9 336l76.1 0 0 76.1zm160 0l0-76.1 76.1 0L336 412.1zm0-312.2L412.1 176 336 176l0-76.1zm-160 0l0 76.1-76.1 0L176 99.9z" />
    </Icon>
);

export default Minimize;