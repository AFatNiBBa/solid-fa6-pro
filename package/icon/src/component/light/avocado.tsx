
import { Icon } from "../../index";

/**
 * A component that renders the `avocado` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/avocado?s=light avocado}
 * @preview ![avocado](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/avocado.svg)
 */
const Avocado: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 144c0 34.8-15.9 66-40.9 86.6c-22.3 18.4-42.7 44.7-49.1 77.6c-9.4 47.7-31 93.8-57.5 120.3c-68.7 68.7-180.2 68.7-248.9 0s-68.7-180.2 0-248.9c26.5-26.5 72.5-48.1 120.3-57.5c32.9-6.4 59.3-26.8 77.6-49.1C302 47.9 333.2 32 368 32c61.9 0 112 50.1 112 112zM421.3 314.3c4.6-23.5 19.6-43.9 38.1-59.1C491.5 228.9 512 188.8 512 144C512 64.5 447.5 0 368 0c-44.8 0-84.9 20.5-111.3 52.6c-15.2 18.5-35.6 33.5-59.1 38.1c-51.9 10.2-104.5 34-136.7 66.3c-81.2 81.2-81.2 212.9 0 294.2s212.9 81.2 294.2 0c32.3-32.3 56.1-84.9 66.3-136.7zM176.1 240.1c38.2-38.2 88.1-40.4 112.1-16.4s21.8 73.9-16.4 112.1s-88.1 40.4-112.1 16.4s-21.8-73.9 16.4-112.1zm134.8-39c-41.4-41.4-112.1-28.8-157.4 16.4s-57.8 116-16.4 157.4s112.1 28.8 157.4-16.4s57.8-116 16.4-157.4z" />
    </Icon>
);

export default Avocado;