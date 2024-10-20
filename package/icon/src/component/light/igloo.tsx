
import { Icon } from "../../index";

/**
 * A component that renders the `igloo` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/igloo?s=light igloo}
 * @preview ![igloo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/igloo.svg)
 */
const Igloo: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 320l0 32 0 64c0 35.3-28.7 64-64 64l-128 0-192 0L64 480c-35.3 0-64-28.7-64-64l0-96C0 160.9 128.9 32 288 32s288 128.9 288 288zm-32 32l-64 0-32 0-64 0 0 96 128 0c17.7 0 32-14.3 32-32l0-64zm0-32c0-46.6-12.5-90.3-34.2-128L480 192l0 128 64 0zM352 192l-32 0-192 0 0 128 69.5 0c13.2-37.3 48.7-64 90.5-64s77.4 26.7 90.5 64l69.5 0 0-128-96 0zM96 352l-64 0 0 64c0 17.7 14.3 32 32 32l128 0 0-96-64 0-32 0zm0-32l0-128-29.8 0C44.5 229.7 32 273.4 32 320l64 0zM487.9 160C453.8 117.5 406.4 86.1 352 72.1l0 87.9 135.9 0zM320 66c-10.5-1.3-21.2-2-32-2c-80.8 0-152.9 37.5-199.9 96L320 160l0-94zM288 288c-35.3 0-64 28.7-64 64l0 96 128 0 0-96c0-35.3-28.7-64-64-64z" />
    </Icon>
);

export default Igloo;