
import { Icon, generic } from "../../index";

/**
 * A component that renders the `olive-branch` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/olive-branch?s=duotone olive-branch}
 * @preview ![olive-branch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/olive-branch.svg)
 */
const OliveBranch: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M192 320c0 106 64.5 192 144 192s144-86 144-192s-64.5-192-144-192s-144 86-144 192zM427.2 128.1c13.6 10.4 25.7 22.9 36.2 36.9C494 205.8 512 260.7 512 320c0 57.8-17.1 111.4-46.3 151.8c52.9 16.5 105.5 8.4 139.6-27c56.2-58.3 41-168.6-33.9-246.4c-42.9-44.5-96.1-68.7-144.2-70.3z" />
        <path d="M128 0C59 0 13.8 41.6 2.7 53.1C.9 55 0 57.4 0 60s.9 5 2.7 6.9c8.6 8.9 37.7 35.9 82.5 47.6C34.5 141.4 0 194.6 0 256l0 16c0 8.8 7.2 16 16 16l16 0c86.6 0 157.1-68.7 159.9-154.6L326.4 70.1C357.3 55.5 391.1 48 425.2 48L616 48c13.3 0 24-10.7 24-24s-10.7-24-24-24L425.2 0C384 0 343.3 9.1 306 26.7L252.2 52C239.4 39.1 194.9 0 128 0z" />
    </Icon>
);

export default OliveBranch;