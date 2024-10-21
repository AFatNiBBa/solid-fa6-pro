
import { Icon } from "../../index";

/**
 * A component that renders the `bolt` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bolt?s=sharp-thin bolt}
 * @preview ![bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bolt.svg)
 */
const Bolt: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M291.4 203.7l52.9-178L352 0 330.5 16.1 32 240l0 48 112.7 3.9 16.5 .6-4.7 15.8-52.9 178L96 512l21.5-16.1L416 272l0-48-112.7-3.9-16.5-.6 4.7-15.8zM400 239.5l0 24.5L125.1 470.2 176.6 297l5.9-19.8-20.7-.7L48 272.5 48 248 322.9 41.9 271.4 215l-5.9 19.8 20.7 .7L400 239.5z" />
    </Icon>
);

export default Bolt;