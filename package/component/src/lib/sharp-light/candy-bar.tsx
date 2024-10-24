
import { Icon } from "../../index";

/**
 * A component that renders the `candy-bar` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/candy-bar?s=sharp-light candy-bar}
 * @preview ![candy-bar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/candy-bar.svg)
 */
const CandyBar: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M159.2 64l11.3 0L320 64l16 0 16 0 256 0 32 0 0 32 0 320 0 32-32 0-256 0-16 0-16 0L16 448 0 448l0-16L0 234.5l0-11.3 10.7-3.8C41.8 208.5 64 178.8 64 144l0-16 16 0c34.8 0 64.5-22.2 75.5-53.3L159.2 64zM192 96l0 96 128 0 0-96L192 96zm-32 30.4c-17 17.4-39.7 29.2-65 32.6c-1.6 11.7-4.9 22.8-9.8 33l74.8 0 0-65.6zm-96 96c-9.2 9.4-20 17.1-32 22.8L32 320l128 0 0-96-96 0 0-1.6zM32 352l0 64 128 0 0-64L32 352zm160 64l128 0 0-64-128 0 0 64zm128-96l0-96-128 0 0 96 128 0zm32 96l256 0 0-320L352 96l0 320z" />
    </Icon>
);

export default CandyBar;