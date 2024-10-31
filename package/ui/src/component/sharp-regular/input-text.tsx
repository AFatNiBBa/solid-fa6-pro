
import { Icon } from "../../index";

/**
 * A component that renders the `input-text` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/input-text?s=sharp-regular input-text}
 * @preview ![input-text](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/input-text.svg)
 */
const InputText: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 112l0 288 544 0 0-288L48 112zM0 64l48 0 544 0 48 0 0 48 0 288 0 48-48 0L48 448 0 448l0-48L0 112 0 64zm328 96l52 0c33.1 0 60 26.9 60 60c0 9.2-2.1 17.9-5.8 25.7c13.3 11 21.8 27.6 21.8 46.3c0 33.1-26.9 60-60 60l-68 0-24 0 0-24 0-8 0-64 0-64 0-8 0-24 24 0zm24 72l28 0c6.6 0 12-5.4 12-12s-5.4-12-12-12l-28 0 0 24zm44 72c6.6 0 12-5.4 12-12s-5.4-12-12-12l-16 0-28 0 0 24 44 0zM203.4 160l2.8 7.1 72 180 2 4.9-51.7 0L219 328 149 328l-9.6 24-51.7 0 2-4.9 72-180 2.8-7.1 38.9 0zm-3.7 120L184 240.6 168.2 280l31.5 0z" />
    </Icon>
);

export default InputText;