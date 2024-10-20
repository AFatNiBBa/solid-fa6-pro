
import { Icon } from "../../index";

/**
 * A component that renders the `wagon-covered` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wagon-covered?s=sharp-solid wagon-covered}
 * @preview ![wagon-covered](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/wagon-covered.svg)
 */
const WagonCovered: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 0L224 16l0 208L64 224 0 0zM384 16l0 208-128 0 0-208 128 0zM64 256l512 0 0 64-33.6 0c20.7 20.3 33.6 48.7 33.6 80c0 61.9-50.1 112-112 112c-56.4 0-103.1-41.7-110.9-96l-66.3 0c-7.8 54.3-54.4 96-110.9 96c-61.9 0-112-50.1-112-112c0-31.3 12.9-59.7 33.6-80L64 320l0-64zm96 160l-46 0c5.8 22.5 23.5 40.2 46 46l0-46zm0-32l0-46c-22.5 5.8-40.2 23.5-46 46l46 0zm32 78c22.5-5.8 40.2-23.5 46-46l-46 0 0 46zm0-124l0 46 46 0c-5.8-22.5-23.5-40.2-46-46zM448 462l0-46-46 0c5.8 22.5 23.5 40.2 46 46zm-46-78l46 0 0-46c-22.5 5.8-40.2 23.5-46 46zm124 32l-46 0 0 46c22.5-5.8 40.2-23.5 46-46zm0-32c-5.8-22.5-23.5-40.2-46-46l0 46 46 0zM416 16L640 0 576 224l-160 0 0-208z" />
    </Icon>
);

export default WagonCovered;