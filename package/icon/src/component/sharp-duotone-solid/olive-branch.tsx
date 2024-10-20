
import { Icon, generic } from "../../index";

/**
 * A component that renders the `olive-branch` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/olive-branch?s=sharp-duotone-solid olive-branch}
 * @preview ![olive-branch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/olive-branch.svg)
 */
const OliveBranch: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M192 320c0 106 64.5 192 144 192s144-86 144-192s-64.5-192-144-192s-144 86-144 192zM427.2 128.1c13.6 10.4 25.7 22.9 36.2 36.9C494 205.8 512 260.7 512 320c0 57.8-17.1 111.4-46.3 151.8c52.9 16.5 105.5 8.4 139.6-27c56.2-58.3 41-168.6-33.9-246.4c-42.9-44.5-96.1-68.7-144.2-70.3z" />
        <path d="M128 0C48 0 0 64 0 64s31.2 36.4 85.2 50.5C34.5 141.4 0 194.6 0 256l0 16 0 16 16 0 16 0c86.6 0 157.1-68.7 159.9-154.6L373.4 48 616 48l24 0 0-48L616 0 368 0c-3.5 0-7 .8-10.2 2.3L247.4 54.2C230.3 36.3 188.2 0 128 0z" />
    </Icon>
);

export default OliveBranch;