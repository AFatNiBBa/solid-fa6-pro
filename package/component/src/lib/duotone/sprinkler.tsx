
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sprinkler` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sprinkler?s=duotone sprinkler}
 * @preview ![sprinkler](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/sprinkler.svg)
 */
const Sprinkler: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 24a24 24 0 1 0 48 0A24 24 0 1 0 0 24zM0 128a24 24 0 1 0 48 0A24 24 0 1 0 0 128zM0 232a24 24 0 1 0 48 0A24 24 0 1 0 0 232zM64 72a24 24 0 1 0 48 0A24 24 0 1 0 64 72zm0 112a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm64-56a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm208 0a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm64-56a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm0 112a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zM464 24a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm0 104a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm0 104a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z" />
        <path d="M288 96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-100.2 0C108.4 256 96 268.4 96 283.8c0 7.8 3.3 15.2 9 20.5L192 384l0 96c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-96 87-79.7c5.7-5.3 9-12.7 9-20.5c0-15.3-12.4-27.8-27.8-27.8L288 256l0-160z" />
    </Icon>
);

export default Sprinkler;