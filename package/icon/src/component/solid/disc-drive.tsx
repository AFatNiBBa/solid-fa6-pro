
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `disc-drive` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/disc-drive?s=solid disc-drive}
 * @preview ![disc-drive](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYgNDE2SDQ4MFY5NkM0ODAgNjAuNjI1IDQ1MS4zNzUgMzIgNDE2IDMySDk2QzYwLjYyNSAzMiAzMiA2MC42MjUgMzIgOTZWNDE2SDE2QzcuMTI1IDQxNiAwIDQyMy4xMjUgMCA0MzJWNDY0QzAgNDcyLjg3NSA3LjEyNSA0ODAgMTYgNDgwSDQ5NkM1MDQuODc1IDQ4MCA1MTIgNDcyLjg3NSA1MTIgNDY0VjQzMkM1MTIgNDIzLjEyNSA1MDQuODc1IDQxNiA0OTYgNDE2Wk0yNTYgNDE2QzE2Ny42MjUgNDE2IDk2IDM0NC4zNzUgOTYgMjU2UzE2Ny42MjUgOTYgMjU2IDk2UzQxNiAxNjcuNjI1IDQxNiAyNTZTMzQ0LjM3NSA0MTYgMjU2IDQxNlpNMjU2IDIyNEMyMzguMzc1IDIyNCAyMjQgMjM4LjM3NSAyMjQgMjU2UzIzOC4zNzUgMjg4IDI1NiAyODhDMjczLjYyNSAyODggMjg4IDI3My42MjUgMjg4IDI1NlMyNzMuNjI1IDIyNCAyNTYgMjI0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function DiscDrive(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M496 416H480V96C480 60.625 451.375 32 416 32H96C60.625 32 32 60.625 32 96V416H16C7.125 416 0 423.125 0 432V464C0 472.875 7.125 480 16 480H496C504.875 480 512 472.875 512 464V432C512 423.125 504.875 416 496 416ZM256 416C167.625 416 96 344.375 96 256S167.625 96 256 96S416 167.625 416 256S344.375 416 256 416ZM256 224C238.375 224 224 238.375 224 256S238.375 288 256 288C273.625 288 288 273.625 288 256S273.625 224 256 224Z" />
        </Icon>
    </>
}