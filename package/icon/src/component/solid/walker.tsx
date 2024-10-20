
import { Icon } from "../../index";

/**
 * A component that renders the `walker` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/walker?s=solid walker}
 * @preview ![walker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/walker.svg)
 */
const Walker: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M194 64l126 0c17.7 0 32 14.3 32 32l0 64-207 0 17.9-71.8C166.5 74 179.3 64 194 64zM352 224l0 168.6c-19.1 11.1-32 31.7-32 55.4c0 35.3 28.7 64 64 64s64-28.7 64-64c0-23.7-12.9-44.4-32-55.4L416 96c0-53-43-96-96-96L194 0c-44.1 0-82.4 30-93.1 72.7L1 472.2c-4.3 17.1 6.1 34.5 23.3 38.8s34.5-6.1 38.8-23.3L129 224l223 0zm32 208a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Walker;