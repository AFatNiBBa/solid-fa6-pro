
import { Icon } from "../../index";

/**
 * A component that renders the `candy-bar` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/candy-bar?s=light candy-bar}
 * @preview ![candy-bar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/candy-bar.svg)
 */
const CandyBar: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M155.5 74.7c2.3-6.4 8.3-10.7 15.1-10.7L320 64l16 0 16 0 224 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64l-224 0-16 0-16 0L64 448c-35.3 0-64-28.7-64-64L0 234.5c0-6.8 4.3-12.8 10.7-15.1C41.8 208.5 64 178.8 64 144c0-8.8 7.2-16 16-16c34.8 0 64.5-22.2 75.5-53.3zM192 96l0 96 128 0 0-96L192 96zm-32 30.4c-17 17.4-39.7 29.2-65 32.6c-1.6 11.7-4.9 22.8-9.8 33l74.8 0 0-65.6zm-96 96c-9.2 9.4-20 17.1-32 22.8L32 320l128 0 0-96-96 0 0-1.6zM32 352l0 32c0 17.7 14.3 32 32 32l96 0 0-64L32 352zm160 64l128 0 0-64-128 0 0 64zm128-96l0-96-128 0 0 96 128 0zm32 96l224 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32L352 96l0 320z" />
    </Icon>
);

export default CandyBar;