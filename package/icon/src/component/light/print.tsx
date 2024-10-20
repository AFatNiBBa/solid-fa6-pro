
import { Icon } from "../../index";

/**
 * A component that renders the `print` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/print?s=light print}
 * @preview ![print](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/print.svg)
 */
const Print: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 160l-32 0 0-96C64 28.7 92.7 0 128 0L357.5 0c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 18.7 28.3 18.7 45.3l0 69.5-32 0 0-69.5c0-8.5-3.4-16.6-9.4-22.6L380.1 41.4c-6-6-14.1-9.4-22.6-9.4L128 32c-17.7 0-32 14.3-32 32l0 96zm352 64L64 224c-17.7 0-32 14.3-32 32l0 128 32 0 0-32c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32l0 32 32 0 0-128c0-17.7-14.3-32-32-32zm0 192l0 64c0 17.7-14.3 32-32 32L96 512c-17.7 0-32-14.3-32-32l0-64-32 0c-17.7 0-32-14.3-32-32L0 256c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 128c0 17.7-14.3 32-32 32l-32 0zM96 352l0 128 320 0 0-128L96 352zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Print;