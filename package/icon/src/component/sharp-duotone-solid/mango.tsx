
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mango` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mango?s=sharp-duotone-solid mango}
 * @preview ![mango](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mango.svg)
 */
const Mango: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 384l0 64 43.9 20.7s100.1 43.3 244.1 43.3c166.5 0 224-147.4 224-224c0-49.1-18.7-98.3-56.2-135.8c-25.2-25.2-55.6-41.9-87.8-50.2l0 25.9 0 24-48 0 0-24 0-32c-49.1 0-98.3 18.7-135.8 56.2c-45.8 37.3-67.9 78.9-88.4 117.9c-19 36-36.8 69.7-71.1 95.4L0 384zm288 16c61.9 0 112-50.1 112-112l32 0c0 79.5-64.5 144-144 144l0-32z" />
        <path d="M368 128l0-74.9C385.2 79 414.6 96 448 96l40 0 24 0 0-24c0-39.8-32.2-72-72-72L376 0l-8 0L352 0 320 0l0 24 0 104 0 24 48 0 0-24z" />
    </Icon>
);

export default Mango;