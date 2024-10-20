
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-successor` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-successor?s=regular diagram-successor}
 * @preview ![diagram-successor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/diagram-successor.svg)
 */
const DiagramSuccessor: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 416l0-64c0-35.3-28.7-64-64-64L64 288c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64zM240 160c0 8.8-7.2 16-16 16L64 176c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16l144 0 16 0c8.8 0 16 7.2 16 16l0 64zm48-64c0-5.5-.7-10.9-2-16l82 0c13.3 0 24 10.7 24 24l0 38.1-23-23c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0l64-64c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23 0-38.1c0-39.8-32.2-72-72-72L224 32l-16 0L64 32C28.7 32 0 60.7 0 96l0 64c0 35.3 28.7 64 64 64l160 0c35.3 0 64-28.7 64-64l0-64z" />
    </Icon>
);

export default DiagramSuccessor;