
import { Icon } from "../../index";

/**
 * A component that renders the `question` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/question?s=regular question}
 * @preview ![question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/question.svg)
 */
const Question: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M64 160c0-44.2 35.8-80 80-80l32 0c44.2 0 80 35.8 80 80l0 4.6c0 24.1-12 46.6-32.1 59.9l-52.3 34.9C149.4 274.2 136 299.2 136 326l0 2c0 13.3 10.7 24 24 24s24-10.7 24-24l0-2c0-10.7 5.3-20.7 14.2-26.6l52.3-34.9c33.4-22.3 53.4-59.7 53.4-99.8l0-4.6c0-70.7-57.3-128-128-128l-32 0C73.3 32 16 89.3 16 160c0 13.3 10.7 24 24 24s24-10.7 24-24zm96 320a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Question;