
import { Icon } from "../../index";

/**
 * A component that renders the `caravan` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caravan?s=sharp-regular caravan}
 * @preview ![caravan](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/caravan.svg)
 */
const Caravan: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M416 80c61.9 0 112 50.1 112 112l0 176-48 0 0-192 0-48-48 0-64 0-48 0 0 48 0 192-44.8 0c-16.6-28.7-47.6-48-83.2-48s-66.6 19.3-83.2 48L48 368 48 80l368 0zM48 416l48 0c0 53 43 96 96 96s96-43 96-96l32 0 48 0 64 0 48 0 48 0 48 0 40 0 24 0 0-48-24 0-40 0 0-176c0-88.4-71.6-160-160-160L48 32 0 32 0 80 0 368l0 48 48 0zM432 224l-16 0-24 0 0 48 24 0 16 0 0 96-64 0 0-192 64 0 0 48zM288 128L96 128l0 128 192 0 0-128zM192 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default Caravan;