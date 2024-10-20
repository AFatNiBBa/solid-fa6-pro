
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pot-food` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pot-food?s=sharp-duotone-solid pot-food}
 * @preview ![pot-food](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pot-food.svg)
 */
const PotFood: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 0l0 24c0 45.1 21.2 69 37.7 87.5l.4 .4C117.5 129.3 128 141.5 128 168l0 24 48 0 0-24c0-45.1-21.2-69-37.7-87.5l-.4-.4C122.5 62.7 112 50.5 112 24l0-24L64 0zM176 0l0 24c0 45.1 21.2 69 37.7 87.5l.4 .4C229.5 129.3 240 141.5 240 168l0 24 48 0 0-24c0-45.1-21.2-69-37.7-87.5l-.4-.4C234.5 62.7 224 50.5 224 24l0-24L176 0zM320 224l224 0c0-61.9-50.1-112-112-112s-112 50.1-112 112z" />
        <path d="M64 224l512 0-1.9 32 17.9 0 32 0 0 64-32 0-24.4 0C552.9 387.5 507.9 443.2 448 472.9l0 39.1-256 0 0-39.1C132.1 443.2 87.1 387.5 72.4 320L48 320l-32 0 0-64 32 0 17.9 0L64 224z" />
    </Icon>
);

export default PotFood;