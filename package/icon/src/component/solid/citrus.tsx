
import { Icon } from "../../index";

/**
 * A component that renders the `citrus` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/citrus?s=solid citrus}
 * @preview ![citrus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/citrus.svg)
 */
const Citrus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M304 128l80 0c53 0 96-43 96-96l0-16c0-8.8-7.2-16-16-16L384 0c-53 0-96 43-96 96l0 16c0 8.8 7.2 16 16 16zM256 96c0-23.1 6.1-44.7 16.8-63.4c-5.5-.4-11.1-.6-16.8-.6C123.5 32 16 139.5 16 272s107.5 240 240 240s240-107.5 240-240c0-49.5-15-95.5-40.7-133.7C435 152 410.4 160 384 160l-80 0c-26.5 0-48-21.5-48-48l0-16z" />
    </Icon>
);

export default Citrus;