
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-right` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right?s=thin arrow-right}
 * @preview ![arrow-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNzUuMTQ4IDc5LjgyMkw0NDUuNjQ1IDI1MC4zMThDNDQ4Ljc4NCAyNTMuNDU3IDQ0OC43ODQgMjU4LjU0MyA0NDUuNjQ1IDI2MS42ODNMMjc1LjE0OCA0MzIuMTc5QzI3Mi4wMDkgNDM1LjMxOCAyNjYuOTIzIDQzNS4zMTggMjYzLjc4MyA0MzIuMTc5QzI2MC42NDQgNDI5LjAzOSAyNjAuNjQ0IDQyMy45NTMgMjYzLjc4MyA0MjAuODE0TDQyMC41NiAyNjQuMDM3SDguMDM3QzMuNjEgMjY0LjAzNyAwIDI2MC40NDMgMCAyNTZDMCAyNTEuNTU4IDMuNjEgMjQ3Ljk2MyA4LjAzNyAyNDcuOTYzSDQyMC41NkwyNjMuNzgzIDkxLjE4N0MyNjAuNjQ0IDg4LjA0NyAyNjAuNjQ0IDgyLjk2MSAyNjMuNzgzIDc5LjgyMkMyNjYuOTI1IDc2LjY4IDI3Mi4wMDcgNzYuNjggMjc1LjE0OCA3OS44MjJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ArrowRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M275.148 79.822L445.645 250.318C448.784 253.457 448.784 258.543 445.645 261.683L275.148 432.179C272.009 435.318 266.923 435.318 263.783 432.179C260.644 429.039 260.644 423.953 263.783 420.814L420.56 264.037H8.037C3.61 264.037 0 260.443 0 256C0 251.558 3.61 247.963 8.037 247.963H420.56L263.783 91.187C260.644 88.047 260.644 82.961 263.783 79.822C266.925 76.68 272.007 76.68 275.148 79.822Z" />
        </Icon>
    </>
}