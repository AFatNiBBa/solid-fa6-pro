
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-slash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-slash?s=sharp-solid cloud-slash}
 * @preview ![cloud-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cloud-slash.svg)
 */
const CloudSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48.4 14.8L29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L635.2 480l4.8 0 0-128c0-59.6-40.8-109.8-96-124l0-36c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-46.8 0-89 20.1-118.2 52.2L48.4 14.8zM96 192l0 8.2C40.1 220 0 273.3 0 336L0 480l144 0 343.4 0L97.2 172.6c-.8 6.4-1.2 12.9-1.2 19.4z" />
    </Icon>
);

export default CloudSlash;