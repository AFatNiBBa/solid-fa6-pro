
import { Icon } from "../../index";

/**
 * A component that renders the `skull` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/skull?s=sharp-light skull}
 * @preview ![skull](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/skull.svg)
 */
const Skull: typeof Icon = x => (
    <Icon {...x}>
        <path d="M384 382.2l0 16.6 0 81.1-64 0 0-48 0-16-32 0 0 16 0 48-64 0 0-48 0-16-32 0 0 16 0 48-64 0 0-81.1 0-16.6-13.6-9.6C63.1 336.7 32 282.8 32 224C32 121.8 128.1 32 256 32s224 89.8 224 192c0 58.8-31.1 112.7-82.4 148.7L384 382.2zm32 16.6c58.5-41.1 96-104.1 96-174.9C512 100.3 397.4 0 256 0S0 100.3 0 224c0 70.7 37.5 133.8 96 174.9L96 480l0 32 32 0 256 0 32 0 0-32 0-81.1zM160 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 96a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm160-64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm96 0a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
    </Icon>
);

export default Skull;