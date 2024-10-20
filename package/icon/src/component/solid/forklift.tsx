
import { Icon } from "../../index";

/**
 * A component that renders the `forklift` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forklift?s=solid forklift}
 * @preview ![forklift](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/forklift.svg)
 */
const Forklift: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 160l48 0L96 48c0-26.5 21.5-48 48-48L292.7 0c20.3 0 38.4 12.8 45.2 31.9l75.3 210.8c1.8 5.2 2.8 10.6 2.8 16.1l0 85.7c19.6 17.6 32 43.1 32 71.6c0 53-43 96-96 96s-96-43-96-96l-64 0c0 53-43 96-96 96s-96-43-96-96L0 208c0-26.5 21.5-48 48-48zm208 96l94 0L281.4 64 160 64l0 96 96 96zM96 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm256 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM544 32l0 352 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-384c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
    </Icon>
);

export default Forklift;