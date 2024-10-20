
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-bolt` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-bolt?s=duotone cloud-bolt}
 * @preview ![cloud-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cloud-bolt.svg)
 */
const CloudBolt: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M144.9 373.3c2.2 6.4 8.3 10.7 15.1 10.7l70.1 0L177.7 488.8c-3.4 6.7-1.6 14.9 4.3 19.6c2.9 2.4 6.5 3.6 10.1 3.6c3.5 0 7.1-1.2 10-3.5l160-128c5.3-4.2 7.4-11.4 5.1-17.8s-8.3-10.7-15.1-10.7l-70.1 0 52.4-104.8c3.4-6.7 1.6-14.9-4.2-19.6s-14.2-4.7-20.1-.1l-160 128c-5.3 4.2-7.4 11.4-5.1 17.8z" />
        <path d="M96 320c-53 0-96-43-96-96c0-42.5 27.6-78.6 65.9-91.2C64.7 126.1 64 119.1 64 112C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80c0 5.5-.6 10.8-1.6 16c.5 0 1.1 0 1.6 0c53 0 96 43 96 96s-43 96-96 96l-64 0-18.3 0 29.3-58.5c10.1-20.2 4.8-44.6-12.8-58.8s-42.6-14.2-60.2-.2L143.2 320 96 320z" />
    </Icon>
);

export default CloudBolt;