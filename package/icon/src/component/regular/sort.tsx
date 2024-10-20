
import { Icon } from "../../index";

/**
 * A component that renders the `sort` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sort?s=regular sort}
 * @preview ![sort](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/sort.svg)
 */
const Sort: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M70.6 176l178.7 0L160 86.6 70.6 176zm112-134.6l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8L32 224c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128c12.5-12.5 32.8-12.5 45.3 0zM70.6 336L160 425.4 249.4 336 70.6 336zm112 134.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z" />
    </Icon>
);

export default Sort;