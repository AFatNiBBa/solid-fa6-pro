
import { Icon, generic } from "../../index";

/**
 * A component that renders the `brackets-round` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brackets-round?s=duotone brackets-round}
 * @preview ![brackets-round](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/brackets-round.svg)
 */
const BracketsRound: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M352 64c0 10.3 5 20.5 14.3 26.7C391.9 107.7 448 167 448 256s-56.1 148.3-81.8 165.4c-14.7 9.8-18.7 29.7-8.9 44.4C363.5 475 373.7 480 384 480c6.1 0 12.3-1.7 17.7-5.4C440.1 449.1 512 371.8 512 256s-71.9-193.1-110.2-218.6C396.3 33.7 390.1 32 384 32c-10.3 0-20.5 5-26.7 14.3C353.7 51.7 352 57.9 352 64z" />
        <path d="M154.6 46.2c9.8 14.7 5.8 34.6-8.9 44.4C120.1 107.7 64 167 64 256s56.1 148.3 81.8 165.4c14.7 9.8 18.7 29.7 8.9 44.4s-29.7 18.7-44.4 8.9C71.9 449 0 371.8 0 256S71.9 62.9 110.2 37.4c14.7-9.8 34.6-5.8 44.4 8.9z" />
    </Icon>
);

export default BracketsRound;