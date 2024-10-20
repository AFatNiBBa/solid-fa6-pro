
import { Icon } from "../../index";

/**
 * A component that renders the `dreidel` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dreidel?s=light dreidel}
 * @preview ![dreidel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/dreidel.svg)
 */
const Dreidel: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M443.3 36.7c6.2 6.2 6.2 16.4 0 22.6L321.9 180.7l73.4 73.4c18.7 18.7 18.7 49.1 0 67.9L256 461.3c-12 12-28.3 18.7-45.3 18.7L64 480c-35.3 0-64-28.7-64-64L0 269.3c0-17 6.7-33.3 18.7-45.3L158.1 84.7c18.7-18.7 49.1-18.7 67.9 0l73.4 73.4L420.7 36.7c6.2-6.2 16.4-6.2 22.6 0zm-240 70.6c-6.2-6.2-16.4-6.2-22.6 0l-57.4 57.4 192 192 57.4-57.4c6.2-6.2 6.2-16.4 0-22.6L203.3 107.3zm89.4 272l-192-192L41.4 246.6c-6 6-9.4 14.1-9.4 22.6L32 416c0 17.7 14.3 32 32 32l146.7 0c8.5 0 16.6-3.4 22.6-9.4l59.3-59.3z" />
    </Icon>
);

export default Dreidel;