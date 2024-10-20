
import { Icon } from "../../index";

/**
 * A component that renders the `elephant` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/elephant?s=sharp-solid elephant}
 * @preview ![elephant](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/elephant.svg)
 */
const Elephant: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M121.9 72.6c11.7-9.1 24.5-16.9 38.1-23.2l0 62.6c0 79.5 64.5 144 144 144l16 0 0-32-16 0c-61.9 0-112-50.1-112-112l0-74 0-38L304 0c30.5 0 58.2 12.2 78.4 32l1.6 0c88.4 0 160 71.6 160 160l0 119.4c-9.4 5.4-20.3 8.6-32 8.6c-20.9 0-39.5-10-51.2-25.6l-25.6 19.2c6.6 8.7 14.6 16.3 23.7 22.4c0 0 0 0 0 0c6.5 4.3 13.6 7.9 21.1 10.5c0 0 0 0 0 0c10 3.5 20.8 5.5 32 5.5s22-1.9 32-5.5c0 0 0 0 0 0c13.9-4.9 26.4-13 36.6-23.4l11.2-11.4 22.9 22.4-11.2 11.4C587.4 362 566.9 374.1 544 380l0 21.5c0 8 6.5 14.5 14.5 14.5c6.2 0 11.8-4 13.7-9.9l5.4-16.2 60.7 20.2L633 426.3c-10.7 32.1-40.7 53.7-74.5 53.7c-43.4 0-78.5-35.1-78.5-78.5l0-21.5c-25.2-6.5-47.3-20.4-64-39.3L416 512l-128 0 0-102c-15.3 3.9-31.4 6-48 6s-32.7-2.1-48-6l0 102L64 512l0-174.9L45.9 377.7 2.1 358.3 32 290.9 32 248c0-72.2 35.4-136.2 89.9-175.4zM464 224a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Elephant;