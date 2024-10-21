
import { Icon } from "../../index";

/**
 * A component that renders the `peapod` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/peapod?s=regular peapod}
 * @preview ![peapod](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/peapod.svg)
 */
const Peapod: typeof Icon = x => (
    <Icon {...x}>
        <path d="M416 48C212.8 48 48 212.8 48 416l0 48 48 0c203.2 0 368-164.8 368-368l0-48-48 0zm0-48l48 0c26.5 0 48 21.5 48 48l0 48c0 229.8-186.2 416-416 416l-48 0c-26.5 0-48-21.5-48-48l0-48C0 186.2 186.2 0 416 0zM256 200a56 56 0 1 1 0 112 56 56 0 1 1 0-112zM88 368a56 56 0 1 1 112 0A56 56 0 1 1 88 368zM368 88a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
    </Icon>
);

export default Peapod;