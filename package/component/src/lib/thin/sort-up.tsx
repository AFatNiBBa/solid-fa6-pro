
import { Icon } from "../../index";

/**
 * A component that renders the `sort-up` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sort-up?s=thin sort-up}
 * @preview ![sort-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/sort-up.svg)
 */
const SortUp: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M144.6 54.6c4-4.2 9.6-6.6 15.4-6.6s11.4 2.4 15.4 6.6L300.5 186.7c2.2 2.3 3.5 5.4 3.5 8.7c0 7-5.6 12.6-12.6 12.6L28.6 208c-7 0-12.6-5.6-12.6-12.6c0-3.2 1.2-6.3 3.5-8.7L144.6 54.6zM133 43.6L7.8 175.7C2.8 181 0 188.1 0 195.4C0 211.2 12.8 224 28.6 224l262.8 0c15.8 0 28.6-12.8 28.6-28.6c0-7.3-2.8-14.4-7.8-19.7L187 43.6C180 36.2 170.2 32 160 32s-20 4.2-27 11.6z" />
    </Icon>
);

export default SortUp;