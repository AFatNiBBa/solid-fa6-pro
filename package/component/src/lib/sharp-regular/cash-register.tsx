
import { Icon } from "../../index";

/**
 * A component that renders the `cash-register` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cash-register?s=sharp-regular cash-register}
 * @preview ![cash-register](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/cash-register.svg)
 */
const CashRegister: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 0L320 0l0 128-112 0 0 32 272 0 32 224 0 80 0 48-48 0L48 512 0 512l0-48 0-80L32 160l112 0 0-32L32 128 32 0zM80 48l0 32 16 0 160 0 16 0 0-32-16 0L96 48 80 48zM464 464l0-32L48 432l0 32 416 0zM438.4 208L73.6 208 48.5 384l415 0L438.4 208zM136 232l0 48-48 0 0-48 48 0zm48 0l48 0 0 48-48 0 0-48zm0 80l0 48-48 0 0-48 48 0zm96-80l48 0 0 48-48 0 0-48zm0 128l-48 0 0-48 48 0 0 48zm96-128l48 0 0 48-48 0 0-48zm0 80l0 48-48 0 0-48 48 0z" />
    </Icon>
);

export default CashRegister;