
import { Icon } from "../../index";

/**
 * A component that renders the `seedling` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/seedling?s=sharp-regular seedling}
 * @preview ![seedling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/seedling.svg)
 */
const Seedling: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 32l0-32L464 0l-8 0C370.5 0 296.1 48 258.4 118.5c12.1 14.5 22.7 30.2 31.6 47.1C314 97.1 379.3 48 456 48l7.3 0c-7.5 83.3-73.1 149.9-156 159c4.9 15.1 8.4 30.9 10.5 47.1c104.4-13.9 186.1-99.7 193.6-206c.4-5.3 .6-10.6 .6-16zM56 112c97.2 0 176 78.8 176 176l0 16-8 0c-97.2 0-176-78.8-176-176l0-16 8 0zM279.9 280C275.6 160 177 64 56 64l-8 0L0 64l0 48 0 16C0 251.7 100.3 352 224 352l8 0 0 136 0 24 48 0 0-24 0-136 0-48 0-16 0-8-.1 0z" />
    </Icon>
);

export default Seedling;