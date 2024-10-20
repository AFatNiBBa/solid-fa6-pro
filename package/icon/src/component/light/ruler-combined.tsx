
import { Icon } from "../../index";

/**
 * A component that renders the `ruler-combined` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-combined?s=light ruler-combined}
 * @preview ![ruler-combined](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/ruler-combined.svg)
 */
const RulerCombined: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 192l0-64-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l64 0 0-32c0-17.7-14.3-32-32-32L64 32C46.3 32 32 46.3 32 64l0 288 0 96c0 1.1 .1 2.2 .2 3.3C33.8 467.4 47.5 480 64 480l96 0 288 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-32 0 0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64-64 0 0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64-64 0 0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l64 0 0-64-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l64 0zm64 96l192 0c35.3 0 64 28.7 64 64l0 96c0 35.3-28.7 64-64 64l-288 0-96 0C30.9 512 3.6 486.8 .3 454.5c-.2-2.2-.3-4.3-.3-6.5l0-96L0 64C0 28.7 28.7 0 64 0l96 0c35.3 0 64 28.7 64 64l0 192 0 32 32 0z" />
    </Icon>
);

export default RulerCombined;