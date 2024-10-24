
import { Icon } from "../../index";

/**
 * A component that renders the `link-horizontal` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link-horizontal?s=sharp-regular link-horizontal}
 * @preview ![link-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/link-horizontal.svg)
 */
const LinkHorizontal: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M143.9 64C64.4 64 0 128.4 0 207.9c0 75.7 58.7 138.5 134.3 143.5l8.1 .5 3.2-47.9-8.1-.5C87.1 300.2 48 258.3 48 207.9c0-52.9 42.9-95.9 95.9-95.9l160.3 0c52.9 0 95.9 42.9 95.9 95.9c0 50.5-39.1 92.3-89.5 95.6l-8.1 .5 3.2 47.9 8.1-.5c75.6-5 134.3-67.8 134.3-143.5C448 128.4 383.6 64 304.1 64L143.9 64zM496.1 448C575.6 448 640 383.6 640 304.1c0-75.7-58.7-138.5-134.3-143.5l-8.1-.5-3.2 47.9 8.1 .5c50.4 3.4 89.5 45.2 89.5 95.6c0 52.9-42.9 95.9-95.9 95.9l-160.2 0c-53 0-95.9-42.9-95.9-95.9c0-50.5 39.1-92.3 89.5-95.7l7.1-.5-3.2-47.9-7.1 .5C250.7 165.6 192 228.4 192 304.1C192 383.6 256.4 448 335.9 448l160.2 0z" />
    </Icon>
);

export default LinkHorizontal;