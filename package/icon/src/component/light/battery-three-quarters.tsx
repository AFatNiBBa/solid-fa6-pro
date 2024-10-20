
import { Icon } from "../../index";

/**
 * A component that renders the `battery-three-quarters` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-three-quarters?s=light battery-three-quarters}
 * @preview ![battery-three-quarters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/battery-three-quarters.svg)
 */
const BatteryThreeQuarters: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M432 128c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48L80 384c-26.5 0-48-21.5-48-48l0-160c0-26.5 21.5-48 48-48l352 0zM80 96C35.8 96 0 131.8 0 176L0 336c0 44.2 35.8 80 80 80l352 0c44.2 0 80-35.8 80-80l0-160c0-44.2-35.8-80-80-80L80 96zM576 208c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96zM112 192l192 0c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16zM64 208l0 96c0 26.5 21.5 48 48 48l192 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-192 0c-26.5 0-48 21.5-48 48z" />
    </Icon>
);

export default BatteryThreeQuarters;