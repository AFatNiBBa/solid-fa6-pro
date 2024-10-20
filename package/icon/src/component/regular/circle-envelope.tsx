
import { Icon } from "../../index";

/**
 * A component that renders the `circle-envelope` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-envelope?s=regular circle-envelope}
 * @preview ![circle-envelope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-envelope.svg)
 */
const CircleEnvelope: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm-7.3-256.4c2.2 1.2 4.7 1.9 7.3 1.9s5.1-.6 7.3-1.9l120.6-66.4C382.5 172.9 368.7 160 352 160l-192 0c-16.7 0-30.5 12.9-31.9 29.3l120.6 66.4zm30 28c-7 3.8-14.8 5.8-22.7 5.8s-15.8-2-22.7-5.8L128 225.7l0 94.3c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32l0-94.3L278.7 283.6z" />
    </Icon>
);

export default CircleEnvelope;