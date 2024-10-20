
import { Icon } from "../../index";

/**
 * A component that renders the `backward-step` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backward-step?s=sharp-light backward-step}
 * @preview ![backward-step](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/backward-step.svg)
 */
const BackwardStep: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M64 80l0-16L32 64l0 16 0 160 0 32 0 160 0 16 32 0 0-16 0-138L256 426l32 22 0-38.8 0-306.3L288 64 256 86 64 218 64 80zm1.2 176L256 124.8l0 262.3L65.2 256z" />
    </Icon>
);

export default BackwardStep;