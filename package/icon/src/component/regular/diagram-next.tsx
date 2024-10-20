
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-next` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-next?s=regular diagram-next}
 * @preview ![diagram-next](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/diagram-next.svg)
 */
const DiagramNext: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 224c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96l0 64c0 35.3 28.7 64 64 64l168 0 0 86.1-23-23c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0l64-64c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23 0-86.1 168 0zM64 288c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64l-74.3 0c4.8 16 2.2 33.8-7.7 48l82 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-80 0-224 0-80 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16l82 0c-9.9-14.2-12.5-32-7.7-48L64 288z" />
    </Icon>
);

export default DiagramNext;