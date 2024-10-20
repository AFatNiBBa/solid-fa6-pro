
import { Icon } from "../../index";

/**
 * A component that renders the `bus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bus?s=sharp-solid bus}
 * @preview ![bus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bus.svg)
 */
const Bus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 0C412.8 0 512 48 512 48l0 48 0 32 32 0 0 128-32 0 0 192-32 0 0 64-96 0 0-64-192 0 0 64-96 0 0-64-32 0L64 96s0 0 0 0l0-48s99.2-48 224-48zM64 256l-32 0 0-128 32 0 0 128zM304 128l0 160 144 0 0-160-144 0zm-32 0l-144 0 0 160 144 0 0-160zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 96l0-32-16 0L208 64l-16 0 0 32 16 0 160 0 16 0z" />
    </Icon>
);

export default Bus;