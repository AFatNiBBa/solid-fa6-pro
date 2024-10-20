
import { Icon } from "../../index";

/**
 * A component that renders the `object-intersect` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-intersect?s=thin object-intersect}
 * @preview ![object-intersect](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/object-intersect.svg)
 */
const ObjectIntersect: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 0l96 0 0 16-96 0 0-16zM96 0l0 16L64 16C37.5 16 16 37.5 16 64l0 32L0 96 0 64C0 28.7 28.7 0 64 0L96 0zM0 128l16 0 0 96L0 224l0-96zM256 16l0-16 32 0c35.3 0 64 28.7 64 64l0 64-16 0 0-64c0-26.5-21.5-48-48-48l-32 0zm80 144l16 0 0 16 0 80 0 32c0 35.3-28.7 64-64 64l-64 0-48 0-16 0 0-16 0-80 0-32c0-35.3 28.7-64 64-64l64 0 48 0zM160 384l16 0 0 64c0 26.5 21.5 48 48 48l32 0 0 16-32 0c-35.3 0-64-28.7-64-64l0-64zm-32-32l-64 0c-35.3 0-64-28.7-64-64l0-32 16 0 0 32c0 26.5 21.5 48 48 48l64 0 0 16zM384 176l0-16 64 0c35.3 0 64 28.7 64 64l0 32-16 0 0-32c0-26.5-21.5-48-48-48l-64 0zm32 336l0-16 32 0c26.5 0 48-21.5 48-48l0-32 16 0 0 32c0 35.3-28.7 64-64 64l-32 0zm80-224l16 0 0 96-16 0 0-96zM288 512l0-16 96 0 0 16-96 0zm48-336l-112 0c-26.5 0-48 21.5-48 48l0 112 112 0c26.5 0 48-21.5 48-48l0-112z" />
    </Icon>
);

export default ObjectIntersect;