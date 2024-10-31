
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diagram-previous` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-previous?s=duotone diagram-previous}
 * @preview ![diagram-previous](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/diagram-previous.svg)
 */
const DiagramPrevious: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96l0 64c0 35.3 28.7 64 64 64l49 0c-5.5-18.4-2-39.6 14.1-55.6L216.4 79c21.9-21.9 57.3-21.9 79.2 0L385 168.4c16 16 19.6 37.2 14.1 55.6l49 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96z" />
        <path d="M448 288c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l168 0 0-64-46.1 0c-21.4 0-32.1-25.9-17-41L239 113c9.4-9.4 24.6-9.4 33.9 0L343 183c15.1 15.1 4.4 41-17 41L280 224l0 64 168 0z" />
    </Icon>
);

export default DiagramPrevious;