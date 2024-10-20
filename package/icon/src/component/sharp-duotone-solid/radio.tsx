
import { Icon, generic } from "../../index";

/**
 * A component that renders the `radio` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/radio?s=sharp-duotone-solid radio}
 * @preview ![radio](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/radio.svg)
 */
const Radio: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 128c63.3 0 126.5 0 189.8 0c107.4 0 214.8 0 322.2 0l0 384L0 512 0 128zM64 304l0 32 16 0 128 0 16 0 0-32-16 0L80 304l-16 0zm16-64l0 32 16 0 96 0 16 0 0-32-16 0-96 0-16 0zm0 128l0 32 16 0 96 0 16 0 0-32-16 0-96 0-16 0zm208-48a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M509 49.6l-23.3 5.7L189.8 128 0 128l0-2.8 18.3-4.5 456-112L497.6 3 509 49.6zM368 240a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
    </Icon>
);

export default Radio;