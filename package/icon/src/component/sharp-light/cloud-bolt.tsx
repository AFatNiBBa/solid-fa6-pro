
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-bolt` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-bolt?s=sharp-light cloud-bolt}
 * @preview ![cloud-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/cloud-bolt.svg)
 */
const CloudBolt: typeof Icon = x => (
    <Icon {...x}>
        <path d="M384 128l0 32 32 0c35.3 0 64 28.7 64 64l0 64-64 0-16 0 0 16s0 0 0 0l0 16 16 0 64 0 32 0 0-32 0-64c0-53-43-96-96-96c0-53-43-96-96-96c-19.3 0-37.3 5.7-52.4 15.5C247.3 18.8 213.9 0 176 0C114.1 0 64 50.1 64 112l0 21.5C26.7 146.6 0 182.2 0 224l0 64 0 32 32 0 64 0 52.1 0 32-32L96 288l-64 0 0-64c0-27.8 17.8-51.6 42.7-60.4L96 156.1l0-22.6L96 112c0-44.2 35.8-80 80-80c27 0 50.9 13.4 65.5 34l17.8 25.2 25.9-16.9c10-6.5 22-10.3 34.9-10.3c35.3 0 64 28.7 64 64zm-88 96l-6.6 0-4.7 4.7-136 136-4.7 4.7 0 6.6 0 8 0 16 16 0 45.6 0-13.4 93.7L189.6 512l18.4 0 8 0 6.6 0 4.7-4.7 136-136 4.7-4.7 0-6.6 0-8 0-16-16 0-45.6 0 13.4-93.7 2.6-18.3L304 224l-8 0zM190.6 368l92.1-92.1-10.5 73.8L269.6 368l18.4 0 33.4 0-92.1 92.1 10.5-73.8 2.6-18.3L224 368l-33.4 0z" />
    </Icon>
);

export default CloudBolt;