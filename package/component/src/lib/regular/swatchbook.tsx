
import { Icon } from "../../index";

/**
 * A component that renders the `swatchbook` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/swatchbook?s=regular swatchbook}
 * @preview ![swatchbook](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/swatchbook.svg)
 */
const Swatchbook: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 400c0 61.9 50.1 112 112 112l336 0c35.3 0 64-28.7 64-64l0-96c0-35.3-28.7-64-64-64l-62.1 0 50.7-50.7c25-25 25-65.5 0-90.5L365.3 75.3c-25-25-65.5-25-90.5 0L224 126.1 224 64c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 400zm448 64l-238.1 0 128-128L448 336c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16zM402.7 203.3L224 382.1l0-188.1 84.7-84.7c6.2-6.2 16.4-6.2 22.6 0l71.4 71.4c6.2 6.2 6.2 16.4 0 22.6zM112 464c-35.3 0-64-28.7-64-64l0-96 128 0 0 96c0 35.3-28.7 64-64 64zM48 256l0-80 128 0 0 80L48 256zm0-128l0-64c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16l0 64L48 128zm64 296a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Swatchbook;