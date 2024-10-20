
import { Icon } from "../../index";

/**
 * A component that renders the `caravan` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caravan?s=regular caravan}
 * @preview ![caravan](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/caravan.svg)
 */
const Caravan: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M416 80c61.9 0 112 50.1 112 112l0 176-48 0 0-200c0-22.1-17.9-40-40-40l-80 0c-22.1 0-40 17.9-40 40l0 200-44.8 0c-16.6-28.7-47.6-48-83.2-48s-66.6 19.3-83.2 48L80 368c-17.7 0-32-14.3-32-32l0-224c0-17.7 14.3-32 32-32l336 0zM80 416l16 0c0 53 43 96 96 96s96-43 96-96l64 0 96 0 80 0 48 0 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-176c0-88.4-71.6-160-160-160L80 32C35.8 32 0 67.8 0 112L0 336c0 44.2 35.8 80 80 80zM432 224l-16 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l16 0 0 96-64 0 0-192 64 0 0 48zM128 128c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-128 0zm64 240a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default Caravan;