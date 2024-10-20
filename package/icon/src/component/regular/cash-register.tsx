
import { Icon } from "../../index";

/**
 * A component that renders the `cash-register` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cash-register?s=regular cash-register}
 * @preview ![cash-register](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/cash-register.svg)
 */
const CashRegister: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 0C46.3 0 32 14.3 32 32l0 64c0 17.7 14.3 32 32 32l80 0 0 32-56.5 0c-31.8 0-58.9 23.4-63.4 54.9L.6 379.5c-.4 3-.6 6-.6 9L0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-59.5c0-3-.2-6.1-.6-9L487.8 214.9c-4.5-31.5-31.5-54.9-63.4-54.9L208 160l0-32 80 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L64 0zM96 48l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L96 80c-8.8 0-16-7.2-16-16s7.2-16 16-16zM48 448l0-16 416 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16zM440.3 221.7L463.5 384l-415 0L71.7 221.7c1.1-7.9 7.9-13.7 15.8-13.7l337 0c8 0 14.7 5.9 15.8 13.7zM112 232a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm72 24a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm-24 56a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm120-56a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm-24 56a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm120-56a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm-24 56a24 24 0 1 0 0 48 24 24 0 1 0 0-48z" />
    </Icon>
);

export default CashRegister;