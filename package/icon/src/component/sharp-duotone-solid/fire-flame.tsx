
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fire-flame` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fire-flame?s=sharp-duotone-solid fire-flame}
 * @preview ![fire-flame](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/fire-flame.svg)
 */
const FireFlame: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 320.2C0 425.4 86.8 512 192 512s192-86.6 192-191.8c0-21.1-3.7-42.3-10.9-62.2c-34.8-95.8-93.3-181.2-170-248.3L192 0 180.9 9.7C104.2 76.8 45.7 162.2 10.9 258C3.7 277.8 0 299 0 320.2zm80-.6c0-25.5 12-49.6 32.4-64.9L128 243l0 55c0 24.3 19.8 44 44.1 44c24.2 0 43.9-19.6 43.9-43.8c0-11.6-4.6-22.8-12.8-31l-16.8-16.8c-11.7-11.7-18.3-27.7-18.3-44.3c0-19 8.6-37 23.5-48.9L208 144l0 15.9c0 12.9 5.2 25.2 14.3 34.2l47.1 46.4C291.5 262.2 304 292 304 323c0 60.2-48.8 109-109 109l-3 0c-61.9 0-112-50.6-112-112.4z" />
        <path d="M191.5 157.2L208 144v15.9c0 12.9 5.2 25.2 14.3 34.2l47.1 46.4C291.5 262.2 304 292 304 323c0 60.2-48.8 109-109 109h-3c-61.9 0-112-50.6-112-112.4c0-25.5 12-49.6 32.4-64.9L128 243v55c0 24.3 19.8 44 44.1 44c24.2 0 43.9-19.6 43.9-43.8c0-11.6-4.6-22.8-12.8-31l-16.8-16.8c-11.7-11.7-18.3-27.7-18.3-44.3c0-19 8.6-37 23.5-48.9z" />
    </Icon>
);

export default FireFlame;