
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `backward-fast` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/backward-fast?s=solid backward-fast}
 * @preview ![backward-fast](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDQxNS45NjZWOTYuMDMxQzAgNzguMzU5IDE0LjMyNiA2NC4wMzIgMzEuOTk5IDY0LjAzMkgzMS45OTlDNDkuNjczIDY0LjAzMiA2NCA3OC4zNiA2NCA5Ni4wMzRWMjI3Ljg4TDIzNS41IDcxLjQwNkMyNTYuMTI1IDU0LjI4NCAyODggNjguNjU3IDI4OCA5Ni4wMjdWMjI3Ljg4TDQ1OS41IDcxLjQwNkM0ODAuMTI1IDU0LjI4NCA1MTIgNjguNjU3IDUxMiA5Ni4wMjdWNDE1Ljk3M0M1MTIgNDQzLjM0MyA0ODAuMTI1IDQ1Ny43MTYgNDU5LjUgNDQwLjU5NEwyODggMjg1LjI0NVY0MTUuOTczQzI4OCA0NDMuMzQzIDI1Ni4xMjUgNDU3LjcxNiAyMzUuNSA0NDAuNTk0TDY0IDI4NS4yNDVWNDE1Ljk2OUM2NCA0MzMuNjQxIDQ5LjY3NCA0NDcuOTY4IDMyLjAwMSA0NDcuOTY4SDMyLjAwMUMxNC4zMjcgNDQ3Ljk2OCAwIDQzMy42NCAwIDQxNS45NjZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BackwardFast(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M0 415.966V96.031C0 78.359 14.326 64.032 31.999 64.032H31.999C49.673 64.032 64 78.36 64 96.034V227.88L235.5 71.406C256.125 54.284 288 68.657 288 96.027V227.88L459.5 71.406C480.125 54.284 512 68.657 512 96.027V415.973C512 443.343 480.125 457.716 459.5 440.594L288 285.245V415.973C288 443.343 256.125 457.716 235.5 440.594L64 285.245V415.969C64 433.641 49.674 447.968 32.001 447.968H32.001C14.327 447.968 0 433.64 0 415.966Z" />
        </Icon>
    </>
}