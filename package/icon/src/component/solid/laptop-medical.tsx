
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `laptop-medical` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-medical?s=solid laptop-medical}
 * @preview ![laptop-medical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MjQgMzg0SDE2QzcuMjUgMzg0IDAgMzkxLjI1IDAgNDAwVjQxNkMwIDQ1MS4yNSAyOC43NSA0ODAgNjQgNDgwSDU3NkM2MTEuMjUgNDgwIDY0MCA0NTEuMjUgNjQwIDQxNlY0MDBDNjQwIDM5MS4yNSA2MzIuNzUgMzg0IDYyNCAzODRaTTEyOCA5Nkg1MTJWMzUySDU3NlY4MEM1NzYgNTMuNjI1IDU1NC4zNzUgMzIgNTI4IDMySDExMkM4NS42MjUgMzIgNjQgNTMuNjI1IDY0IDgwVjM1MkgxMjhWOTZaTTMwNCAzMzZIMzM2QzM0NC44MDEgMzM2IDM1MiAzMjguNzk5IDM1MiAzMjBWMjcySDQwMEM0MDguODAxIDI3MiA0MTYgMjY0Ljc5OSA0MTYgMjU2VjIyNEM0MTYgMjE1LjE5OSA0MDguODAxIDIwOCA0MDAgMjA4SDM1MlYxNjBDMzUyIDE1MS4xOTkgMzQ0LjgwMSAxNDQgMzM2IDE0NEgzMDRDMjk1LjE5OSAxNDQgMjg4IDE1MS4xOTkgMjg4IDE2MFYyMDhIMjQwQzIzMS4xOTkgMjA4IDIyNCAyMTUuMTk5IDIyNCAyMjRWMjU2QzIyNCAyNjQuNzk5IDIzMS4xOTkgMjcyIDI0MCAyNzJIMjg4VjMyMEMyODggMzI4Ljc5OSAyOTUuMTk5IDMzNiAzMDQgMzM2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function LaptopMedical(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M624 384H16C7.25 384 0 391.25 0 400V416C0 451.25 28.75 480 64 480H576C611.25 480 640 451.25 640 416V400C640 391.25 632.75 384 624 384ZM128 96H512V352H576V80C576 53.625 554.375 32 528 32H112C85.625 32 64 53.625 64 80V352H128V96ZM304 336H336C344.801 336 352 328.799 352 320V272H400C408.801 272 416 264.799 416 256V224C416 215.199 408.801 208 400 208H352V160C352 151.199 344.801 144 336 144H304C295.199 144 288 151.199 288 160V208H240C231.199 208 224 215.199 224 224V256C224 264.799 231.199 272 240 272H288V320C288 328.799 295.199 336 304 336Z" />
        </Icon>
    </>
}