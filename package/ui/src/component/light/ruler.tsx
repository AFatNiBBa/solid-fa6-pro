
import { Icon } from "../../index";

/**
 * A component that renders the `ruler` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler?s=light ruler}
 * @preview ![ruler](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/ruler.svg)
 */
const Ruler: typeof Icon = x => (
    <Icon {...x}>
        <path d="M51.9 390.6c-12.5-12.5-12.5-32.8 0-45.3l39.4-39.4 41.4 41.4c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-41.4-41.4 41.4-41.4 41.4 41.4c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-41.4-41.4 41.4-41.4 41.4 41.4c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-41.4-41.4 41.4-41.4 41.4 41.4c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L305.9 91.3l39.4-39.4c12.5-12.5 32.8-12.5 45.3 0l69.5 69.5c12.5 12.5 12.5 32.8 0 45.3L166.6 460.1c-12.5 12.5-32.8 12.5-45.3 0L51.9 390.6zm46.9 92.1c25 25 65.5 25 90.5 0L482.7 189.3c25-25 25-65.5 0-90.5L413.3 29.3c-25-25-65.5-25-90.5 0L29.3 322.7c-25 25-25 65.5 0 90.5l69.5 69.5z" />
    </Icon>
);

export default Ruler;