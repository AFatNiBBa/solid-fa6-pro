
import { Icon } from "../../index";

/**
 * A component that renders the `object-intersect` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-intersect?s=regular object-intersect}
 * @preview ![object-intersect](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/object-intersect.svg)
 */
const ObjectIntersect: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 48L64 48c-8.8 0-16 7.2-16 16l0 32L0 96 0 64C0 28.7 28.7 0 64 0L96 0l0 48zm32 0l0-48 96 0 0 48-96 0zM0 128l48 0 0 96L0 224l0-96zm352 32l0 48 0 48 0 32c0 35.3-28.7 64-64 64l-64 0-16 0-48 0 0-48 0-48 0-32c0-35.3 28.7-64 64-64l64 0 16 0 48 0zM160 416l48 0 0 32c0 8.8 7.2 16 16 16l32 0 0 48-32 0c-35.3 0-64-28.7-64-64l0-32zM352 64l0 32-48 0 0-32c0-8.8-7.2-16-16-16l-32 0 0-48 32 0c35.3 0 64 28.7 64 64zm64 144l0-48 32 0c35.3 0 64 28.7 64 64l0 32-48 0 0-32c0-8.8-7.2-16-16-16l-32 0zM96 304l0 48-32 0c-35.3 0-64-28.7-64-64l0-32 48 0 0 32c0 8.8 7.2 16 16 16l32 0zM288 464l96 0 0 48-96 0 0-48zm160 48l-32 0 0-48 32 0c8.8 0 16-7.2 16-16l0-32 48 0 0 32c0 35.3-28.7 64-64 64zm64-128l-48 0 0-96 48 0 0 96zM304 208l-80 0c-8.8 0-16 7.2-16 16l0 80 80 0c8.8 0 16-7.2 16-16l0-80z" />
    </Icon>
);

export default ObjectIntersect;