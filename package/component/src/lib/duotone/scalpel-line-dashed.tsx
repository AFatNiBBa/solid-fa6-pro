
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scalpel-line-dashed` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scalpel-line-dashed?s=duotone scalpel-line-dashed}
 * @preview ![scalpel-line-dashed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/scalpel-line-dashed.svg)
 */
const ScalpelLineDashed: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M1.2 502.1c2.5 6 8.3 9.9 14.8 9.9c18.1 0 84.1-8.4 145.9-33.1C222.5 454.6 288 410.9 288 336l0-16-16 0-96 0-6.6 0-4.7 4.7-160 160c-4.6 4.6-5.9 11.5-3.5 17.4z" />
        <path d="M387.5 24.6C400.9 9 420.5 0 441.2 0C480.3 0 512 31.7 512 70.8l0 3.4c0 17.9-6.5 35.2-18.2 48.7L337.2 303.5C328 314 314.8 320 300.9 320L168 320c-6.3 0-11.9-3.6-14.5-9.3s-1.7-12.4 2.4-17.1L387.5 24.6zM240 480l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm128 0l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm128 0l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default ScalpelLineDashed;