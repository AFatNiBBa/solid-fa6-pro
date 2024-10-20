
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-rainbow` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-rainbow?s=sharp-thin cloud-rainbow}
 * @preview ![cloud-rainbow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/cloud-rainbow.svg)
 */
const CloudRainbow: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M568 16l8 0 0-16-8 0C434.5 0 319.1 77.9 264.9 190.7c4.4 3.4 8.5 7.1 12.5 11C328.2 92.1 439.2 16 568 16zM447.8 292c17.9-49 65-84 120.2-84l8 0 0-16-8 0c-54.5 0-101.9 30.2-126.3 74.8c2.8 8 4.7 16.4 5.7 25l.4 .1zm-76-94.1c5.2 1.8 10.3 3.9 15.1 6.4C427.6 148.3 493.6 112 568 112l8 0 0-16-8 0c-81.1 0-152.8 40.2-196.3 101.8zM400 320l0 16 16 0c44.2 0 80 35.8 80 80l0 80-80 0L96 496l-80 0 0-80c0-34.8 22.2-64.5 53.3-75.5L80 336.8l0-11.3L80 304c0-53 43-96 96-96c32.4 0 61.1 16.1 78.5 40.8l8.9 12.6 12.9-8.4c12.5-8.2 27.5-12.9 43.7-12.9c44.2 0 80 35.8 80 80zM0 512l16 0 80 0 320 0 80 0 16 0 0-16 0-80c0-53-43-96-96-96c0-53-43-96-96-96c-19.3 0-37.3 5.7-52.4 15.5C247.3 210.8 213.9 192 176 192c-61.9 0-112 50.1-112 112l0 21.5C26.7 338.6 0 374.2 0 416l0 80 0 16z" />
    </Icon>
);

export default CloudRainbow;