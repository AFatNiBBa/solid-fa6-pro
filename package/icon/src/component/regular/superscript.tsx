
import { Icon } from "../../index";

/**
 * A component that renders the `superscript` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/superscript?s=regular superscript}
 * @preview ![superscript](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/superscript.svg)
 */
const Superscript: typeof Icon = x => (
    <Icon {...x}>
        <path d="M472 24c0-8-3.9-15.4-10.5-19.9s-15-5.4-22.4-2.4l-40 16c-12.3 4.9-18.3 18.9-13.4 31.2s18.9 18.3 31.2 13.4l7.1-2.8L424 176l-16 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0-152zM24 64C10.7 64 0 74.7 0 88s10.7 24 24 24l27.2 0 96 144-96 144L24 400c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0c8 0 15.5-4 20-10.7l92-138 92 138C272.5 444 280 448 288 448l40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-27.2 0-96-144 96-144 27.2 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0c-8 0-15.5 4-20 10.7l-92 138L84 74.7C79.5 68 72 64 64 64L24 64z" />
    </Icon>
);

export default Superscript;