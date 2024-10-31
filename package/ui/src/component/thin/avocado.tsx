
import { Icon } from "../../index";

/**
 * A component that renders the `avocado` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/avocado?s=thin avocado}
 * @preview ![avocado](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/avocado.svg)
 */
const Avocado: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 144c0 39.8-18.2 75.4-46.8 98.9c-20.4 16.8-38.1 40.2-43.6 68.4c-9.8 49.8-32.5 99.1-61.9 128.5c-75 75-196.5 75-271.5 0s-75-196.5 0-271.5c29.4-29.4 78.7-52.1 128.5-61.9c28.2-5.5 51.6-23.2 68.4-43.6C292.6 34.2 328.2 16 368 16c70.7 0 128 57.3 128 128zM421.3 314.3c4.6-23.5 19.6-43.9 38.1-59.1C491.5 228.9 512 188.8 512 144C512 64.5 447.5 0 368 0c-44.8 0-84.9 20.5-111.3 52.6c-15.2 18.5-35.6 33.5-59.1 38.1c-51.9 10.2-104.5 34-136.7 66.3c-81.2 81.2-81.2 212.9 0 294.2s212.9 81.2 294.2 0c32.3-32.3 56.1-84.9 66.3-136.7zM170.5 234.5c40-40 95.1-44.8 123.4-16.4s23.6 83.5-16.4 123.4s-95.1 44.8-123.4 16.4s-23.6-83.5 16.4-123.4zm134.8-27.7c-37-37-102.6-27.1-146.1 16.4s-53.4 109.1-16.4 146.1s102.6 27.1 146.1-16.4s53.4-109.1 16.4-146.1z" />
    </Icon>
);

export default Avocado;