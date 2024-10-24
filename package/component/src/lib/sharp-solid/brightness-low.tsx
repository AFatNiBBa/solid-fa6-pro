
import { Icon } from "../../index";

/**
 * A component that renders the `brightness-low` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brightness-low?s=sharp-solid brightness-low}
 * @preview ![brightness-low](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/brightness-low.svg)
 */
const BrightnessLow: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 48l0 64 64 0 0-64-64 0zM128 82.7L82.7 128 128 173.3 173.3 128 128 82.7zM48 224l0 64 64 0 0-64-64 0zM173.3 384L128 338.7 82.7 384 128 429.3 173.3 384zM288 464l0-64-64 0 0 64 64 0zm50.7-80L384 429.3 429.3 384 384 338.7 338.7 384zM464 224l-64 0 0 64 64 0 0-64zm-34.7-96L384 82.7 338.7 128 384 173.3 429.3 128zM256 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z" />
    </Icon>
);

export default BrightnessLow;