
import { Icon } from "../../index";

/**
 * A component that renders the `6` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/6?s=regular 6}
 * @preview ![6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/6.svg)
 */
const $6: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M272 320c0-61.9-50.1-112-112-112c-32.3 0-61.5 13.7-81.9 35.6l-5.1 6.3C56.8 269.7 48 294.5 48 320c0 61.9 50.1 112 112 112s112-50.1 112-112zM145.7 160.6c4.7-.4 9.5-.6 14.3-.6c88.4 0 160 71.6 160 160s-71.6 160-160 160S0 408.4 0 320c0-41.5 15.8-79.4 41.8-107.8L181.4 40.8c8.4-10.3 23.5-11.8 33.8-3.4s11.8 23.5 3.4 33.8l-72.9 89.5z" />
    </Icon>
);

export default $6;