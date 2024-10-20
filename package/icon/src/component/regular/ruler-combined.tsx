
import { Icon } from "../../index";

/**
 * A component that renders the `ruler-combined` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-combined?s=regular ruler-combined}
 * @preview ![ruler-combined](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/ruler-combined.svg)
 */
const RulerCombined: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 288l0-16 0-48-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l64 0 0-64-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l64 0 0-32c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 272 0 112c0 .6 0 1.2 .1 1.7c.8 8 7.7 14.3 15.9 14.3l112 0 272 0c8.8 0 16-7.2 16-16l0-112c0-8.8-7.2-16-16-16l-32 0 0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64-64 0 0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64-48 0-16 0 0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l64 0zm96-16l160 0c35.3 0 64 28.7 64 64l0 112c0 35.3-28.7 64-64 64l-272 0L64 512C30.9 512 3.6 486.8 .3 454.5c-.2-2.2-.3-4.3-.3-6.5L0 336 0 64C0 28.7 28.7 0 64 0L176 0c35.3 0 64 28.7 64 64l0 160 0 48 48 0z" />
    </Icon>
);

export default RulerCombined;