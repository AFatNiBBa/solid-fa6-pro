
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ruler-combined` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-combined?s=duotone ruler-combined}
 * @preview ![ruler-combined](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/ruler-combined.svg)
 */
const RulerCombined: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 48L0 368l0 96c0 1.7 .1 3.3 .2 4.9C2.7 493.1 23.1 512 48 512l96 0 320 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-64-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-64-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-48c0-26.5-21.5-48-48-48L48 0C21.5 0 0 21.5 0 48z" />
        <path d="M112 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0-32-80 0zm80 96l-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0-32zm0 96l-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0 80c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80-32 0 0-32zm128 32l-32 0 0 80c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80zm96 80l0-80-32 0 0 80c0 8.8 7.2 16 16 16s16-7.2 16-16z" />
    </Icon>
);

export default RulerCombined;