
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-bolt` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-bolt?s=sharp-thin cloud-bolt}
 * @preview ![cloud-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/cloud-bolt.svg)
 */
const CloudBolt: typeof Icon = x => (
    <Icon {...x}>
        <path d="M400 144l0-16c0-44.2-35.8-80-80-80c-16.1 0-31.1 4.8-43.7 12.9l-12.9 8.4-8.9-12.6C237.1 32.1 208.4 16 176 16c-53 0-96 43-96 96l0 21.5 0 11.3-10.7 3.8C38.2 159.5 16 189.2 16 224l0 80 80 0 68.1 0-20.7 16L96 320l-80 0L0 320l0-16 0-80c0-41.8 26.7-77.4 64-90.5L64 112C64 50.1 114.1 0 176 0c37.9 0 71.3 18.8 91.6 47.5C282.7 37.7 300.7 32 320 32c53 0 96 43 96 96c53 0 96 43 96 96l0 80 0 16-16 0-80 0-16 0-71 0 4-16 83 0 80 0 0-80c0-44.2-35.8-80-80-80l-16 0zM198.3 486.9L220 400l4-16-16.5 0L160 384l-16 0 0-16 0-8L299.6 239.8 320 224l-6.3 25.1L292 336l-4 16 16.5 0 47.5 0 16 0 0 16 0 8L212.4 496.2 192 512l6.3-25.1zM224 368l20.5 0-5 19.9-20.8 83.3L352 368.1l0-.1-64 0-20.5 0 5-19.9 20.8-83.3L160 367.9l0 .1 64 0z" />
    </Icon>
);

export default CloudBolt;