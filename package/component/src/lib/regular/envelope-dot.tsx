
import { Icon } from "../../index";

/**
 * A component that renders the `envelope-dot` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-dot?s=regular envelope-dot}
 * @preview ![envelope-dot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/envelope-dot.svg)
 */
const EnvelopeDot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M496 160A80 80 0 1 0 496 0a80 80 0 1 0 0 160zm16 224l0-193.1c-5.2 .7-10.6 1.1-16 1.1c-22.5 0-43.5-6.6-61-18.1L291.5 291.7c-20.7 17-50.4 17-71.1 0L48 150.1 48 128c0-8.8 7.2-16 16-16l324.6 0c-3-10.1-4.6-20.9-4.6-32c0-5.4 .4-10.8 1.1-16L64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64zM48 212.2L190 328.8c38.4 31.5 93.7 31.5 132 0L464 212.2 464 384c0 8.8-7.2 16-16 16L64 400c-8.8 0-16-7.2-16-16l0-171.8z" />
    </Icon>
);

export default EnvelopeDot;