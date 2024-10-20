
import { Icon } from "../../index";

/**
 * A component that renders the `smoking` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/smoking?s=sharp-light smoking}
 * @preview ![smoking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/smoking.svg)
 */
const Smoking: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 0l32 0 0 43c0 38.2 15.2 74.8 42.2 101.8l21 21c21 21 32.8 49.5 32.8 79.2l0 43-32 0 0-43c0-21.2-8.4-41.6-23.4-56.6l-21-21C466.5 134.4 448 89.7 448 43l0-43zM640 288l-32 0 0-43c0-38.2-15.2-74.8-42.2-101.8l-21-21c-21-21-32.8-49.5-32.8-79.2l0-43 32 0 0 43c0 21.2 8.4 41.6 23.4 56.6l21 21c33 33 51.5 77.8 51.5 124.5l0 43zM0 352l16 0 176 0 32 0 272 0 16 0 0 16 0 128 0 16-16 0-272 0-32 0L16 512 0 512l0-16L0 368l0-16zm32 32l0 96 160 0 0-96L32 384zm448 96l0-96-256 0 0 96 256 0zm96-128l0 16 0 128 0 16-32 0 0-16 0-128 0-16 32 0zm64 0l0 16 0 128 0 16-32 0 0-16 0-128 0-16 32 0z" />
    </Icon>
);

export default Smoking;