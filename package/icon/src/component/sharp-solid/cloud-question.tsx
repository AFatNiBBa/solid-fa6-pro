
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-question` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-question?s=sharp-solid cloud-question}
 * @preview ![cloud-question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cloud-question.svg)
 */
const CloudQuestion: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144 480L0 480 0 336c0-62.7 40.1-116 96-135.8l0-8.2c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96l0 36c55.2 14.2 96 64.3 96 124l0 128-128 0-368 0zm88-264l0 6.5 48 0 0-6.5c0-4.4 3.6-8 8-8l56.9 0c8.4 0 15.1 6.8 15.1 15.1c0 5.4-2.9 10.4-7.6 13.1l-44.3 25.4L296 268.6l0 13.9 0 21.5 0 24 48 0 0-24 0-7.6 32.3-18.5c19.6-11.3 31.7-32.2 31.7-54.8c0-34.9-28.3-63.1-63.1-63.1L288 160c-30.9 0-56 25.1-56 56zm64 152l0 48 48 0 0-48-48 0z" />
    </Icon>
);

export default CloudQuestion;