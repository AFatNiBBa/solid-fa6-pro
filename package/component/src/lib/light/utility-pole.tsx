
import { Icon } from "../../index";

/**
 * A component that renders the `utility-pole` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/utility-pole?s=light utility-pole}
 * @preview ![utility-pole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/utility-pole.svg)
 */
const UtilityPole: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 32c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 64 80 0 0-48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48 15.8 0 .3 0L480 96l0-48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48c0 17.7-14.3 32-32 32l-42.5 0L304 231.8 304 496c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-271.8 0-.3 0-95.9-32 0 0 95.9 0 .3L240 496c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-264.2L74.5 128 32 128C14.3 128 0 113.7 0 96L0 48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48 47.9 0 .3 0L96 96l0-48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48 80 0 0-64zm-81.4 96L208 191.3l0-63.3-81.4 0zM304 191.3L385.4 128 304 128l0 63.3zM272 32l-32 0 0 64 32 0 0-64z" />
    </Icon>
);

export default UtilityPole;