
import { Icon } from "../../index";

/**
 * A component that renders the `ornament` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ornament?s=solid ornament}
 * @preview ![ornament](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/ornament.svg)
 */
const Ornament: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm55.4 64c5.4-9.4 8.6-20.3 8.6-32c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 11.7 3.1 22.6 8.6 32L128 96c-17.7 0-32 14.3-32 32l0 25.7C66.9 170.5 42.5 194.9 25.7 224l332.6 0c-16.9-29.1-41.2-53.5-70.3-70.3l0-25.7c0-17.7-14.3-32-32-32l-8.6 0zM0 320c0 22.4 3.8 44 10.9 64l362.2 0c7.1-20 10.9-41.6 10.9-64s-3.8-44-10.9-64L10.9 256C3.8 276 0 297.6 0 320zm25.7 96c33.2 57.4 95.2 96 166.3 96s133.1-38.6 166.3-96L25.7 416z" />
    </Icon>
);

export default Ornament;