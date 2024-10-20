
import { Icon } from "../../index";

/**
 * A component that renders the `monument` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/monument?s=regular monument}
 * @preview ![monument](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/monument.svg)
 */
const Monument: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M175 7c9.4-9.4 24.6-9.4 33.9 0l80 80c3.8 3.8 6.2 8.7 6.8 14l41.4 331-48.4 0L249.2 115.1 192 57.9l-57.2 57.2L95.2 432l-48.4 0L88.2 101c.7-5.3 3.1-10.2 6.8-14L175 7zM42.8 464l48.4 0 201.6 0 48.4 0 18.8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0L64 512l-40 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l18.8 0zM144 312c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default Monument;