
import { Icon } from "../../index";

/**
 * A component that renders the `podcast` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/podcast?s=sharp-light podcast}
 * @preview ![podcast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/podcast.svg)
 */
const Podcast: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 224c0 73.9-41.7 138-102.8 170.1l-5.4 37.7C390 398.6 448 318.1 448 224C448 100.3 347.7 0 224 0S0 100.3 0 224c0 94.1 58 174.6 140.2 207.8l-5.4-37.7C73.7 362 32 297.9 32 224C32 118 118 32 224 32s192 86 192 192zm-48 0c0-79.5-64.5-144-144-144S80 144.5 80 224c0 43 18.8 81.5 48.7 107.9L135 324l13.7-17.1c-22.5-20.5-36.7-50-36.7-82.9c0-61.9 50.1-112 112-112s112 50.1 112 112c0 32.9-14.2 62.4-36.7 82.9L313 324l6.3 7.9C349.2 305.5 368 267 368 224zM224 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 96a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm12.2 192l-24.5 0L193.6 353.2 207.4 336l33.2 0 13.7 17.2L236.2 480zM160 344l24 168 80 0 24-168-32-40-64 0-32 40z" />
    </Icon>
);

export default Podcast;