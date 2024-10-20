
import { Icon } from "../../index";

/**
 * A component that renders the `cash-register` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cash-register?s=sharp-thin cash-register}
 * @preview ![cash-register](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/cash-register.svg)
 */
const CashRegister: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 16l0 96 120 0 16 0 120 0 0-96L48 16zM304 128l-120 0 0 32 296 0 32 224 0 112 0 16-16 0L16 512 0 512l0-16L0 384 32 160l136 0 0-32L48 128l-16 0 0-16 0-96L32 0 48 0 304 0l16 0 0 16 0 96 0 16-16 0zM168 176L45.9 176 16.2 384l479.7 0L466.1 176 184 176l-16 0zM496 496l0-96L16 400l0 96 480 0zM128 224l0 16 0 16-16 0-16 0 0-16 0-16 16 0 16 0zm96 0l0 32-32 0 0-32 32 0zm-48 80l0 32-32 0 0-32 32 0zm64 32l0-32 32 0 0 32-32 0zm128-32l0 32-32 0 0-32 32 0zm16-80l32 0 0 32-32 0 0-32zM96 56l160 0 8 0 0 16-8 0L96 72l-8 0 0-16 8 0zM288 224l32 0 0 32-32 0 0-32z" />
    </Icon>
);

export default CashRegister;