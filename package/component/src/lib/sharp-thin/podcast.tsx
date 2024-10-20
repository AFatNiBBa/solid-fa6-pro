
import { Icon } from "../../index";

/**
 * A component that renders the `podcast` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/podcast?s=sharp-thin podcast}
 * @preview ![podcast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/podcast.svg)
 */
const Podcast: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 224c0 84-49.8 156.4-121.6 189.2l-2.7 18.6C390 398.6 448 318.1 448 224C448 100.3 347.7 0 224 0S0 100.3 0 224c0 94.1 58 174.6 140.2 207.8l-2.7-18.6C65.8 380.4 16 308 16 224C16 109.1 109.1 16 224 16s208 93.1 208 208zm-80 0c0 37.9-16.5 72-42.7 95.4L313 324l6.3 7.9C349.2 305.5 368 267 368 224c0-79.5-64.5-144-144-144S80 144.5 80 224c0 43 18.8 81.5 48.7 107.9L135 324l3.7-4.6C112.5 296 96 261.9 96 224c0-70.7 57.3-128 128-128s128 57.3 128 128zM224 176a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm26.1 208l-52.2 0L176.8 348.6 199.7 320l48.6 0 22.9 28.6L250.1 496zM160 344l24 168 80 0 24-168-32-40-64 0-32 40z" />
    </Icon>
);

export default Podcast;