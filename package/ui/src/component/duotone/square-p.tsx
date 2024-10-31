
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-p` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-p?s=duotone square-p}
 * @preview ![square-p](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-p.svg)
 */
const SquareP: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm128 56c0-13.3 10.7-24 24-24l92 0c50.8 0 92 41.2 92 92s-41.2 92-92 92l-68 0 0 48c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-72 0-136zm48 24l0 88 68 0c24.3 0 44-19.7 44-44s-19.7-44-44-44l-68 0z" />
        <path d="M128 152c0-13.3 10.7-24 24-24l92 0c50.8 0 92 41.2 92 92s-41.2 92-92 92l-68 0 0 48c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-72 0-136zm48 112l68 0c24.3 0 44-19.7 44-44s-19.7-44-44-44l-68 0 0 88z" />
    </Icon>
);

export default SquareP;