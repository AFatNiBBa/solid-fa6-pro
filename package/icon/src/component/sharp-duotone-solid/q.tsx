
import { Icon, generic } from "../../index";

/**
 * A component that renders the `q` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/q?s=sharp-duotone-solid q}
 * @preview ![q](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/q.svg)
 */
const Q: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 256c0 88.4 71.6 160 160 160c25.3 0 49.2-5.9 70.5-16.3L194.9 256l77.9 0 72.4 104.5c24.2-28 38.8-64.5 38.8-104.5c0-88.4-71.6-160-160-160S64 167.6 64 256zM331.3 452.7C299.4 470.1 262.9 480 224 480C100.3 480 0 379.7 0 256S100.3 32 224 32s224 100.3 224 224c0 61.8-25 117.8-65.5 158.3l66.2 95.5 1.5 2.2-77.9 0-41.1-59.3z" />
    </Icon>
);

export default Q;