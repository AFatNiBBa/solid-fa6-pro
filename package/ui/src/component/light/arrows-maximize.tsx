
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-maximize` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-maximize?s=light arrows-maximize}
 * @preview ![arrows-maximize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrows-maximize.svg)
 */
const ArrowsMaximize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M336 32c-8.8 0-16 7.2-16 16s7.2 16 16 16l89.4 0L256 233.4 86.6 64 176 64c8.8 0 16-7.2 16-16s-7.2-16-16-16L48 32c-8.8 0-16 7.2-16 16l0 128c0 8.8 7.2 16 16 16s16-7.2 16-16l0-89.4L233.4 256 64 425.4 64 336c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 128c0 8.8 7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-89.4 0L256 278.6 425.4 448 336 448c-8.8 0-16 7.2-16 16s7.2 16 16 16l128 0c8.8 0 16-7.2 16-16l0-128c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 89.4L278.6 256 448 86.6l0 89.4c0 8.8 7.2 16 16 16s16-7.2 16-16l0-128c0-8.8-7.2-16-16-16L336 32z" />
    </Icon>
);

export default ArrowsMaximize;