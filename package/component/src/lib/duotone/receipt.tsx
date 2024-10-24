
import { Icon, generic } from "../../index";

/**
 * A component that renders the `receipt` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/receipt?s=duotone receipt}
 * @preview ![receipt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/receipt.svg)
 */
const Receipt: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 24L0 488c0 9.4 5.5 17.9 14 21.8c3.2 1.5 6.6 2.2 10 2.2c5.6 0 11.2-2 15.6-5.8L80 471.6l40.4 34.6c9 7.7 22.3 7.7 31.2 0L192 471.6l40.4 34.6c9 7.7 22.3 7.7 31.2 0L304 471.6l40.4 34.6c4.4 3.8 10 5.8 15.6 5.8c3.4 0 6.8-.7 10-2.2c8.5-3.9 14-12.4 14-21.8l0-464c0-9.4-5.5-17.9-14-21.8C366.8 .7 363.4 0 360 0c-5.6 0-11.2 2-15.6 5.8L304 40.4 263.6 5.8c-9-7.7-22.3-7.7-31.2 0L192 40.4 151.6 5.8c-9-7.7-22.3-7.7-31.2 0L80 40.4 39.6 5.8C35.2 2 29.6 0 24 0c-3.4 0-6.8 .7-10 2.2C5.5 6.1 0 14.6 0 24zM80 160c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L96 176c-8.8 0-16-7.2-16-16zm0 96c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L96 272c-8.8 0-16-7.2-16-16zm0 96c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L96 368c-8.8 0-16-7.2-16-16z" />
        <path d="M80 160c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L96 176c-8.8 0-16-7.2-16-16zm0 192c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L96 368c-8.8 0-16-7.2-16-16zM96 240l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L96 272c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default Receipt;