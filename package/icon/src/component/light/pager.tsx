
import { Icon } from "../../index";

/**
 * A component that renders the `pager` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pager?s=light pager}
 * @preview ![pager](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/pager.svg)
 */
const Pager: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 96c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32L64 416c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l384 0zM64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm0 272c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0c-8.8 0-16 7.2-16 16zm128 0c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0c-8.8 0-16 7.2-16 16zM96 160l320 0 0 96L96 256l0-96zm-32 0l0 96c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32L96 128c-17.7 0-32 14.3-32 32z" />
    </Icon>
);

export default Pager;