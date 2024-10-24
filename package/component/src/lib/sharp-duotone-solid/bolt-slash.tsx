
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bolt-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bolt-slash?s=sharp-duotone-solid bolt-slash}
 * @preview ![bolt-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bolt-slash.svg)
 */
const BoltSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M112 288l59.8-56.6 103.9 81.8L112 288zM224 512l58.1-193.7 79.9 63L224 512zm17.8-347L416 0 356.7 197.6 528 224l-94.6 89.7C369.5 264.1 305.7 214.6 241.8 165z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default BoltSlash;