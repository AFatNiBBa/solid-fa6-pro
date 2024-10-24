
import { Icon } from "../../index";

/**
 * A component that renders the `narwhal` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/narwhal?s=sharp-solid narwhal}
 * @preview ![narwhal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/narwhal.svg)
 */
const Narwhal: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M640 336c0-49-20.2-93.2-52.7-125.2L640 0 511.7 166.8c-15.5-4.4-31.8-6.8-48.6-6.8c-50.9 0-100.7 17.5-140.2 49.6L128 368l0-112 64-32 0-128L96 144 0 96 0 224l64 32 0 96c0 88.4 71.6 160 160 160l240 0c97.2 0 176-78.8 176-176zM496 280a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Narwhal;