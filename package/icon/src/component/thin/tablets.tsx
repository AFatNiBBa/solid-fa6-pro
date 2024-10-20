
import { Icon } from "../../index";

/**
 * A component that renders the `tablets` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablets?s=thin tablets}
 * @preview ![tablets](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/tablets.svg)
 */
const Tablets: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M576 267.3L372.7 64C349.9 89.5 336 123.1 336 160c0 79.5 64.5 144 144 144c36.9 0 70.5-13.9 96-36.7zM587.3 256c22.8-25.5 36.7-59.1 36.7-96c0-79.5-64.5-144-144-144c-36.9 0-70.5 13.9-96 36.7L587.3 256zM320 160a160 160 0 1 1 320 0 160 160 0 1 1 -320 0zM303.8 360L16.2 360C20.4 435.8 83.2 496 160 496s139.6-60.2 143.8-136zm0-16c-4.2-75.8-66.9-136-143.8-136S20.4 268.2 16.2 344l287.6 0zM160 192a160 160 0 1 1 0 320 160 160 0 1 1 0-320z" />
    </Icon>
);

export default Tablets;