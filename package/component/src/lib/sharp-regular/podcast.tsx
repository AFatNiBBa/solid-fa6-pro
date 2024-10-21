
import { Icon } from "../../index";

/**
 * A component that renders the `podcast` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/podcast?s=sharp-regular podcast}
 * @preview ![podcast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/podcast.svg)
 */
const Podcast: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M316 374.1c50.4-31 84-86.6 84-150.1c0-97.2-78.8-176-176-176S48 126.8 48 224c0 63.5 33.6 119.1 84 150l8.3 57.8C58 398.6 0 318.1 0 224C0 100.3 100.3 0 224 0S448 100.3 448 224c0 94.1-58 174.6-140.2 207.8l8.3-57.8zm3.3-42.1L313 324l-23.7-29.6C308.2 276.9 320 251.8 320 224c0-53-43-96-96-96s-96 43-96 96c0 27.8 11.8 52.9 30.7 70.4L135 324l-6.3 7.9C98.8 305.5 80 267 80 224c0-79.5 64.5-144 144-144s144 64.5 144 144c0 43-18.8 81.5-48.7 107.9zM224 240a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-80a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM160 344l32-40 64 0 32 40L264 512l-80 0L160 344zm77.5 13.8l-4.6-5.8-17.9 0-4.6 5.8L224 452.6l13.5-94.8z" />
    </Icon>
);

export default Podcast;