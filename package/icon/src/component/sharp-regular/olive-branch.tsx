
import { Icon } from "../../index";

/**
 * A component that renders the `olive-branch` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/olive-branch?s=sharp-regular olive-branch}
 * @preview ![olive-branch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/olive-branch.svg)
 */
const OliveBranch: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 64S48 0 128 0c60.2 0 102.3 36.3 119.4 54.2L357.8 2.3C361 .8 364.5 0 368 0L616 0l24 0 0 48-24 0L373.4 48 191.9 133.4C189.1 219.3 118.6 288 32 288l-16 0L0 288l0-16 0-16c0-61.4 34.5-114.6 85.2-141.5C31.2 100.4 0 64 0 64zM399.4 427c19.3-25.7 32.6-63.3 32.6-107s-13.3-81.3-32.6-107c-19.2-25.7-42.2-37-63.4-37s-44.2 11.4-63.4 37C253.3 238.7 240 276.4 240 320s13.3 81.3 32.6 107c19.2 25.7 42.2 37 63.4 37s44.2-11.4 63.4-37zM336 512c-79.5 0-144-86-144-192s64.5-192 144-192s144 86 144 192s-64.5 192-144 192zm129.7-40.2c9.4-13.1 17.6-27.5 24.4-43.1c3.6 .8 7.1 1.5 10.5 2c31.1 4.6 55-3.6 70.2-19.3c15.4-16 23.9-42.1 19.2-76c-4.7-33.8-22.2-71.6-53.2-103.7c-18-18.7-37.7-32.5-57.2-41.7c-4.9-8.8-10.3-17.2-16.2-25c-10.5-14-22.7-26.5-36.2-36.9c48.2 1.6 101.3 25.8 144.2 70.3c75 77.8 90.2 188.1 33.9 246.4c-34.1 35.4-86.8 43.5-139.6 27z" />
    </Icon>
);

export default OliveBranch;