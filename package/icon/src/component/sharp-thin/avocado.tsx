
import { Icon } from "../../index";

/**
 * A component that renders the `avocado` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/avocado?s=sharp-thin avocado}
 * @preview ![avocado](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/avocado.svg)
 */
const Avocado: typeof Icon = x => (
    <Icon {...x}>
        <path d="M404.6 288.4l53.9-53.9c50-50 50-131 0-181s-131-50-181 0l-53.9 53.9-4.8 4.8L212 112c-50.5-1-101.2 17.7-139.7 56.2c-75 75-75 196.5 0 271.5s196.5 75 271.5 0C382.3 401.3 401 350.5 400 300l-.1-6.8 4.8-4.8zm65.2-42.6L416 299.7c1.1 54.7-19.2 109.7-60.9 151.4c-81.2 81.2-212.9 81.2-294.2 0s-81.2-212.9 0-294.2c41.7-41.7 96.7-62 151.4-60.9l53.9-53.9c56.2-56.2 147.4-56.2 203.6 0s56.2 147.4 0 203.6zM170.5 234.5c-40 40-44.8 95.1-16.4 123.4s83.5 23.6 123.4-16.4s44.8-95.1 16.4-123.4s-83.5-23.6-123.4 16.4zm134.8-27.7c37 37 27.1 102.6-16.4 146.1s-109.1 53.4-146.1 16.4s-27.1-102.6 16.4-146.1s109.1-53.4 146.1-16.4z" />
    </Icon>
);

export default Avocado;