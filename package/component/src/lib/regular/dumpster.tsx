
import { Icon } from "../../index";

/**
 * A component that renders the `dumpster` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dumpster?s=regular dumpster}
 * @preview ![dumpster](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/dumpster.svg)
 */
const Dumpster: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M49.7 32c-10.5 0-19.8 6.9-22.9 16.9L.9 133c-.6 2-.9 4.1-.9 6.1C0 150.7 9.3 160 20.9 160l94 0L140.5 32 49.7 32zM272 160l0-128-98.9 0L147.5 160 272 160zm32 0l124.5 0L402.9 32 304 32l0 128zm157.1 0l94 0c11.5 0 20.9-9.3 20.9-20.9c0-2.1-.3-4.1-.9-6.1L549.2 48.9C546.1 38.9 536.8 32 526.3 32l-90.8 0 25.6 128zM86.4 240l403.3 0-20 160-363.3 0-20-160zM112 448l352 0 0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8 22-176 18 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-12 0 4-32-48.4 0L80.4 192 32 192l4 32-12 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l18 0L64 448l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8z" />
    </Icon>
);

export default Dumpster;