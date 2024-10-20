
import { Icon } from "../../index";

/**
 * A component that renders the `sort` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sort?s=light sort}
 * @preview ![sort](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/sort.svg)
 */
const Sort: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M282.7 192L160 69.2 37.3 192l245.5 0zM8.3 175.7L146.3 37.6C150 34 154.9 32 160 32s10 2 13.6 5.7L311.7 175.7c5.3 5.3 8.3 12.5 8.3 20c0 15.6-12.7 28.3-28.3 28.3L28.3 224C12.7 224 0 211.3 0 195.7c0-7.5 3-14.7 8.3-20zM282.7 320L37.3 320 160 442.8 282.7 320zM8.3 336.3C3 331 0 323.8 0 316.3C0 300.7 12.7 288 28.3 288l263.4 0c15.6 0 28.3 12.7 28.3 28.3c0 7.5-3 14.7-8.3 20L173.6 474.4C170 478 165.1 480 160 480s-10-2-13.7-5.7L8.3 336.3z" />
    </Icon>
);

export default Sort;