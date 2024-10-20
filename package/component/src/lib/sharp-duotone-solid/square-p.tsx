
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-p` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-p?s=sharp-duotone-solid square-p}
 * @preview ![square-p](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-p.svg)
 */
const SquareP: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zm128 96l24 0 92 0c50.8 0 92 41.2 92 92l0 24-3.2 0c-10.6 39.2-46.3 68-88.8 68l-68 0 0 48 0 24-48 0 0-24 0-72 0-136 0-24zm48 48l0 88 68 0c24.3 0 44-19.7 44-44s-19.7-44-44-44l-68 0z" />
        <path d="M128 128l24 0 92 0c50.8 0 92 41.2 92 92l0 24-3.2 0c-10.6 39.2-46.3 68-88.8 68l-68 0 0 48 0 24-48 0 0-24 0-72 0-136 0-24zm48 136l68 0c24.3 0 44-19.7 44-44s-19.7-44-44-44l-68 0 0 88z" />
    </Icon>
);

export default SquareP;