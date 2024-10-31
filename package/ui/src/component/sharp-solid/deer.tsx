
import { Icon } from "../../index";

/**
 * A component that renders the `deer` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/deer?s=sharp-solid deer}
 * @preview ![deer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/deer.svg)
 */
const Deer: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0l0 16 0 24c0 13.3 10.7 24 24 24l16 0c13.3 0 24-10.7 24-24l0-24 0-16 32 0 0 16 0 24c0 8.6-1.9 16.7-5.4 24l30.6 0L416 64c13.3 0 24-10.7 24-24l0-24 0-16 32 0 0 16 0 24c0 21.7-12.3 40.4-30.3 49.8c.6 .5 1.1 1.1 1.7 1.6L512 160l0 64-96 0-5.3 0L384 304l0 64 0 144-96 0 0-144-48 0-64-27.4 0 3.4 0 19.9-14.1 14.1-26.6 26.6L173.3 512 71.5 512 34.7 408 24.7 379.4l21.4-21.4L72.1 332 56 315.9c-3-3-5.7-6.1-8.1-9.5l-1.8 23.3-47.9-3.7L.1 302.2 2.4 272c4.2-54.2 49.3-96 103.7-96l7.9 0 14.1 0 96 0 78.4 0 9.6-32-56 0 0-32 64-16-24 0-16 0c-30.9 0-56-25.1-56-56l0-24 0-16 32 0zM400 160a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Deer;