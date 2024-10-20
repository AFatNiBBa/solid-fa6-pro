
import { Icon } from "../../index";

/**
 * A component that renders the `caret-down` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-down?s=thin caret-down}
 * @preview ![caret-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/caret-down.svg)
 */
const CaretDown: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M144.6 361.4c4 4.2 9.6 6.6 15.4 6.6s11.4-2.4 15.4-6.6L300.5 229.3c2.2-2.3 3.5-5.4 3.5-8.7c0-7-5.6-12.6-12.6-12.6L28.6 208c-7 0-12.6 5.6-12.6 12.6c0 3.2 1.2 6.3 3.5 8.7L144.6 361.4zm-11.6 11L7.8 240.3C2.8 235 0 227.9 0 220.6C0 204.8 12.8 192 28.6 192l262.8 0c15.8 0 28.6 12.8 28.6 28.6c0 7.3-2.8 14.4-7.8 19.7L187 372.4c-7 7.4-16.8 11.6-27 11.6s-20-4.2-27-11.6z" />
    </Icon>
);

export default CaretDown;