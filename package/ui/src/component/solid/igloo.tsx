
import { Icon } from "../../index";

/**
 * A component that renders the `igloo` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/igloo?s=solid igloo}
 * @preview ![igloo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/igloo.svg)
 */
const Igloo: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 33.8L320 160 48.5 160C100.2 82.8 188.1 32 288 32c10.8 0 21.5 .6 32 1.8zM352 160l0-120.9C424.9 55.7 487.2 99.8 527.5 160L352 160zM29.9 192L96 192l0 128L0 320c0-46 10.8-89.4 29.9-128zM192 320l-64 0 0-128 320 0 0 128-64 0 0 32 192 0 0 80c0 26.5-21.5 48-48 48l-176 0 0-128c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 128L48 480c-26.5 0-48-21.5-48-48l0-80 192 0 0-32zm288 0l0-128 66.1 0c19.2 38.6 29.9 82 29.9 128l-96 0z" />
    </Icon>
);

export default Igloo;