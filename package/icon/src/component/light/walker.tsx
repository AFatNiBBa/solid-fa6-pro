
import { Icon } from "../../index";

/**
 * A component that renders the `walker` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/walker?s=light walker}
 * @preview ![walker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/walker.svg)
 */
const Walker: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M178.8 32L320 32c26.5 0 48 21.5 48 48l0 112-264.6 0L132 69.1C137.1 47.4 156.5 32 178.8 32zM368 224l0 162c-27.6 7.1-48 32.2-48 62c0 35.3 28.7 64 64 64s64-28.7 64-64c0-29.8-20.4-54.9-48-62l0-306c0-44.2-35.8-80-80-80L178.8 0c-37.2 0-69.5 25.6-77.9 61.8L.4 492.4c-2 8.6 3.3 17.2 11.9 19.2s17.2-3.3 19.2-11.9L96 223.6l0 .4 272 0zm48 224a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
    </Icon>
);

export default Walker;