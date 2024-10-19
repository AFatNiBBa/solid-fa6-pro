
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `film` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/film?s=thin film}
 * @preview ![film](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQgMzJINDhDMjEuNDkyIDMyIDAgNTMuNDkgMCA4MFY0MzJDMCA0NTguNTEgMjEuNDkyIDQ4MCA0OCA0ODBINDY0QzQ5MC41MDggNDgwIDUxMiA0NTguNTEgNTEyIDQzMlY4MEM1MTIgNTMuNDkgNDkwLjUwOCAzMiA0NjQgMzJaTTExMiA0NjRINDhDMzAuMzU1IDQ2NCAxNiA0NDkuNjQ1IDE2IDQzMlY0MDhIMTEyVjQ2NFpNMTEyIDM5MkgxNlYzMTJIMTEyVjM5MlpNMTEyIDI5NkgxNlYyMTZIMTEyVjI5NlpNMTEyIDIwMEgxNlYxMjBIMTEyVjIwMFpNMTEyIDEwNEgxNlY4MEMxNiA2Mi4zNTUgMzAuMzU1IDQ4IDQ4IDQ4SDExMlYxMDRaTTM4NCA0NjRIMTI4VjI2NEgzODRWNDY0Wk0zODQgMjQ4SDEyOFY0OEgzODRWMjQ4Wk00OTYgNDMyQzQ5NiA0NDkuNjQ1IDQ4MS42NDUgNDY0IDQ2NCA0NjRINDAwVjQwOEg0OTZWNDMyWk00OTYgMzkySDQwMFYzMTJINDk2VjM5MlpNNDk2IDI5Nkg0MDBWMjE2SDQ5NlYyOTZaTTQ5NiAyMDBINDAwVjEyMEg0OTZWMjAwWk00OTYgMTA0SDQwMFY0OEg0NjRDNDgxLjY0NSA0OCA0OTYgNjIuMzU1IDQ5NiA4MFYxMDRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Film(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M464 32H48C21.492 32 0 53.49 0 80V432C0 458.51 21.492 480 48 480H464C490.508 480 512 458.51 512 432V80C512 53.49 490.508 32 464 32ZM112 464H48C30.355 464 16 449.645 16 432V408H112V464ZM112 392H16V312H112V392ZM112 296H16V216H112V296ZM112 200H16V120H112V200ZM112 104H16V80C16 62.355 30.355 48 48 48H112V104ZM384 464H128V264H384V464ZM384 248H128V48H384V248ZM496 432C496 449.645 481.645 464 464 464H400V408H496V432ZM496 392H400V312H496V392ZM496 296H400V216H496V296ZM496 200H400V120H496V200ZM496 104H400V48H464C481.645 48 496 62.355 496 80V104Z" />
        </Icon>
    </>
}