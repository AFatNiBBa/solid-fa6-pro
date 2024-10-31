
import { Icon } from "../../index";

/**
 * A component that renders the `id-card-clip` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/id-card-clip?s=thin id-card-clip}
 * @preview ![id-card-clip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/id-card-clip.svg)
 */
const IdCardClip: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M256 16l64 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16zM224 32l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L256 0c-17.7 0-32 14.3-32 32zM192 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L384 64l0 16 128 0c26.5 0 48 21.5 48 48l0 320c0 26.5-21.5 48-48 48L64 496c-26.5 0-48-21.5-48-48l0-320c0-26.5 21.5-48 48-48l128 0 0-16zm48 192a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm112 0a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM192 424c0-30.9 25.1-56 56-56l80 0c30.9 0 56 25.1 56 56c0 4.4 3.6 8 8 8s8-3.6 8-8c0-39.8-32.2-72-72-72l-80 0c-39.8 0-72 32.2-72 72c0 4.4 3.6 8 8 8s8-3.6 8-8z" />
    </Icon>
);

export default IdCardClip;