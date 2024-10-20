
import { Icon } from "../../index";

/**
 * A component that renders the `id-card-clip` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/id-card-clip?s=light id-card-clip}
 * @preview ![id-card-clip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/id-card-clip.svg)
 */
const IdCardClip: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 32l-64 0 0 64 64 0 0-64zM256 0l64 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zm64 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-96 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM208 432c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-26.5-21.5-48-48-48l-64 0c-26.5 0-48 21.5-48 48zM64 64l128 0 0 32L64 96c-17.7 0-32 14.3-32 32l0 320c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 96l0-32 128 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64z" />
    </Icon>
);

export default IdCardClip;