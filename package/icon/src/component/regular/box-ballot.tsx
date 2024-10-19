
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `box-ballot` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/box-ballot?s=regular box-ballot}
 * @preview ![box-ballot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MjAgMTYwSDQ4MFYyMDhINTIwQzUyNC40MDYgMjA4IDUyOCAyMTEuNTk0IDUyOCAyMTZWMzIwSDQ4VjIxNkM0OCAyMTEuNTk0IDUxLjU5NCAyMDggNTYgMjA4SDk2VjE2MEg1NkMyNS4xMjUgMTYwIDAgMTg1LjEyNSAwIDIxNlY0NTZDMCA0ODYuODc1IDI1LjEyNSA1MTIgNTYgNTEySDUyMEM1NTAuODc1IDUxMiA1NzYgNDg2Ljg3NSA1NzYgNDU2VjIxNkM1NzYgMTg1LjEyNSA1NTAuODc1IDE2MCA1MjAgMTYwWk01MjggNDU2QzUyOCA0NjAuNDA2IDUyNC40MDYgNDY0IDUyMCA0NjRINTZDNTEuNTk0IDQ2NCA0OCA0NjAuNDA2IDQ4IDQ1NlYzNjhINTI4VjQ1NlpNMTYwIDI1Nkg0MTZDNDMzLjY3NCAyNTYgNDQ4IDI0MS42NzIgNDQ4IDIyNFYzMkM0NDggMTQuMzI4IDQzMy42NzQgMCA0MTYgMEgxNjBDMTQyLjMyOCAwIDEyOCAxNC4zMjggMTI4IDMyVjIyNEMxMjggMjQxLjY3MiAxNDIuMzI4IDI1NiAxNjAgMjU2Wk0xNzYgNDhINDAwVjIwOEgxNzZWNDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BoxBallot(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M520 160H480V208H520C524.406 208 528 211.594 528 216V320H48V216C48 211.594 51.594 208 56 208H96V160H56C25.125 160 0 185.125 0 216V456C0 486.875 25.125 512 56 512H520C550.875 512 576 486.875 576 456V216C576 185.125 550.875 160 520 160ZM528 456C528 460.406 524.406 464 520 464H56C51.594 464 48 460.406 48 456V368H528V456ZM160 256H416C433.674 256 448 241.672 448 224V32C448 14.328 433.674 0 416 0H160C142.328 0 128 14.328 128 32V224C128 241.672 142.328 256 160 256ZM176 48H400V208H176V48Z" />
        </Icon>
    </>
}