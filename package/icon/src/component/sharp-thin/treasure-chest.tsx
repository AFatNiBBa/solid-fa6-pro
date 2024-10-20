
import { Icon } from "../../index";

/**
 * A component that renders the `treasure-chest` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/treasure-chest?s=sharp-thin treasure-chest}
 * @preview ![treasure-chest](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/treasure-chest.svg)
 */
const TreasureChest: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M136 48l0 224 80 0 0-80 0-16 16 0 112 0 16 0 0 16 0 80 80 0 0-224L136 48zM360 352l0 16-16 0-112 0-16 0 0-16 0-64-80 0 0 176 304 0 0-176-80 0 0 64zM120 48.3C61.9 52.4 16 100.8 16 160l0 112 104 0 0-223.7zM16 288l0 176 104 0 0-176L16 288zM456 464l104 0 0-176-104 0 0 176zM560 272l0-112c0-59.2-45.9-107.6-104-111.7L456 272l104 0zM0 160C0 89.3 57.3 32 128 32l320 0c70.7 0 128 57.3 128 128l0 304 0 16-16 0L16 480 0 480l0-16L0 160zm344 32l-112 0 0 160 112 0 0-160zm-48 48l0 64 0 8-16 0 0-8 0-64 0-8 16 0 0 8z" />
    </Icon>
);

export default TreasureChest;