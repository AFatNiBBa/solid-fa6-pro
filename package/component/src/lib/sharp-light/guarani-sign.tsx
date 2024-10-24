
import { Icon } from "../../index";

/**
 * A component that renders the `guarani-sign` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/guarani-sign?s=sharp-light guarani-sign}
 * @preview ![guarani-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/guarani-sign.svg)
 */
const GuaraniSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 0L160 0l0 66.7C69.2 81.9 0 160.9 0 256s69.2 174.1 160 189.3l0 66.7 32 0 0-64c106 0 192-86 192-192l0-16-16 0-176 0 0-144c43.6 0 83.1 17.4 112 45.7l22.4-22.9C291.8 85 244.3 64 192 64l0-64zM160 99.2l0 313.6C87 398 32 333.4 32 256s55-142 128-156.8zM192 416l0-144 159.2 0c-8 80.9-76.2 144-159.2 144z" />
    </Icon>
);

export default GuaraniSign;