
import { Icon, generic } from "../../index";

/**
 * A component that renders the `island-tropical` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/island-tropical?s=duotone island-tropical}
 * @preview ![island-tropical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/island-tropical.svg)
 */
const IslandTropical: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 352l64 0c1 0 2 0 3 0s2 .1 3 .1c2 .1 3.9 .2 5.9 .4c3.9 .4 7.7 .9 11.5 1.6c11.3-55.9 18.2-146.2-9.9-226.1l-24.7 0c-10 10-20 20-30 30c6.6 43.1 6.9 114.7-22.8 194z" />
        <path d="M108.7 96c2.1 0 4.2-.8 5.7-2.3l24-24c3.1-3.1 8.2-3.1 11.3 0l24 24c.3 .3 .6 .6 1 .8c-1.4 1.3-2.8 2.6-4.1 4c-54.7 54.7-50.8 114.1-32.3 145.7c4.5 7.6 14.7 7.6 21 1.4L276.8 128l103.9 0c2.1 0 4.2-.8 5.7-2.3l24-24c3.1-3.1 8.2-3.1 11.3 0l24 24c1.5 1.5 3.5 2.3 5.7 2.3l44.7 0c8.8 0 16.1-7.2 13.8-15.8C500.6 76.8 461.4 32 384 32c-33.8 0-60.4 8.6-80.3 21.2C285.2 25.5 248.6 0 190.2 0C112.8 0 73.6 44.8 64.4 80.2C62.2 88.8 69.4 96 78.2 96l30.4 0zM160 352C89.3 352 32 409.3 32 480c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32c0-70.7-57.3-128-128-128l-128 0z" />
    </Icon>
);

export default IslandTropical;