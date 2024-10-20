
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-bolt-sun` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-bolt-sun?s=sharp-duotone-solid cloud-bolt-sun}
 * @preview ![cloud-bolt-sun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cloud-bolt-sun.svg)
 */
const CloudBoltSun: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 121.3L60.7 208 0 294.7 104 312l17.3 104L160 388.9l0-97.8c-28.7-16.6-48-47.6-48-83.2c0-53 43-96 96-96c18.4 0 35.6 5.2 50.2 14.1c11.9-19.9 29.1-36.2 49.6-47.2L294.7 0 208 60.7 121.3 0 104 104 0 121.3zM144 208c0 18.5 7.8 35.1 20.3 46.8c10.6-39.7 39.9-71.8 77.8-86.4c.8-4.3 1.8-8.5 3-12.6C234.7 148.4 221.8 144 208 144c-35.3 0-64 28.7-64 64zM288 360l0 24 88 0L336 512 512 376l0-24-88 0 40-128L288 360z" />
        <path d="M639.9 383.9l-80 0-15.9 0 0-63.9-76.5 0 40-128-51 0L256 344.3l0 39.6-64 0 0-96c0-47.6 34.6-87 80-94.6l0-1.3c0-53 43-96 96-96c34.9 0 65.4 18.6 82.2 46.4c13-9.1 28.8-14.4 45.8-14.4c44.2 0 80 35.8 80 80c0 5.9-.6 11.7-1.9 17.2c37.4 6.7 65.8 39.4 65.8 78.7l0 80z" />
    </Icon>
);

export default CloudBoltSun;