
import { Icon } from "../../index";

/**
 * A component that renders the `money-check` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-check?s=light money-check}
 * @preview ![money-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/money-check.svg)
 */
const MoneyCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32L64 96zM0 128C0 92.7 28.7 64 64 64l448 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zm112 96l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM96 336c0-8.8 7.2-16 16-16l352 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-352 0c-8.8 0-16-7.2-16-16zM360 176c-4.4 0-8 3.6-8 8l0 48c0 4.4 3.6 8 8 8l80 0c4.4 0 8-3.6 8-8l0-48c0-4.4-3.6-8-8-8l-80 0zm-40 8c0-22.1 17.9-40 40-40l80 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-80 0c-22.1 0-40-17.9-40-40l0-48z" />
    </Icon>
);

export default MoneyCheck;