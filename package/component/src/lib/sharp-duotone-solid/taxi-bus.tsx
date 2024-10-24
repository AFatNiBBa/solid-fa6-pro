
import { Icon, generic } from "../../index";

/**
 * A component that renders the `taxi-bus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/taxi-bus?s=sharp-duotone-solid taxi-bus}
 * @preview ![taxi-bus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/taxi-bus.svg)
 */
const TaxiBus: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 38.4L0 96C0 202.7 0 309.3 0 416l48 0 0 64 80 0 0-64 64 0 0-160 39.2 0 10.7-32L208 224l0-128 112 0 64 0 0-32 0-25.6S299 0 192 0S0 38.4 0 38.4zM104 304a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM64 96l112 0 0 128L64 224 64 96z" />
        <path d="M496 128l-128 0 0 32-48 0-23.1 0-7.3 21.9L254.3 288 224 288l0 160s0 0 0 0l0 64 80 0 0-64 256 0 0 64 80 0 0-64s0 0 0 0l0-160-30.3 0L574.4 181.9 567.1 160 544 160l-48 0 0-32zm24.9 96l21.3 64-220.5 0 21.3-64 177.9 0zM280 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm280-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default TaxiBus;