
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diagram-next` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-next?s=duotone diagram-next}
 * @preview ![diagram-next](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/diagram-next.svg)
 */
const DiagramNext: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 352l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64l-57.4 0c5.8 16.2 3.1 35.5-11.3 49.9l-89.4 89.4c-18.7 18.7-49.1 18.7-67.9 0l-89.4-89.4c-14.4-14.4-17.1-33.7-11.3-49.9L64 288c-35.3 0-64 28.7-64 64z" />
        <path d="M448 224c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96l0 64c0 35.3 28.7 64 64 64l168 0 0 64-46.1 0c-21.4 0-32.1 25.9-17 41L239 399c9.4 9.4 24.6 9.4 33.9 0L343 329c15.1-15.1 4.4-41-17-41L280 288l0-64 168 0z" />
    </Icon>
);

export default DiagramNext;