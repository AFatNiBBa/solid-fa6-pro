
import { Icon } from "../../index";

/**
 * A component that renders the `shield-halved` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-halved?s=thin shield-halved}
 * @preview ![shield-halved](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/shield-halved.svg)
 */
const ShieldHalved: typeof Icon = x => (
    <Icon {...x}>
        <path d="M264 19.4c3.7 .6 7.3 1.7 10.8 3.1l176.7 75c16.6 7.1 28.6 23.2 28.5 42.4c-.5 96.6-40.3 270.2-204.5 348.8c-3.7 1.8-7.6 3-11.5 3.7l0-473zm-16 0l0 473c-3.9-.7-7.8-1.9-11.4-3.7C72.3 410.1 32.5 236.5 32 139.9c-.1-19.1 11.9-35.3 28.5-42.4l176.7-75c3.5-1.5 7.1-2.5 10.7-3.1zM281 7.8c-16-6.8-34-6.8-50 0L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.8 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L281 7.8z" />
    </Icon>
);

export default ShieldHalved;