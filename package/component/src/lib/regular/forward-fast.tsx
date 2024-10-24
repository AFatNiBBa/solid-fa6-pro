
import { Icon } from "../../index";

/**
 * A component that renders the `forward-fast` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forward-fast?s=regular forward-fast}
 * @preview ![forward-fast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/forward-fast.svg)
 */
const ForwardFast: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 424c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-136.1L273.4 440.6c-5.4 4.8-12.4 7.4-19.6 7.4c-16.5 0-29.8-13.3-29.8-29.8l0-130.3L49.4 440.6C44 445.4 37 448 29.8 448C13.3 448 0 434.7 0 418.2L0 93.8C0 77.3 13.3 64 29.8 64C37 64 44 66.6 49.4 71.4L224 224.1l0-130.3C224 77.3 237.3 64 253.8 64c7.2 0 14.2 2.6 19.6 7.4L448 224.1 448 88c0-13.3 10.7-24 24-24s24 10.7 24 24l0 336zM48 133.9l0 244.2L187.6 256 48 133.9zM272 378.1L411.6 256 272 133.9l0 244.2z" />
    </Icon>
);

export default ForwardFast;