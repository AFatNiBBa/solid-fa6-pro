
import { Icon } from "../../index";

/**
 * A component that renders the `dryer` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dryer?s=thin dryer}
 * @preview ![dryer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/dryer.svg)
 */
const Dryer: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 16c26.5 0 48 21.5 48 48l0 384c0 26.5-21.5 48-48 48L64 496c-26.5 0-48-21.5-48-48L16 64c0-26.5 21.5-48 48-48l320 0zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM96 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm80-32a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm48 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0 336c-68 0-123.6-53-127.8-120l87.8 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-87.8 0C100.4 229 156 176 224 176c70.7 0 128 57.3 128 128s-57.3 128-128 128zm0 16a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
    </Icon>
);

export default Dryer;