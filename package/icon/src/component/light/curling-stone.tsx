
import { Icon } from "../../index";

/**
 * A component that renders the `curling-stone` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/curling-stone?s=light curling-stone}
 * @preview ![curling-stone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/curling-stone.svg)
 */
const CurlingStone: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M192 112c0-26.5 21.5-48 48-48l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L240 32c-44.2 0-80 35.8-80 80l0 48c-35.3 0-64 28.7-64 64l0 1.1C41.7 232.9 0 279.6 0 336l0 32c0 61.9 50.1 112 112 112l352 0c61.9 0 112-50.1 112-112l0-32c0-56.4-41.7-103.1-96-110.9l0-1.1c0-35.3-28.7-64-64-64l-224 0 0-48zM448 224l-320 0c0-17.7 14.3-32 32-32l16 0 240 0c17.7 0 32 14.3 32 32zM112 448c-44.2 0-80-35.8-80-80l512 0c0 44.2-35.8 80-80 80l-352 0zM32 336c0-44.2 35.8-80 80-80l352 0c44.2 0 80 35.8 80 80L32 336z" />
    </Icon>
);

export default CurlingStone;