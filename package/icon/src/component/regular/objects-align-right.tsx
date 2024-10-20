
import { Icon } from "../../index";

/**
 * A component that renders the `objects-align-right` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-align-right?s=regular objects-align-right}
 * @preview ![objects-align-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/objects-align-right.svg)
 */
const ObjectsAlignRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 464c0 13.3 10.7 24 24 24s24-10.7 24-24l0-464zM336 176L48 176l0-64 288 0 0 64zm48-64c0-26.5-21.5-48-48-48L48 64C21.5 64 0 85.5 0 112l0 64c0 26.5 21.5 48 48 48l288 0c26.5 0 48-21.5 48-48l0-64zM336 400l-160 0 0-64 160 0 0 64zm48-64c0-26.5-21.5-48-48-48l-160 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-64z" />
    </Icon>
);

export default ObjectsAlignRight;