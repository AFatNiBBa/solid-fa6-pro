
import { Icon } from "../../index";

/**
 * A component that renders the `align-slash` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-slash?s=light align-slash}
 * @preview ![align-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/align-slash.svg)
 */
const AlignSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M25.9 3.4C19-2 8.9-.8 3.4 6.1S-.8 23.1 6.1 28.6l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5L25.9 3.4zM528 336c8.8 0 16-7.2 16-16s-7.2-16-16-16l-43.9 0 40.5 32 3.4 0zm0-128c8.8 0 16-7.2 16-16s-7.2-16-16-16l-206 0 40.5 32L528 208zm-372.1 0l-40.5-32-3.4 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l43.9 0zM528 48L159.8 48l40.5 32L528 80c8.8 0 16-7.2 16-16s-7.2-16-16-16zM318 336l-40.5-32L112 304c-8.8 0-16 7.2-16 16s7.2 16 16 16l206 0zm121.6 96L112 432c-8.8 0-16 7.2-16 16s7.2 16 16 16l368.2 0-40.5-32z" />
    </Icon>
);

export default AlignSlash;