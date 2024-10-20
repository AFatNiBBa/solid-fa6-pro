
import { Icon } from "../../index";

/**
 * A component that renders the `cash-register` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cash-register?s=light cash-register}
 * @preview ![cash-register](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/cash-register.svg)
 */
const CashRegister: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 32c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16L80 96c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l192 0zM80 0C53.5 0 32 21.5 32 48l0 32c0 26.5 21.5 48 48 48l80 0 0 32-72.5 0c-31.8 0-58.9 23.4-63.4 54.9L.6 379.5c-.4 3-.6 6-.6 9L0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-59.5c0-3-.2-6.1-.6-9L487.8 214.9c-4.5-31.5-31.5-54.9-63.4-54.9L192 160l0-32 80 0c26.5 0 48-21.5 48-48l0-32c0-26.5-21.5-48-48-48L80 0zM32 448l0-32 448 0 0 32c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32zM456.2 219.5L479.7 384 32.3 384 55.8 219.5C58.1 203.7 71.6 192 87.5 192l337 0c15.9 0 29.4 11.7 31.7 27.5zM112 232a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm72 24a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm-24 56a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm120-56a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm-24 56a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm120-56a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm-24 56a24 24 0 1 0 0 48 24 24 0 1 0 0-48z" />
    </Icon>
);

export default CashRegister;